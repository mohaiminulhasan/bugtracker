import { ProjectIconBare } from './ProjectIconBare';
import { ProfileMenu } from './ProfileMenu';
import { Midbar } from './Midbar';

export const Topbar = (props) => {
  return (
    <div className='h-16 flex justify-between'>
      <div className='h-16 w-16 flex'>
        <div className='m-auto p-2 cursor-pointer rounded-lg delay-50 duration-300 hover:bg-gray-200 text-gray-400 hover:text-gray-500'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      <div className='h-16 flex flex-1'>
        <ProjectIconBare size={12} iconsize={8} />
        <Midbar {...props} />
      </div>

      <div className='my-auto mr-4'>
        <ProfileMenu />
      </div>
    </div>
  );
}