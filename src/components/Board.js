import { BoardHeader } from './BoardHeader';

export const Board = (props) => {
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

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      <BoardHeader heading={props.heading} />
      {props.children}
    </div>
  );
}