const m = require('mongoose');
const s = new m.Schema({
  supervisorUid: { type:String, required:true },
  entryDate: Date,
  description: String,
  amount: Number,
  status: { type:String, enum:['Pending','In Progress','Completed','Rejected'], default:'Pending' }
}, { timestamps: true });
module.exports = m.model('MoKhataEntry', s);
