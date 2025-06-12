const U = require('../models/User');
exports.sync = async (req, res) => {
  const { uid, email } = req.body;
  if (!uid||!email) return res.status(400).json({ message:'uid,email required' });
  let u = await U.findOne({ uid });
  if (!u) u = await U.create({ uid, email, role: 'Citizen' });
  res.json({ user: u });
};
