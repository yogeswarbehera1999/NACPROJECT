// src/services/adminService.js
import axios from "axios";
import { getCurrentUserToken } from "./authService";

const API_BASE = "/api/admin";

export const fetchAllComplaints = async () => {
  const token = await getCurrentUserToken();
  const res = await axios.get(`${API_BASE}/complaints`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.complaints;
};

export const updateComplaintStatus = async (complaintId, status) => {
  const token = await getCurrentUserToken();
  const res = await axios.put(
    `${API_BASE}/complaint/${complaintId}/status`,
    { status },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

// Add other admin APIs similarly
