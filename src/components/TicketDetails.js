import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TicketDetails = () => {
  console.log('rendering ticket details...');

  const statusDict = {
    'IB': 'ICE BOX',
    'EM': 'EMERGENCY',
    'IP': 'IN PROGRESS',
    'TS': 'TESTING',
    'CO': 'COMPLETE'
  }
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const uri = 'http://127.0.0.1:8000/tickets/' + id;

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

      setTicket(data);
    }

    fetchData();
  }, [id]);

  return (
    <>
    {
      ticket &&
        <div className="border border-gray-500 rounded p-4 shadow-lg w-1/4">
          <div className="font-bold text-lg text-gray-700">{ticket.title}</div>
          <div>Priority: <span className="font-bold">{ticket.priority}</span></div>
          <div>Status: <span className={`text-xs bg-indigo-300 p-1 rounded font-bold`}>{statusDict[ticket.status]}</span></div>
        </div>
    }
    </>
  );
}