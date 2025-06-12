import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TabSwitcher from "../components/TabSwitcher";

import AdminTableView from "../dashboards/AdminDashboard/AdminTableView";

const tabs = [
  { label: "Complaints", type: "complaint" },
  { label: "Machinery Defects", type: "machinery" },
  { label: "Qube Fulfillments", type: "qube" },
  { label: "Mo Khata Entries", type: "mokhata" },
];

const Admin = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="Admin" />
      <div className="flex flex-col flex-grow">
        <Navbar title="Admin Dashboard" />
        <div className="p-4">
          <TabSwitcher
            tabs={tabs.map((t) => t.label)}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <div className="mt-4">
            <AdminTableView dataType={tabs[activeIndex].type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
