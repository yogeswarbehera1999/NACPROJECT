// src/services/supervisorService.js
import axios from "axios";
import { getCurrentUserToken } from "./authService";

const API_BASE = "/api/supervisor";

export const submitMachineryDefect = async (defectData) => {
  const token = await getCurrentUserToken();
  const res = await axios.post(`${API_BASE}/machinery-defect`, defectData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const fetchMachineryDefects = async () => {
  const token = await getCurrentUserToken();
  const res = await axios.get(`${API_BASE}/machinery-defects`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.defects;
};

// Add other supervisor APIs similarly
