import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/solid'

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
    <>
    <Dropdown icon={Icon} menubg='black' menufg='white' rounded='full' menuItems={menuItems} alignMenu='right' handleLogout={handleLogout}  />
    </>
  );
}

const Icon = () => {
  return (
    <UserIcon className="h-6 w-6 m-auto"/>
  );
}