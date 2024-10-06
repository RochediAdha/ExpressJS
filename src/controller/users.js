const UserModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const data = await UserModel.getAllUsers();
    
        res.json({
            message : 'Get all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        })
    }
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Create new users success',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const {id} = req.params;
    console.log('id:', id);
    res.json({
        message: 'Update user success',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    res.json({
        message: 'Delete user success',
        data: {
            id: id
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}