const m = require('mongoose');
const s = new m.Schema({
  citizenUid: { type: String, required: true },
  title: String, description: String, photoUrl: String,
  status: { type: String, enum:['Pending','In Progress','Resolved','Rejected'], default:'Pending' }
}, { timestamps: true });
module.exports = m.model('Complaint', s);
