const express = require('express');

const UserController = require('../controller/users.js')

const router = express.Router();

router.get('/', (req, res) => UserController.getAllUsers);

router.post('/', (req, res) =>UserController.createNewUsers);

module.exports = router;