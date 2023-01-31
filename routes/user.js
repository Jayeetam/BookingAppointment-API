var express = require('express');
const connection = require('../connection');
const router = express.Router();
const usercontroller = require('../controllers/user');

router.post('/create', usercontroller.adduser);

router.get('/read', usercontroller.getuser);

router.delete('/delete/:id',usercontroller.deleteuser);

module.exports = router;