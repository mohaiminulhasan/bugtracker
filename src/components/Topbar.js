import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

export const Topbar = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = e => {
    e.preventDefault();

    authContext.logout();
  }

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/usermgt">User Management</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/rolemgt">Role Management</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/myprojects">My Projects</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/logout" onClick={handleLogout}>Logout</Link>
    </nav>
  );
}