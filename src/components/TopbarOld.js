import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

export const Topbar = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = e => {
    e.preventDefault();

    authContext.logout();
  }

  const linkStyle = 'text-indigo-500 hover:underline font-bold';
  const linkAltStyle = 'text-red-500 hover:underline font-bold';
  const activeStyle = { color: 'black' }

  return (
    <nav className="flex justify-around border border-gray-500 m-4 p-2 rounded">
      <NavLink className={linkStyle} activeStyle={activeStyle} to="/myprojects">My Projects</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink className={linkStyle} activeStyle={activeStyle} to="/usermgt">User Management</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink className={linkStyle} activeStyle={activeStyle} to="/rolemgt">Role Management</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink className={linkAltStyle} to="/logout" onClick={handleLogout}>Logout</NavLink>
    </nav>
  );
}