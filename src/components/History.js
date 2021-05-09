import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const History = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    async function fetchData() {
      const uri = 'http://127.0.0.1:8000/tickets/' + id + '/history';

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
        <h3 className="font-bold text-gray-700 text-lg">History</h3>

        <div className="flex flex-col">
          <div className="flex justify-around p-2 border-b border-gray-500">
            <div className="font-medium text-xs uppercase tracking-wider flex-1">Field</div>
            <div className="font-medium text-xs uppercase tracking-wider flex-1">Old Value</div>
            <div className="font-medium text-xs uppercase tracking-wider flex-1">New Value</div>
            <div className="font-medium text-xs uppercase tracking-wider flex-1">Date & Time</div>
          </div>
         {
          loading ? null :
          data.map((item, index) => (
            <div className="flex justify-around p-2 even:bg-indigo-200" key={index}>
              <div className="font-medium text-xs tracking-wider flex-1">{item.field}</div>
              <div className="font-medium text-xs tracking-wider flex-1">{item.old_value}</div>
              <div className="font-medium text-xs tracking-wider flex-1">{item.new_value}</div>
              <div className="font-medium text-xs tracking-wider flex-1">{item.created}</div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}