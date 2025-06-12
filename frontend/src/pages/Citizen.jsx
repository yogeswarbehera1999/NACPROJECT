import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import StatusBadge from "../components/StatusBadge";

export default function Citizen() {
  const [tab, setTab] = useState("complaint");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const [trackingData, setTrackingData] = useState([]);

  useEffect(() => {
    if (tab === "complaints") {
      fetchComplaints();
    } else if (tab === "track") {
      fetchTracking();
    }
  }, [tab]);

  const fetchComplaints = async () => {
    const token = await getToken();
    const res = await axios.get("/api/citizen/complaints", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setComplaints(res.data.complaints);
  };

  const fetchTracking = async () => {
    const token = await getToken();
    const res = await axios.get("/api/citizen/track", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTrackingData(res.data.tracking);
  };

  const getToken = async () => {
    const { auth } = await import("../firebase/firebase");
    return await auth.currentUser.getIdToken();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("photo", photo);
    await axios.post("/api/citizen/complaint", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Complaint submitted.");
    setDescription("");
    setPhoto(null);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        active={tab}
        onSelect={setTab}
        items={[
          { key: "complaint", label: "Submit Complaint" },
          { key: "complaints", label: "View Complaints" },
          { key: "track", label: "Track Vehicle" },
        ]}
      />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          {tab === "complaint" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description..."
                className="w-full p-2 border rounded"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          )}

          {tab === "complaints" && (
            <div>
              <h2 className="text-xl mb-4">Your Complaints</h2>
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-200">
                    <th>Description</th>
                    <th>Status</th>
                    <th>Photo</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((c) => (
                    <tr key={c._id}>
                      <td className="border px-2 py-1">{c.description}</td>
                      <td className="border px-2 py-1">
                        <StatusBadge status={c.status} />
                      </td>
                      <td className="border px-2 py-1">
                        {c.photo && (
                          <img src={c.photo} alt="Complaint" className="w-16 h-16 object-cover" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === "track" && (
            <div>
              <h2 className="text-xl mb-4">Vehicle Tracking</h2>
              <ul className="space-y-2">
                {trackingData.map((v) => (
                  <li key={v._id} className="border p-2 rounded">
                    <strong>{v.vehicleId}</strong>: {v.status} at {v.location}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
