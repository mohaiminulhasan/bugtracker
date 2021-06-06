import { useState, useEffect, useContext } from 'react';
import { useParams, useRouteMatch, NavLink, Switch, Route } from 'react-router-dom';
import { Toolbar } from '../components';
import { Topbar } from '../components/TopbarDir';
import { AppContext } from '../context/AppContext';
import { RoleMgt } from './RoleMgt';
import { UserMgt } from './UserMgt';

export const ProjectSettings = () => {
  const { projectSlug } = useParams();
  let { path, url } = useRouteMatch();
  const [project, setProject] = useState({});
  const appContext = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      const uri = `${appContext.apiUrl}/tickets/in/${projectSlug}`;

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

      setProject(data.project);
    }

    fetchData();
  }, [projectSlug]);

  return (
    project &&
      <>
      <Topbar title={project.title} projectSlug={projectSlug} />
      <Toolbar created={project.created} />

      {
        project.settings === 'true' ?
        <div className='flex flex-row'>
          <div className='flex flex-col flex-initial'>
            <NavLink to={`${url}/user/management`} activeClassName='underline'>User Management</NavLink>
            <NavLink to={`${url}/role/management`} activeClassName='underline'>Role Management</NavLink>
          </div>
          <div className='flex-auto'>
            <Switch>
              <Route path={`${path}/user/management`}>
                <UserMgt />
              </Route>
              <Route path={`${path}/role/management`}>
                <RoleMgt />
              </Route>
            </Switch>
          </div>
        </div> :
        <div className='flex flex-row'>You can't change the project settings as a developer.</div>
      }
      </>
  );
}