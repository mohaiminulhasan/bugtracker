import { useEffect, useState } from 'react';
import { Topbar } from '../components';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
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

  return (
    <>
    <Topbar />
    <h3>My Projects</h3>
    {loading ? <div>...loading</div> : 
      data.map((item, index) => <div key={index}><Link to={`${url}/${item.slug}`}>{item.title}</Link></div>)
    }

    <Switch>
      <AuthenticatedRoute path={`${path}/:projectSlug`}>
        <Project />
      </AuthenticatedRoute>
    </Switch>
    </>
  );
}
