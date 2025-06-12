import React, { useEffect, useState } from "react";
import { getSupervisorData } from "../../services/supervisorService";

const SupervisorTables = () => {
  const [data, setData] = useState({
    machineryDefects: [],
    qubeFulfillments: [],
    moKhataEntries: [],
  });

  useEffect(() => {
    (async () => {
      const fetched = await getSupervisorData();
      setData(fetched);
    })();
  }, []);

  return (
    <div className="p-4 space-y-6">
      <section>
        <h2 className="text-xl font-semibold">Machinery Defects</h2>
        <ul>{data.machineryDefects.map((item, i) => (
          <li key={i} className="border-b p-2">{item.issue} - {item.machineId}</li>
        ))}</ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Qube Fulfillment</h2>
        <ul>{data.qubeFulfillments.map((item, i) => (
          <li key={i} className="border-b p-2">{item.location} - {item.quantity}</li>
        ))}</ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Mo Khata Entries</h2>
        <ul>{data.moKhataEntries.map((item, i) => (
          <li key={i} className="border-b p-2">{item.entryId} - {item.date}</li>
        ))}</ul>
      </section>
    </div>
  );
};

export default SupervisorTables;
