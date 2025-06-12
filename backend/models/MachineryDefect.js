const m = require('mongoose');
const s = new m.Schema({
  supervisorUid: {type:String,required:true},
  machineId: String,
  defectDescription: String,
  photoUrl: String,
  status: {type:String,enum:['Pending','In Progress','Resolved','Rejected'], default:'Pending'}
}, { timestamps: true });
module.exports = m.model('MachineryDefect', s);
