import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

import { Dropdown } from '../Dropdown';

export const ProfileMenu = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const handleLogout = e => {
    e.preventDefault();

    authContext.logout();
    history.push('/');
  }
  
  const menuItems = [
    [
      {
        'title': 'Settings',
        'onClick': null
      }
    ], 
    [
      {
        'title': 'Logout',
        'onClick': handleLogout
      }
    ], 
  ];

  return (
    <>
    <Dropdown icon={Icon} menubg='black' menufg='white' rounded='full' menuItems={menuItems} alignMenu='right' handleLogout={handleLogout}  />
    </>
  );
}

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );
}