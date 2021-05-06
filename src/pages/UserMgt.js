import { useEffect, useState } from 'react';

import { Topbar } from '../components';

export const UserMgt = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const [projectSlug, setProjectSlug] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState(null);
  const [usersLoading, setUsersLoading] = useState(true);

  const [team, setTeam] = useState(null);
  const [teamLoading, setTeamLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const uri = 'http://127.0.0.1:8000/owned/projects/';

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'GET',
        headers: h,
        mode: 'cors'
      });

      const response = await fetch(req);
      const data = await response.json();
      
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const uri = `http://127.0.0.1:8000/users/${projectSlug}/`;

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'GET',
        headers: h,
        mode: 'cors'
      });

      const response = await fetch(req);
      const data = await response.json();
      
      setUsers(data);
      setUsersLoading(false);
    }

    projectSlug && fetchData();
  }, [projectSlug]);

  useEffect(() => {
    async function fetchData() {
      const uri = `http://127.0.0.1:8000/teamusers/${projectSlug}/`;

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'GET',
        headers: h,
        mode: 'cors'
      });

      const response = await fetch(req);
      const data = await response.json();

      setTeam(data);
      setTeamLoading(false);
    }

    projectSlug && fetchData();
  }, [projectSlug]);

  const onChange = e => {
    setSelectedUser(e.target.value);
  }

  const addToTeam = async () => {
    if (!selectedUser) {
      return
    }

    const uri = `http://127.0.0.1:8000/add/${selectedUser}/to/team/${projectSlug}/`;

    let h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Authorization', 'Token ' + localStorage.getItem('token'));

    let req = new Request(uri, {
      method: 'PUT',
      headers: h,
      mode: 'cors'
    });

    const response = await fetch(req);
    const data = await response.json();

    if (data.response === 'OK') {
      setTeam([...team, { 'id': data.id , 'username': selectedUser }])
      setUsers(users.filter(x => x.id !== data.id))
    }

    setSelectedUser(null);
  }

  const removeFromTeam = async () => {
    if (!selectedUser) {
      return
    }

    const uri = `http://127.0.0.1:8000/remove/${selectedUser}/from/team/${projectSlug}/`;

    let h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Authorization', 'Token ' + localStorage.getItem('token'));

    let req = new Request(uri, {
      method: 'PUT',
      headers: h,
      mode: 'cors'
    });

    const response = await fetch(req);
    const data = await response.json();

    if (data.response === 'OK') {
      setUsers([...users, { 'id': data.id , 'username': selectedUser }])
      setTeam(team.filter(x => x.id !== data.id))
    }

    setSelectedUser(null);
  }

  const btnStyle = 'border border-gray-500 px-4 rounded font-bold shadow-md m-1';
  const selectStyle = 'border border-gray-500';

  return (
    <>
    <Topbar />

    <div className="px-4">
      <p className="font-bold text-gray-700 text-lg">User Management</p>

      <div className="flex content-between">
        <div className="flex-initial">
          <p className="font-bold text-gray-700">Projects</p>
          <select className={selectStyle} name="projects" id="projects" size="5" style={{width: 200}}>
            {loading ? <option>...loading</option> : 
              data.map((item, index) => <option onClick={() => setProjectSlug(item.slug)} key={index} value={item.slug}>{item.title}</option>)
            }
          </select>
        </div>

        {/* users available */}
        <div className="flex flex-1 justify-center ml-2 px-2">
          <div className="flex-initial">
            <p className="font-bold text-gray-700">Users Available</p>
            <select className={selectStyle} onClick={onChange} name="users" id="users" size="5" style={{width: 200}}>
              {usersLoading ? <option>Please select a project</option> : 
                users.map((item, index) => <option key={index} value={item.username}>{item.username}</option>)
              }
            </select>
          </div>

          {/* buttons */}
          <div className="flex flex-col flex-none justify-center">
            <button className={btnStyle} onClick={addToTeam}>&gt;</button>
            <button className={btnStyle} onClick={removeFromTeam}>&lt;</button>
          </div>

          {/* users in project */}
          <div className="flex-initial">
            <p className="font-bold text-gray-700">Users in Project</p>
            <select className={selectStyle} onClick={onChange} name="team" id="team" size="5" style={{width: 200}}>
              {teamLoading ? <option>Please select a project</option> : 
                team.map((item, index) => <option key={index} value={item.username}>{item.username}</option>)
              }
            </select>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}