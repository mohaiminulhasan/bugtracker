import { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';

export const NewTicket = (props) => {
  const node = useRef();
  const { projectSlug } = useParams();
  const [title, setTitle] = useState('');

  const handleClick = e => {
    if (!node.current.contains(e.target)) {
      props.setNewTicket(false);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    async function postData() {
      const uri = 'http://127.0.0.1:8000/tickets/create/';

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'POST',
        headers: h,
        body: JSON.stringify({
          title: title,
          project: projectSlug,
          status: props.status,
          username: JSON.parse(localStorage.getItem('userInfo')).username
        }),
        mode: 'cors'
      });

      const response = await fetch(req);
      const data = await response.json();

      props.setNewTicket(false);
      console.log({...props.columns[props.status], 'ticketIds': data['order']});
      console.log({...props.data, [data.ticket.id]: data['ticket']});
      props.setColumns({
        ...props.columns,
        [props.status]: {
          ...props.columns[props.status],
          'ticketIds': data['order']
        }
      })
      props.setData({
        ...props.data,
        [data.ticket.id]: data['ticket']
      });
    }
    
    postData();
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node}>
      <div
        className={`TICKET p-3 w-full bg-white shadow-md rounded-lg mb-2 border text-gray-800 hover:shadow-lg hover:border-gray-300 flex flex-col`}
      >
        {props.status}
        {projectSlug}
        <form onSubmit={handleSubmit}>
          <input type='text' className='p-1 w-full' autoFocus required value={title} onChange={e => setTitle(e.target.value)} />
          <div className='flex mt-4 h-8 justify-end'>
            <button type='submit' className='rounded bg-indigo-500 text-white px-2 hover:shadow-lg'>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}