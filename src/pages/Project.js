import '../assets/Project.css';
import { Board, Ticket, TicketDetails } from '../components';

import { useEffect, useState } from "react";
import { Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom';
import { AuthenticatedRoute } from '../App';


export const Project = () => {
  let history = useHistory();
  let { path, url } = useRouteMatch();
  const { projectSlug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const statuses = ['IB', 'EM', 'IP', 'TS', 'CO'];
  const statusDict = {
    'IB': 'ICE BOX',
    'EM': 'EMERGENCY',
    'IP': 'IN PROGRESS',
    'TS': 'TESTING',
    'CO': 'COMPLETE'
  }

  useEffect(() => {
    async function fetchData() {
      const uri = 'http://127.0.0.1:8000/tickets/in/' + projectSlug;

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

  const handleClick = (ticket_id) => {
    history.push(`${url}/ticket/${ticket_id}`)
  }

  const addTicket = (obj) => {
    let temp = {...data};
    temp[obj.status].push(obj);
    setData(temp);
  }

  return (
    <>
    <div id='boards'>
      {loading ? null : statuses.map((status, index) => {
        return <Board 
                  key={index} 
                  id={status} 
                  projectSlug={projectSlug}
                  heading={statusDict[status]}
                  addTicket={addTicket}
                  className='border border-gray-500 rounded-t-md board'>
          {
            data[status].map((item, index) => <Ticket 
                                                key={index} 
                                                id={item.id} 
                                                className='ticket' 
                                                draggable="true"
                                                onClick={() => handleClick(item.id)}
                                                >
                                                  {item.title}
                                                </Ticket>)
          }
        </Board>
      })
      }
    </div>

    <Switch>
      <AuthenticatedRoute path={`${path}/ticket/:id`}>
        <TicketDetails />
      </AuthenticatedRoute>
    </Switch>
    </>
  );
}