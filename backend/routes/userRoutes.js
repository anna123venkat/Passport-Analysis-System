
const express = require('express');
const router = express.Router();
const { registerController } = require('../controllers/userCtrl');
const { loginController } = require('../controllers/loginCtrl');
const { query1Controller } = require('../controllers/query1Ctrl');
const { query2Controller } = require('../controllers/query2Ctrl');
const { query3Controller } = require('../controllers/query3Ctrl');
const { query4Controller } = require('../controllers/query4Ctrl');

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/query1', query1Controller);
router.get('/query2', query2Controller);
router.get('/query3', query3Controller);
router.get('/query4', query4Controller);


module.exports = router;
