import { BoardHeader } from './BoardHeader';
import { AddForm } from '../components';
import { useState } from 'react';

export const Board = (props) => {
  const [showAdd, setShowAdd] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const patchTicket = async (ticket_id, board_id) => {
    const uri = `http://127.0.0.1:8000/move/${ticket_id}/`;

    let h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Authorization', 'Token ' + localStorage.getItem('token'));

    let req = new Request(uri, {
      method: 'PATCH',
      headers: h,
      body: JSON.stringify({
        'status': board_id
      }),
      mode: 'cors'
    });

    const response = await fetch(req);
    let data = {};
    if (response.ok) {
      data = await response.json();
    } else {
      data = { 'response': 'Invalid' }
    }

    return data;
  }

  const drop = e => {
    e.preventDefault();
    const ticket_id = e.dataTransfer.getData('ticket_id');
    if (ticket_id !== "") {
      const ticket_parent_id = e.dataTransfer.getData('ticket_parent_id');

      if (e.target.id !== ticket_parent_id) {
        const res = patchTicket(ticket_id, e.target.id);

        if (res.response !== 'Invalid') {
          props.moveElementInState(ticket_id, ticket_parent_id, e.target.id);
        }
      }
    }
  }

  const dragOver = e => {
    e.preventDefault();
  }

  const handleClick = e => {
    setShowAdd(false);
    setShowForm(true);
  }

  return (
    <div
      id={props.id}
      className={`BOARD ${props.className}`}
      onDrop={drop}
      onDragOver={dragOver}
      style={props.style}
    >
      <BoardHeader heading={props.heading} />
      {/* { showForm && <AddForm addTicket={props.addTicket} status={props.id} project={props.projectSlug} setShowAdd={setShowAdd} setShowForm={setShowForm} /> } */}
      {/* { showAdd && <button className="border-2 border-gray-500 border-t-0 bg-gray-300" onDragOver={(e) => e.stopPropagation()} onClick={handleClick}>Add</button> } */}
      {props.children}
    </div>
  );
}