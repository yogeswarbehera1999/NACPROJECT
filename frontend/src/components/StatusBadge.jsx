export default function StatusBadge({ status }) {
  const colors = {
    Pending: "bg-yellow-300",
    "In Progress": "bg-blue-300",
    Resolved: "bg-green-300",
    Rejected: "bg-red-300",
    Completed: "bg-green-300",
  };
  return (
    <span className={`px-2 py-1 rounded ${colors[status] || "bg-gray-200"}`}>
      {status}
    </span>
  );
}

// import React from "react";

// const statusColors = {
//   pending: "bg-yellow-300 text-yellow-800",
//   "in-progress": "bg-blue-300 text-blue-800",
//   resolved: "bg-green-300 text-green-800",
// };

// const StatusBadge = ({ status }) => {
//   const style = statusColors[status] || "bg-gray-300 text-gray-800";

//   return (
//     <span className={`px-2 py-1 rounded text-sm font-medium ${style}`}>
//       {status?.toUpperCase()}
//     </span>
//   );
// };

// export default StatusBadge;

