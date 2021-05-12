export const Toolbar = () => {
  return (
    <div className='TOOLBAR border-t px-5 py-2 flex justify-between items-center text-xs min-w-min'>
      <div className='text-gray-500'>Created on ...</div>
      <div className='flex text-gray-500 font-bold'>
        <div className='px-2 flex cursor-pointer hover:bg-gray-100 rounded p-1 delay-50 duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto pr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </div>
        <div className='px-2 flex cursor-pointer hover:bg-gray-100 rounded p-1 delay-50 duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto pr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          Sort
        </div>
      </div>
    </div>
  );
}