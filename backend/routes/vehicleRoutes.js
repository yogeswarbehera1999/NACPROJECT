const r=require('express').Router();
const vc=require('../controllers/vehicleController');
const auth=require('../middleware/firebaseAuth');
r.get('/latest', auth, vc.getLatest);
module.exports=r;
