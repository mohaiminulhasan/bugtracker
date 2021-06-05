import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/solid'

import { Dropdown } from '../Dropdown';

export const ProfileMenu = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const username = JSON.parse(localStorage.getItem('userInfo')).username;

  const handleLogout = e => {
    e.preventDefault();

    authContext.logout();
    history.push('/');
  }
  
  const menuItems = [
    // [
    //   {
    //     'title': 'Settings',
    //     'onClick': null
    //   }
    // ], 
    [
      {
        'title': 'Logout',
        'onClick': handleLogout
      }
    ], 
  ];

  return (
    <div className='flex'>
      <div className='mr-2 text-gray-500'>{ username }</div>
      <Dropdown icon={Icon} menubg='black' menufg='white' rounded='full' menuItems={menuItems} alignMenu='right' handleLogout={handleLogout}  />
    </div>
  );
}

const Icon = () => {
  return (
    <UserIcon className="h-6 w-6 m-auto"/>
  );
}