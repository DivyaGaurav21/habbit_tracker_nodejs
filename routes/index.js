const express = require('express');

const router = express.Router();

// check whether router is loaded  or not
console.log('router is loaded');
//controller for routing
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', require('./users'));

// router.get('/', )


module.exports = router;