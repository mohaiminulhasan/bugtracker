import { useEffect, useState } from "react";

import { ProjectIcon, NewProjectIcon, Toolbar } from '../components';
import { Topbar } from '../components/Topbar';

export const Home = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      const uri = 'http://127.0.0.1:8000/projects';

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'GET',
        headers: h,
        mode: 'cors'
      });

      const response = await fetch(req);
      const data = await response.json();

      setProjects(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <Topbar title='Home' />
      <Toolbar />

      <div className='m-auto'>
        <div className='text-gray-700 font-bold p-4 border-b border-gray-500 mx-10 mb-4'>My Projects</div>

        <div className='flex mx-10 flex-wrap'>
          {
            loading ? <div>loading...</div> :
            projects.map((item, index) => (
              <ProjectIcon to={`/myprojects/${item.slug}`} key={index} title={item.title} size={24} iconsize={14} />
            ))
          }

          <NewProjectIcon />
        </div>
      </div>
    </div>
  );
}