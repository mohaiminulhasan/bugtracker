export const BoardHeader = (props) => {
  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div className='BOARD-HEADER flex justify-between items-center py-2 text-gray-500'>
      <p className='text-gray-700 font-bold text-xs pl-1' onDragOver={dragOver}>{props.heading}</p>

      <svg onClick={() => props.setNewTicket(true)} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer rounded p-1 hover:bg-gray-200 hover:text-gray-700 delay-50 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </div>
  );
}