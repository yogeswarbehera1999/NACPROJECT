const C = require('../models/Complaint');
exports.addComplaint = async (req, res) => {
  const c = await C.create({ citizenUid:req.user.uid, ...req.body });
  res.status(201).json({ complaint: c });
};
exports.getComplaints = async (req, res) => {
  const cs = await C.find({ citizenUid:req.params.uid });
  res.json({ complaints: cs });
};
exports.trackVehicle = async (req, res) => {
  res.json({ message: "Vehicle tracking coming soon!" });
};
