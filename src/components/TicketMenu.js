import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TicketDropdown } from './TicketDropdown';
import { useHistory } from 'react-router-dom';

export const TicketMenu = (props) => {
  const history = useHistory();
  const appContext = useContext(AppContext);
  const handleDelete = () => {
    console.log(props.ticket_id);
    async function postData() {
      const uri = `${appContext.apiUrl}/tickets/${props.ticket_id}/delete/`;

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'DELETE',
        headers: h,
        mode: 'cors'
      });

      await fetch(req);

      const copyOfData = {...props.data};
      delete copyOfData[props.ticket_id.toString()];
      props.setData(copyOfData);

      const copyOfOrder = props.columns[props.status]['ticketIds'];
      copyOfOrder.splice(props.index, 1);
      props.setColumns({...props.columns, [props.status]: {...props.columns[props.status], 'ticketIds': copyOfOrder }})
    }

    postData();
  }

  const handleEdit = () => {
    props.setEditable(true);
  }

  const menuItems = [
    [
      {
        'title': 'Edit',
        'onClick': handleEdit
      },
      // {
      //   'title': 'View',
      //   'onClick': null
      // }
    ], 
    [
      {
        'title': 'Delete',
        'textfg': 'red-500',
        'onClick': handleDelete
      }
    ], 
  ];

  return (
      <TicketDropdown icon={Icon} menubg='white' menufg='gray-400' menuItems={menuItems} alignMenu='left' showControls={props.showControls} />
  );
}

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}