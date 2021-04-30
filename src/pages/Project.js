import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useRouteMatch } from 'react-router-dom';

export const Project = () => {
  let { url } = useRouteMatch();
  const { projectSlug }= useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const uri = 'http://127.0.0.1:8000/tickets/' + projectSlug;

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
  }, [projectSlug]);

  return (
    <>
    <p>{ projectSlug }</p>

    {loading ? <div>...loading</div> :
      data.map((item, index) => <div key={index}><Link to={`${url}/${item.id}`} key={index}>{item.title}</Link></div>)
    }
    </>
  );
}