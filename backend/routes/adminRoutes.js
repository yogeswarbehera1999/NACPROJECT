const r=require('express').Router();
const ac=require('../controllers/adminController');
const auth=require('../middleware/firebaseAuth');
r.get('/all', auth, ac.getAll);
r.patch('/complaint/:id', auth, ac.updateComplaint);
r.patch('/machinery/:id', auth, ac.updateMachinery);
r.patch('/qube/:id', auth, ac.updateQube);
r.patch('/mokhata/:id', auth, ac.updateMoKhata);
module.exports=r;
