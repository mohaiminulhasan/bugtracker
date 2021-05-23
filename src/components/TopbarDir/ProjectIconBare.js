import { CubeTransparentIcon } from '@heroicons/react/solid';

/**
 * PurgeCSS:
 * h-12
 * w-12
 * h-8
 * w-8
 * h-24
 * w-24
 * h-14
 * w-14
 */

export const ProjectIconBare = (props) => {
  return (
    <div className={`bg-indigo-900 ${props.size === 'big' ? 'h-24 w-24' : 'h-12 w-12'} rounded-xl flex filter drop-shadow-lg my-auto`}>
      <div className='m-auto'>
        <CubeTransparentIcon className={`${props.iconsize === 'big' ? 'h-14 w-14' : 'h-8 w-8'} text-indigo-100`}/>
      </div>
    </div>
  );
}
