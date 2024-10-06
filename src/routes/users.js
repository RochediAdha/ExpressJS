const express = require('express');

const UserController = require('../controller/users.js')

const router = express.Router();

//Create - POST
router.post('/', UserController.createNewUser);

//Read - Get
router.get('/', UserController.getAllUsers);

//Update - PATCH
router.patch('/:id', UserController.updateUser);

//Delete - DELETE
router.delete('/:id', UserController.deleteUser);

module.exports = router;