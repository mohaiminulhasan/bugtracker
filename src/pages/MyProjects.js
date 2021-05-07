import { useEffect, useState } from 'react';
import { Topbar } from '../components';
import { NavLink, useRouteMatch, Switch } from 'react-router-dom';
import { AuthenticatedRoute } from '../App';

import { Project } from './Project';


export const MyProjects = () => {
  let { path, url } = useRouteMatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const uri = 'http://127.0.0.1:8000/projects/';

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
      
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  const projectLinkActiveStyle = { borderBottom: '1px solid red', paddingBottom: '2px' };

  return (
    <>
    <Topbar />

    <div className="px-4">
      <p className="font-bold text-gray-700 text-lg">My Projects</p>

      {/* sidebar */}
      <div className="flex">
        <div className="w-1/5">
          {loading ? <div>...loading</div> : 
            data.map((item, index) => <div key={index}><NavLink className="leading-loose" activeStyle={projectLinkActiveStyle} to={`${url}/${item.slug}`}>{item.title}</NavLink></div>)
          }
        </div>

        <div className="w-4/5">
          <Switch>
            <AuthenticatedRoute path={`${path}/:projectSlug`}>
              <Project />
            </AuthenticatedRoute>
          </Switch>
        </div>
      </div>
    </div>
    </>
  );
}
