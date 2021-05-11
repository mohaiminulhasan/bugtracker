import { Link } from 'react-router-dom';

import { ProjectIconBare } from './ProjectIconBare';

export const ProjectIcon = (props) => {
  return (
    <Link to={props.to}>
      <div className='p-4 pt-5 pr-6 h-48 max-w-min flex flex-col justify-start items-center rounded-3xl cursor-pointer hover:bg-purple-50 hover:pt-4 delay-50 duration-300'>
        <ProjectIconBare size={props.size} iconsize={props.iconsize} />
        <div className='text-gray-700 tracking-wider uppercase text-xs font-bold mt-2'>{props.title}</div>
      </div>
    </Link>
  );
}