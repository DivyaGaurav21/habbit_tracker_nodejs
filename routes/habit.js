const express = require('express');
const passport = require('passport');
const habitController = require('../controllers/habbit_controller')

const router = express.Router();



router.post('/create', passport.checkAuthentication, habitController.createHabit);

module.exports = router;