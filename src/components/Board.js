import { BoardHeader } from './BoardHeader';
import { Ticket } from '../components';
import { Droppable } from 'react-beautiful-dnd';

export const Board = (props) => {

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
          <BoardHeader heading={props.heading} />
          
          {props.columns[props.status]['ticketIds'].map((item, index) => <Ticket key={item} index={index} ticket={props.data[item]} />)}
          
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}