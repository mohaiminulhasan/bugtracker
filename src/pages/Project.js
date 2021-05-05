import '../assets/Project.css';
import { Board, Ticket } from '../components';

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useRouteMatch } from 'react-router-dom';


export const Project = () => {
  let { url } = useRouteMatch();
  const { projectSlug }= useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const statuses = ['IB', 'EM', 'IP', 'TS', 'CO'];

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
    <div id='boards'>
      {loading ? null : statuses.map((status, index) => {
        return <Board key={index} id={status} className='board'>
          {
            data[status].map((item, index) => <Ticket key={index} id={item.id} className='ticket' draggable="true">{item.title}</Ticket>)
          }
        </Board>
      })
      }
    </div>
    </>
  );
}