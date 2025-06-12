import axios from "axios";
import { auth } from "../firebase/firebase";

const getToken = async () => await auth.currentUser.getIdToken();

export const submitComplaint = async (data) => {
  const token = await getToken();
  return axios.post("/api/citizen/complaint", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getComplaints = async () => {
  const token = await getToken();
  return axios.get("/api/citizen/complaints", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getVehicleTrack = async () => {
  const token = await getToken();
  return axios.get("/api/citizen/track", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
