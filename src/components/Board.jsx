import { BoardHeader } from './BoardHeader';
import { Ticket, NewTicket } from '.';
import { Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';

export const Board = (props) => {
  const [newTicket, setNewTicket] = useState(false);

  return (
    <Droppable droppableId={props.id}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          id={props.id}
          className={`BOARD ${props.className}`}
          style={props.style}
        >
          <BoardHeader heading={props.heading} setNewTicket={setNewTicket} />
          
          {newTicket ? <NewTicket 
                          setNewTicket={setNewTicket} 
                          status={props.status} 
                          data={props.data}
                          columns={props.columns}
                          setData={props.setData} 
                          setColumns={props.setColumns} /> : null}
          {props.columns[props.status]['ticketIds'].map((item, index) => {
            console.log(props.data[item].isDragDisabled)
            return props.data[item] && <Ticket 
                                         key={item} 
                                         index={index} 
                                         status={props.status}
                                         ticket={props.data[item]} 
                                         data={props.data} 
                                         columns={props.columns} 
                                         setData={props.setData} 
                                         setColumns={props.setColumns} 
                                         isDragDisabled={props.data[item].isDragDisabled === "true"}
                                       />
          })}
          
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}