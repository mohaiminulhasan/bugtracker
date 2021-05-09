import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Comments = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    async function fetchData() {
      const uri = 'http://127.0.0.1:8000/tickets/' + id + '/comments';

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
  }, [id]);

  return (
    <div className="w-1/2 shadow-lg">
      <div className="border border-gray-500 rounded-t p-2">
        <h3 className="font-bold text-gray-700 text-lg">Comments</h3>
        {
          loading ? null :
          data.map((item, index) => (
            <div className="border border-gray-500 p-2 rounded-lg mb-2" key={index}>
              <span className="font-bold mr-1">{item.author}</span>
              <span className="text-gray-500">{item.body}</span>
              <div className="flex justify-end">
                <Link to='/' className="mr-2 text-indigo-500">Edit</Link>
                <Link to='/' className="text-red-500">Delete</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}