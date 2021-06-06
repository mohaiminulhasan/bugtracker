import { useContext, useEffect, useState } from "react";

import { ProjectIcon, NewProjectIcon } from '../components';
import { Topbar } from '../components/TopbarDir';
import { AppContext } from "../context/AppContext";

export const Home = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const appContext = useContext(AppContext);
  
  useEffect(() => {
    async function fetchData() {
      const uri = `${appContext.apiUrl}/projects`;

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

      <div className='m-auto'>
        <div className='text-gray-700 font-bold p-4 border-b border-gray-500 mx-10 mb-4'>My Projects</div>

        <div className='flex mx-10 flex-wrap'>
          {
            loading ? <div>loading...</div> :
            projects.map((item, index) => (
              <ProjectIcon to={`/${item.slug}`} key={index} title={item.title} size='big' iconsize='big' />
            ))
          }

          <NewProjectIcon />
        </div>
      </div>
    </div>
  );
}