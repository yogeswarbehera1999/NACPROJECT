const r=require('express').Router();
const c=require('../controllers/authController');
r.post('/sync', c.sync);
module.exports = r;
