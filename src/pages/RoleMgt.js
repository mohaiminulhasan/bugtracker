import { useState, useEffect } from 'react';
import { Topbar } from "../components/TopbarDir/Topbar"

export const RoleMgt = () => {
  const [projectSlug, setProjectSlug] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const toggleAdmin = async e => {
    let username = e.target.value;

    const uri = `http://127.0.0.1:8000/toggle/${username}/to/${projectSlug}/as/admin/`;

    let h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Authorization', 'Token ' + localStorage.getItem('token'));

    let req = new Request(uri, {
      method: 'POST',
      headers: h,
      mode: 'cors'
    });

    const response = await fetch(req);
    const data = await response.json();

    let index = team.findIndex(x => x.username === username);
    let obj = team.find(x => x.username === username);

    let temp;
    if (data.response === 'OK') {
      obj.isAdmin = !obj.isAdmin;

      temp = [...team];
      temp[index] = obj;
    }

    setTeam(temp);
  }

  const selectStyle = 'border border-gray-500';

  return (
    <>
    <Topbar />

    <div className="px-4">
      <p className="font-bold text-gray-700 text-lg">Role Management</p>

      <div className="flex">
        <div className="flex-1">
          <p className="font-bold text-gray-700">Projects</p>
          <select className={selectStyle} name="projects" id="projects" size="5" style={{width: 200}}>
            {loading ? <option>...loading</option> : 
              data.map((item, index) => <option onClick={() => setProjectSlug(item.slug)} key={index} value={item.slug}>{item.title}</option>)
            }
          </select>
        </div>

        <div className="flex-1">
          {projectSlug ? <p className="font-bold text-gray-700">Users in this project</p> : <p>Please select a project</p>}

          { !teamLoading &&
            team.map((item, index) => {
              return <div key={index}>
                <label>
                  <input type='checkbox' name={item.username} value={item.username} checked={item.isAdmin} onChange={toggleAdmin} /> &nbsp;
                  {item.username}
                </label>
              </div>
            })
          }
        </div>
      </div>
    </div>
    </>
  );
}