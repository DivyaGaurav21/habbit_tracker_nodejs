const express = require('express');
// const passport = require('passport');

const router = express.Router();

// imprting user_controller module 
const userController = require('../controllers/users_controller')

router.get('/sign-up', userController.signUp);





module.exports = router;