import { useContext, useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TicketMenu } from './TicketMenu';
import { AssignDeveloperMenu } from './AssignDeveloperMenu';
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
      // isDragDisabled={props.isDragDisabled}
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

          {
            props.isDeveloper ? null :
            <div className='flex mt-4 h-8 items-center'>
              <AssignDeveloperMenu setEditable={setEditable} ticket_id={props.ticket.id} showControls={showControls} {...props} />
              <TicketMenu setEditable={setEditable} ticket_id={props.ticket.id} showControls={showControls} {...props} />
              {
                props.ticket.developer &&
                <div className={`${showControls} text-xs italic`}>Assignee: <strong>{props.ticket.assignee}</strong></div>
              }
            </div>
          }
        </div>
      )}
    </Draggable>
  );
}