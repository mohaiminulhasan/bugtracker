import { Board, Toolbar } from '../components';
import { Topbar } from '../components/TopbarDir';

import { DragDropContext } from 'react-beautiful-dnd';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const Project = () => {
  const { projectSlug } = useParams();
  const [data, setData] = useState({});
  const [columns, setColumns] = useState({});
  const [loading, setLoading] = useState(true);

  const statuses = ['IB', 'EM', 'IP', 'TS', 'CO'];

  const moveTicket = async (source, sourceindex, destination, destinationindex) => {
    const uri = `http://127.0.0.1:8000/move/from/${source}/${sourceindex}/to/${destination}/${destinationindex}/`;

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
      <Topbar title={projectSlug} projectSlug={projectSlug} />
      <Toolbar />
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
                        className='flex flex-col p-1 w-1/5'
                      />
            })
          }
        </div>
      </DragDropContext>
    </div>
  );
}