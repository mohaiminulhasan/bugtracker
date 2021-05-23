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
          </Link>
        </div>
      </div>
      }

      <div className={`h-16 flex flex-1 ${path === '/home' && 'ml-2'}`}>
        <ProjectIconBare size='small' iconsize='small' />
        <Midbar {...props} />
      </div>

      <div className='my-auto mr-4'>
        <ProfileMenu />
      </div>
    </div>
  );
}