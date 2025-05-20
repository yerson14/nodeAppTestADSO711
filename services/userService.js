const db = require('../models')

const getAllUsers = async () =>{
    try {
        const allUsers = await db.User.findAll()
        return allUsers;
        
    } catch (error) {
        throw new Error(`Error al traer los usuarios ${error.message}`)
    }
} 
const getOneUser = async (id) =>{
    try {
        const user = await db.User.findByPk(id)
        return user
    } catch (error) {
              throw new Error(`Error al traer al susuario ${error.message}`);      
    }
}
const saveUser = async (name, email, password) =>{
    try {
        let newUser = await db.User.create({
            name, 
            email, 
            password
        })
        return newUser
    } catch (error) {
        return error.message || `Error al crear el usuario`;      
    }
}

const updateUser = async (id, name, email, password) => {
    try {
        let updatedUser = await db.User.update({
            name, 
            email, 
            password
        }, {
            where: {
                id,
            }
        });
        return updatedUser;
    } catch (error) {
        return error.message || `Error al actualizar el usuario`;      
    }
}

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.User.destroy({
            where: {
                id,
            }
        });
        return deletedUser;
    } catch (error) {
        return error.message || `Error al eliminar el usuario`;      
    }
}
module.exports = {getAllUsers, getOneUser, saveUser, updateUser,deleteUser}