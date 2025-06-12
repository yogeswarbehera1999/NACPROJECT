import React, { useEffect, useState } from "react";
import adminService from "../../services/adminService";
import StatusControl from "./StatusControl";
import StatusBadge from "../../components/StatusBadge";

const AdminTableView = ({ dataType }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    adminService
      .getAllData(dataType)
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, [dataType]);

  const handleStatusChange = (id, newStatus) => {
    adminService
      .updateStatus(dataType, id, newStatus)
      .then(() => {
        setData((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, status: newStatus } : item
          )
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">#</th>
            <th className="p-2">Submitted By</th>
            <th className="p-2">Details</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, idx) => (
            <tr key={entry._id} className="border-t">
              <td className="p-2">{idx + 1}</td>
              <td className="p-2">{entry.citizenUid || entry.supervisorUid}</td>
              <td className="p-2 text-sm max-w-xs break-words">
                {JSON.stringify(entry).slice(0, 100)}...
              </td>
              <td className="p-2">
                <StatusBadge status={entry.status} />
              </td>
              <td className="p-2">
                <StatusControl
                  current={entry.status}
                  onChange={(newStatus) =>
                    handleStatusChange(entry._id, newStatus)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTableView;
