import { Link } from 'react-router-dom';

export const NewProjectIcon = () => {
  return (
    <Link to='/new/project'>
      <div className='p-4 pt-5 h-48 max-w-min flex flex-col justify-start items-center rounded-3xl cursor-pointer hover:bg-purple-50 hover:pt-4 delay-50 duration-300'>
        <div className='h-24 w-24 rounded-2xl flex border-2 border-gray-400 border-dashed'>
          <div className='m-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>
        <div className='text-gray-700 tracking-wider uppercase text-xs font-bold mt-2 text-center'>New Project</div>
      </div>
    </Link>
  );
}