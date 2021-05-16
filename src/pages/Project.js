import { Board, Ticket, TicketDetails, Toolbar, AddTicket } from '../components';
import { Topbar } from '../components/TopbarDir';

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

  const moveElementInState = (ticket_id, prev_board_id, next_board_id) => {
    let tempObj = {};
    let temp = {...data};
    let obj = temp[prev_board_id].find(x => x.id === parseInt(ticket_id));

    if (typeof obj !== "undefined") {
      tempObj = obj;
      temp[prev_board_id] = temp[prev_board_id].filter(x => x.id !== parseInt(ticket_id));
      temp[next_board_id].push(tempObj);
    }

    setData(temp);
  }

  const handleClick = (ticket_id) => {
    history.push(`${url}/ticket/${ticket_id}`)
  }

  const addTicket = (obj) => {
    let temp = {...data};
    temp[obj.status].push(obj);
    setData(temp);
  }

  return (
    <div className='PROJECT flex flex-col w-full'>
      <Topbar title={projectSlug} projectSlug={projectSlug} />
      <Toolbar />
      <div id='boards' className='PROJECT flex bg-gray-50 shadow-inner overflow-x-auto' style={{ height: 'calc(100vh - 106px)'}}>
        {
          loading ? null : statuses.map((status, index) => {
            return <Board 
                      key={index} 
                      id={status} 
                      projectSlug={projectSlug}
                      heading={statusDict[status]}
                      addTicket={addTicket}
                      moveElementInState={moveElementInState } 
                      className='flex flex-col p-1 overflow-y-auto w-1/5'
                      // style={{ minWidth: 300 }}
                      >
              {
                data[status].map((item, index) => <Ticket 
                                                    key={index} 
                                                    id={item.id} 
                                                    className='p-3 w-full bg-white shadow-md rounded-lg mb-2 border text-gray-800 cursor-pointer hover:shadow-lg hover:border-gray-300 delay-50 duration-300' 
                                                    draggable="true"
                                                    onClick={() => handleClick(item.id)}
                                                    >
                                                      {item.title}
                                                    </Ticket>)
              }
              <AddTicket
                moveElementInState={moveElementInState } 
                id={status}
              />
            </Board>
          })
        }
      </div>

      <Switch>
        <AuthenticatedRoute path={`${path}/ticket/:id`}>
          <TicketDetails />
        </AuthenticatedRoute>
      </Switch>
    </div>
  );
}