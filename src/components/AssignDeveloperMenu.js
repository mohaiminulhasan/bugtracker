import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AssignDeveloperDropdown } from './AssignDeveloperDropdown';

export const AssignDeveloperMenu = (props) => {
  const appContext = useContext(AppContext);

  const handleAssignDeveloper = (id) => {
    if (id === undefined) {
      id = null;
    }
    async function patchData() {
      const uri = `${appContext.apiUrl}/tickets/${props.ticket_id}/update/`;

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'PATCH',
        headers: h,
        mode: 'cors',
        body: JSON.stringify({
          developer: id // change to selected user ID
        })
      });

      await fetch(req);
    }

    patchData();
  }

  // const menuItems = [
  //   [
  //     {
  //       'id': 1,
  //       'username': 'michel',
  //       'onClick': handleAssignDeveloper
  //     },
  //     {
  //       'id': 2,
  //       'username': 'zarif',
  //       'onClick': handleAssignDeveloper
  //     }
  //   ]
  // ];

  return (
      <AssignDeveloperDropdown handleAssignDeveloper={handleAssignDeveloper} icon={Icon} menubg='white' menufg='gray-400' menuItems={props.users} alignMenu='left' showControls={props.showControls} />
  );
}

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}