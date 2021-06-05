import { useContext, useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TicketMenu } from './TicketMenu';
import { AppContext } from '../context/AppContext';

export const Ticket = (props) => {
  const appContext = useContext(AppContext);
  const [showControls, setShowControls] = useState('hidden');
  const [editable, setEditable] = useState(false);
  const node = useRef();

  const handleEnter = e => {
    if(e.code === 'Enter' && editable) {
      console.log(node.current.innerText);
      console.log(props.ticket.id);

      async function postData() {
        const uri = `${appContext.apiUrl}/tickets/${props.ticket.id}/update/`;

        let h = new Headers();
        h.append('Content-Type', 'application/json');
        h.append('Authorization', 'Token ' + localStorage.getItem('token'));

        let req = new Request(uri, {
          method: 'PATCH',
          headers: h,
          body: JSON.stringify({
            title: node.current.innerText
          }),
          mode: 'cors'
        });

        await fetch(req);

        const copyOfData = {...props.data};
        copyOfData[props.ticket.id.toString()]['title'] = node.current.innerText;
        props.setData(copyOfData);
      }

      postData();

      setEditable(false);
    }
  }

  useEffect(() => {
    const current = node.current;
    current.addEventListener('keydown', handleEnter)
    return () => {
      current.removeEventListener("keydown", handleEnter);
    };
  });

  return (
    <Draggable
      draggableId={props.ticket.id.toString()}
      index={props.index}
      isDragDisabled={props.isDragDisabled}
    >
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`TICKET p-3 w-full bg-white shadow-md rounded-lg mb-2 border text-gray-800 hover:shadow-lg hover:border-gray-300 flex flex-col`}
          onMouseOver={() => setShowControls('inline')}
          onMouseOut={() => { setShowControls('hidden');  }}
        >

          {/* {props.ticket.id} &nbsp; */}
          <div 
            ref={node}
            contentEditable={editable} 
            suppressContentEditableWarning="true"
            className={editable ? `cursor-text border` : ''}
          >
              {props.ticket.title}
          </div>
          { editable && <div className='text-gray-300 text-xs'>Click on the text above to edit; Press ENTER to save</div>}

          <div className='flex mt-4 h-8 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 border border-dashed border-gray-400 rounded-lg p-1 text-gray-400 hover:bg-blue-100 hover:text-gray-700 hover:border-gray-700 mr-1 ${showControls}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <TicketMenu setEditable={setEditable} ticket_id={props.ticket.id} showControls={showControls} {...props} />
          </div>
        </div>
      )}
    </Draggable>
  );
}