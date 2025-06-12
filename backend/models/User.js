const m = require('mongoose');
const s = new m.Schema({
  uid: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  role: { type: String, enum: ['Citizen','Supervisor','Admin'], required: true },
}, { timestamps: true });
module.exports = m.model('User', s);
