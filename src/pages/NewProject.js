import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const NewProject = () => {
  const [project, setProject] = useState('');
  const history = useHistory();

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if(e.code === 'Escape') {
        history.push('/home');
      }
    })
  });

  const handleSubmit = e => {
    e.preventDefault();

    async function postData() {
      const uri = 'http://127.0.0.1:8000/projects/';

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'POST',
        headers: h,
        body: JSON.stringify({
          title: project
        }),
        mode: 'cors'
      });

      await fetch(req);
    }

    postData();

    history.push('/home');
  }

  return (
    <div className='flex h-screen'>
      <form className='m-auto bg-indigo-500 p-10 rounded-lg w-1/4' onSubmit={handleSubmit}>
        <Link to='/home' className='float-right font-xs'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        <div className='text-white font-bold tracking-wider text-lg mb-4'>New Project</div>

        <div className='text-indigo text-xs mb-1'>Project Name</div>
        <input 
          className='opacity-30 border-b border-transparent focus:outline-none focus:border-black focus:opacity-70 p-1 w-full' 
          type='text' 
          name='project'
          onChange={e => setProject(e.target.value)}
          value={project}
          autoFocus />

        <button className='mt-4 bg-red-500 text-white p-1 w-full rounded focus:outline-none hover:bg-red-600 disabled:bg-indigo-300 disabled:text-gray-500' disabled={project === ''}>Create Project</button>
      </form>
    </div>
  );
}
