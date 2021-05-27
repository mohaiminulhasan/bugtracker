import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { Toolbar } from '../components';
import { Topbar } from '../components/TopbarDir';
import { AppContext } from '../context/AppContext';

export const ProjectSettings = () => {
  const { projectSlug } = useParams();
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
    <>
    <Topbar title={project.title} projectSlug={projectSlug} />
    <Toolbar created={project.created} />
    </>
  );
}