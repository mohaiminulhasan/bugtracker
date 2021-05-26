// import { FilterIcon } from '@heroicons/react/outline'

export const Toolbar = (props) => {
  return (
    <div className='TOOLBAR border-t px-5 py-2 flex justify-between items-center text-xs min-w-min'>
      <div className='text-gray-500'>Created on {props.created}</div>
      {/* <div className='flex text-gray-500 font-bold'>
        <div className='px-2 flex cursor-pointer hover:bg-gray-100 rounded p-1 delay-50 duration-300'>
          <FilterIcon className='h-4 w-4 my-auto pr-1' />
          Filter
        </div>
      </div> */}
    </div>
  );
}