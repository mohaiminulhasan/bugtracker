import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const Ticket = ({ ticket, index }) => {
  const [showControls, setShowControls] = useState('hidden');

  return (
    <Draggable
      draggableId={ticket.id.toString()}
      index={index}
    >
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`TICKET p-3 w-full bg-white shadow-md rounded-lg mb-2 border text-gray-800 hover:shadow-lg hover:border-gray-300 flex flex-col`}
          onMouseOver={() => setShowControls('inline')}
          onMouseOut={() => setShowControls('hidden')}
        >
          {ticket.id} &nbsp;
          {ticket.title}
          <div className='flex mt-4 h-8'>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 border border-dashed border-gray-400 rounded-lg p-1 text-gray-400 hover:bg-blue-100 hover:text-gray-700 hover:border-gray-700 mr-1 ${showControls}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 border border-dashed border-gray-400 rounded-lg p-1 text-gray-400 hover:bg-blue-100 hover:text-gray-700 hover:border-gray-700 mr-1 ${showControls}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>
        </div>
      )}
    </Draggable>
  );
}