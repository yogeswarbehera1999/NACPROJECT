import React from "react";

const StatusControl = ({ current, onChange }) => {
  const options = ["pending", "in-progress", "resolved"];

  return (
    <select
      className="border rounded px-2 py-1"
      value={current}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default StatusControl;
