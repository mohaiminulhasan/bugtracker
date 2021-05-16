export const AddTicket = (props) => {
  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <div 
      onDragOver={dragOver} 
      id={props.id}
      className="flex justify-center items-center text-gray-500 cursor-pointer rounded p-1 hover:bg-gray-200 hover:text-gray-700 delay-50 duration-300">
      <svg id={props.id} onDragOver={e => e.preventDefault()} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      &nbsp;
      <span id={props.id} onDragOver={e => e.preventDefault()}>
        Add Ticket
      </span>
    </div>
  );
}