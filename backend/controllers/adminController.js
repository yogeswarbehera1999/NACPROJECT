const C = require('../models/Complaint');
const MD = require('../models/MachineryDefect');
const QF = require('../models/QubeFulfillment');
const MK = require('../models/MoKhataEntry');

exports.getAll = async (req,res)=>{
  res.json({
    complaints: await C.find(),
    machinery: await MD.find(),
    qubes: await QF.find(),
    moKhata: await MK.find()
  });
};

const updateStatus = (Model) => async (req,res)=>{
  const { id } = req.params;
  const { status } = req.body;
  const doc = await Model.findByIdAndUpdate(id, { status }, { new:true });
  if (!doc) return res.status(404).json({ message:'Not found' });
  res.json({ doc });
};

exports.updateComplaint = updateStatus(C);
exports.updateMachinery = updateStatus(MD);
exports.updateQube = updateStatus(QF);
exports.updateMoKhata = updateStatus(MK);
