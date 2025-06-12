import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TabSwitcher from "../components/TabSwitcher";

import MachineryDefectForm from "../dashboards/SupervisorDashboard/MachineryDefectForm";
import QubeFulfillmentForm from "../dashboards/SupervisorDashboard/QubeFulfillmentForm";
import MoKhataEntryForm from "../dashboards/SupervisorDashboard/MoKhataEntryForm";
import TrackVehicle from "../dashboards/CitizenDashboard/TrackVehicle";
import SupervisorTables from "../dashboards/SupervisorDashboard/SupervisorTables";

const tabs = [
  { label: "Machinery Defect", component: <MachineryDefectForm /> },
  { label: "Qube Fulfillment", component: <QubeFulfillmentForm /> },
  { label: "Mo Khata Entry", component: <MoKhataEntryForm /> },
  { label: "Vehicle Tracking", component: <TrackVehicle /> },
  { label: "Submitted Data", component: <SupervisorTables /> },
];

const Supervisor = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="Supervisor" />
      <div className="flex flex-col flex-grow">
        <Navbar title="Supervisor Dashboard" />
        <div className="p-4">
          <TabSwitcher
            tabs={tabs.map((t) => t.label)}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <div className="mt-4">{tabs[activeIndex].component}</div>
        </div>
      </div>
    </div>
  );
};

export default Supervisor;
