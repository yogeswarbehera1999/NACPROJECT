// Placeholder: you can plug in GPS logic later
exports.getLatest = (req,res)=>{
  res.json({ lat: 0, lng: 0, timestamp: Date.now() });
};
