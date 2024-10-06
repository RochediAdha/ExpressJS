const UserModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUsers();
    
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

const createNewUser = async(req, res) => {
    const {body} = req;
    //Validasi
    if (!body.name || !body.email || !body.address) {
        return res.status(400).json({
            message: 'Anda tidak mengisikan data yang benar',
            data: null
        });
    }
    
    try {
        await UserModel.createNewUser(body);
        res.status(201).json({
            message: 'Create new users success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UserModel.updateUser(body, id);
        res.status(201).json({
            message: 'Update user success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await UserModel.deleteUser(id);
        res.json({
            message: 'Delete user success'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}