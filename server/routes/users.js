const express = require('express');
const { checkUserController } = require('../controllers/userController');
const { User } = require('../database/schemas');

const router   = express.Router();

module.exports = router;

router.post('/checkusername', checkUserController);
