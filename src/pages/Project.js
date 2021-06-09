import { Board, TicketRetrieve, Toolbar } from '../components';
import { Topbar } from '../components/TopbarDir';

import { DragDropContext } from 'react-beautiful-dnd';
import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export const Project = () => {
  const { projectSlug } = useParams();
  const [isDeveloper, setIsDeveloper] = useState('true');
  const [users, setUsers] = useState([]);
  const [project, setProject] = useState({});
  const [data, setData] = useState({});
  const [columns, setColumns] = useState({});
  const [loading, setLoading] = useState(true);
  const appContext = useContext(AppContext);

  const statuses = ['IB', 'EM', 'IP', 'TS', 'CO'];

  const moveTicket = async (source, sourceindex, destination, destinationindex) => {
    const uri = `${appContext.apiUrl}/move/from/${source}/${sourceindex}/to/${destination}/${destinationindex}/`;

    let h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Authorization', 'Token ' + localStorage.getItem('token'));

    let req = new Request(uri, {
      method: 'PATCH',
      headers: h,
      body: JSON.stringify({
        'project': projectSlug
      }),
      mode: 'cors'
    });

    const response = await fetch(req);
    let data = {};
    if (response.ok) {
      data = await response.json();
    } else {
      data = { 'response': 'Invalid' }
    }

    return data;
  }

  useEffect(() => {
    async function fetchUsers() {
      const uri = `${appContext.apiUrl}/is/user/developer/in/${projectSlug}`;

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

      setIsDeveloper(data);
    }

    fetchUsers();
  }, [projectSlug]);

  useEffect(() => {
    async function fetchUsers() {
      const uri = `${appContext.apiUrl}/users`;

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

      setUsers(data);
    }

    fetchUsers();
  }, [projectSlug]);

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
      setData(data.tickets);
      setColumns(data.columns);
      setLoading(false);
    }

    fetchData();
  }, [projectSlug]);

  const dragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    let newColumns = {};
    if (start === finish) {
      const newTicketIds = Array.from(start.ticketIds);
      const [removed] = newTicketIds.splice(source.index, 1); 
      newTicketIds.splice(destination.index, 0, removed); 

      const newColumn = {
        ...start,
        ticketIds: newTicketIds
      }

      newColumns = {
        ...columns,
        [newColumn.id]: newColumn,
      }
    } else {
      const startTicketIds = Array.from(start.ticketIds);
      const [removed] = startTicketIds.splice(source.index, 1);
      const newStart = {
        ...start,
        ticketIds: startTicketIds,
      };

      const finishTicketIds = Array.from(finish.ticketIds);
      finishTicketIds.splice(destination.index, 0, removed);
      const newFinish = {
        ...finish,
        ticketIds: finishTicketIds,
      };

      newColumns = {
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      };
    }

    moveTicket(source.droppableId, source.index, destination.droppableId, destination.index);
    setColumns(newColumns);
    return;
  }

  return (
    <div className='PROJECT flex flex-col w-full'>
      <Topbar title={project.title} projectSlug={projectSlug} />
      <Toolbar created={project.created} />
      <DragDropContext onDragEnd={dragEnd}>
        <div id='boards' className='PROJECT flex bg-gray-50 shadow-inner overflow-x-auto' style={{ height: 'calc(100vh - 106px)'}}>
          {
            loading ? null : statuses.map((status, index) => {
              return <Board 
                        key={index} 
                        id={status} 
                        heading={columns[status]['title']}
                        data={data}
                        columns={columns}
                        setData={setData}
                        setColumns={setColumns}
                        status={status}
                        users={users}
                        className='flex flex-col p-1 w-1/5'
                        isDeveloper={isDeveloper}
                      />
            })
          }
        </div>
      </DragDropContext>
    </div>
  );
}