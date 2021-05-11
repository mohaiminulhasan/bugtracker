import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

import { Dropdown } from '../Dropdown';

export const ProjectMenu = () => {
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
        'title': 'Edit project details',
      }
    ], 
    [
      {
        'title': 'Delete project',
        'textfg': 'red-500'
      }
    ], 
  ];

  return (
    <>
    <Dropdown icon={Icon} menubg='white' menufg='gray-500' rounded='lg' hover='hover:bg-gray-300' menuItems={menuItems} alignMenu='left' handleLogout={handleLogout}  />
    </>
  );
}

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}