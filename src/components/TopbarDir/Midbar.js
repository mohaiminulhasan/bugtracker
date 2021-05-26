import { ProjectMenu } from './ProjectMenu';
import { Link } from 'react-router-dom';

export const Midbar = (props) => {
  if (props.projectSlug !== undefined) {
    return (
      <>
        <div className='flex flex-col pl-4 mt-auto'>
          <div className='flex'>
            <div className='font-bold text-lg text-gray-900 pr-2'>{props.title}</div>
            <ProjectMenu />
          </div>
          <div className='flex'>
            <div className='pb-1 border-b-2 border-indigo-500 cursor-pointer text-indigo-500 font-medium'>
              <Link to={`/myprojects/${props.projectSlug}`}>Board</Link>
            </div>
            <div className='pl-5'>
              <div className='pb-1 border-b-2 border-white hover:border-gray-500 cursor-pointer text-gray-500 font-medium hover:text-gray-900'>Settings</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className='my-auto pl-4 font-bold text-gray-900 text-lg'>{props.title}</div>
      </>
    );
  }
}