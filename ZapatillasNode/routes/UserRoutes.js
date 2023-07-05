const express = require('express');
const router = express.Router();
const controller = require('../controllers/UserController');

router.post('/login',(req,res)=>{
    controller.finOne(req,res);
});

module.exports = router;