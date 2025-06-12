import React, { useEffect, useState } from 'react';
import citizenService from '../../services/citizenService';

const ComplaintTable = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await citizenService.fetchComplaints();
      setComplaints(data.complaints);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4">My Complaints</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            <th className="p-2">Image</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c._id} className="border-t">
              <td className="p-2">{c.title}</td>
              <td className="p-2">{c.description}</td>
              <td className="p-2">
                {c.photo && (
                  <img src={`http://localhost:5000/${c.photo}`} alt="complaint" className="h-12" />
                )}
              </td>
              <td className="p-2">{c.status || 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintTable;
