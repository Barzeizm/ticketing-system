const express = require('express');
const router = express.Router();
const { RegisterUser } = require('../controller/UserController')
const { runValidation, validationRegister } = require('/index')

router.post('/api/register', validationRegister, runValidation, RegisterUser);

module.exports = router