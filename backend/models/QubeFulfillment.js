const m = require('mongoose');
const s = new m.Schema({
  supervisorUid: { type:String, required:true },
  qubeId: String,
  quantityFulfilled: Number,
  remarks: String,
  status: { type:String, enum:['Pending','In Progress','Completed','Rejected'], default:'Pending' }
}, { timestamps: true });
module.exports = m.model('QubeFulfillment', s);
