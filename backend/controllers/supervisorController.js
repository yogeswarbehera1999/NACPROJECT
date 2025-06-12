const MD = require('../models/MachineryDefect');
const QF = require('../models/QubeFulfillment');
const MK = require('../models/MoKhataEntry');

exports.addMachinery = async (req, res) => {
  const doc = await MD.create({ supervisorUid:req.user.uid, ...req.body });
  res.status(201).json({ defect: doc });
};
exports.getMachinery = async (req, res) => {
  const list = await MD.find({ supervisorUid:req.params.uid });
  res.json({ defects:list });
};

exports.addQube = async (req, res) => {
  const doc = await QF.create({ supervisorUid:req.user.uid, ...req.body });
  res.status(201).json({ qube: doc });
};
exports.getQube = async (req, res) => {
  const list = await QF.find({ supervisorUid:req.params.uid });
  res.json({ qubes:list });
};

exports.addMoKhata = async (req, res) => {
  const doc = await MK.create({ supervisorUid:req.user.uid, ...req.body });
  res.status(201).json({ entry: doc });
};
exports.getMoKhata = async (req, res) => {
  const list = await MK.find({ supervisorUid:req.params.uid });
  res.json({ entries:list });
};
exports.getVehicleData = async (req, res) => {
  // dummy response for now — implement real logic later
  res.json({ message: "Vehicle data will be shown here." });
};
