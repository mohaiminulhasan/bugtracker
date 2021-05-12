import { useState } from 'react';

export const Ticket = (props) => {
  const [showControls, setShowControls] = useState('hidden');

  const dragStart = e => {
    e.dataTransfer.setData('ticket_id', e.target.id);
    e.dataTransfer.setData('ticket_parent_id', e.target.parentElement.id);
    
    setTimeout(() => {
      e.target.style.display = 'none';
    }, 0);
  }

  const dragEnd = e => {
    if (e.target.style.display === 'none') {
      e.target.style.display = 'block';
    }
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div
      id={props.id}
      className={`TICKET ${props.className} flex flex-col`}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragOver={dragOver}
      onClick={props.onClick}
      onMouseOver={() => setShowControls('inline')}
      onMouseOut={() => setShowControls('hidden')}
    >
      {props.children}
      
      <div className='flex mt-4 h-8'>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 border border-dashed border-gray-400 rounded-lg p-1 text-gray-400 hover:bg-blue-100 hover:text-gray-700 hover:border-gray-700 ${showControls}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
}