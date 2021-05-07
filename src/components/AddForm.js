import { useEffect, useState } from 'react';

export const AddForm = (props) => {
  const [title, setTitle] = useState('');

  const keyDown = e => {
    if (e.keyCode === 27) {
      props.setShowAdd(true);
      props.setShowForm(false);
    }
  }

  const handleChange = e => {
    setTitle(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    async function postData() {
      const uri = 'http://127.0.0.1:8000/tickets/create/';

      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Token ' + localStorage.getItem('token'));

      let req = new Request(uri, {
        method: 'POST',
        headers: h,
        body: JSON.stringify({
          title: title,
          project: props.project,
          status: props.status,
          username: JSON.parse(localStorage.getItem('userInfo')).username
        }),
        mode: 'cors'
      });

      const response = await fetch(req);
      const data = await response.json();

      props.addTicket(data);
    }

    postData();
    console.log(title);
    console.log(props.project);
    console.log(props.status);
    console.log(JSON.parse(localStorage.getItem('userInfo')).username);

    props.setShowAdd(true);
    props.setShowForm(false);
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDown, false);

    return () => {
      document.removeEventListener('keydown', keyDown, false);
    }
  });
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input className="border-2 border-gray-500 border-t-0" type='text' name='title' value={title} onChange={handleChange} placeholder='Type ticket title...' autoFocus required />
      <button className="border-2 border-gray-500 border-t-0 bg-gray-300 disabled:opacity-50" type='submit' disabled={title === ''}>Submit</button>
    </form>
  );
}