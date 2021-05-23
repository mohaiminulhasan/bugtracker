import { ProjectIconBare } from './ProjectIconBare';
import { ProfileMenu } from './ProfileMenu';
import { Midbar } from './Midbar';
import { Link, useRouteMatch } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/solid';

export const Topbar = (props) => {
  const { path } = useRouteMatch();

  return (
    <div className='TOPBAR h-16 w-full flex items-center justify-between min-w-min'>
      {
        path !== '/home' &&
      <div className='h-16 w-16 flex'>
        <div className='m-auto p-2 cursor-pointer rounded-lg delay-50 duration-300 hover:bg-gray-200 text-gray-400 hover:text-gray-500'>
          <Link to='/home'>
            <HomeIcon className="h-6 w-6" />
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg> */}
          </Link>
        </div>
      </div>
      }

      <div className={`h-16 flex flex-1 ${path === '/home' && 'ml-2'}`}>
        <ProjectIconBare size={12} iconsize={8} />
        <Midbar {...props} />
      </div>

      <div className='my-auto mr-4'>
        <ProfileMenu />
      </div>
    </div>
  );
}