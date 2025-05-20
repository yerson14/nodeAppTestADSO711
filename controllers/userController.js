const user_service = require('../services/userService')

const testUserAPI = (req, resp) => {
    console.log('TestUserAPI')
    resp.status(200).send({
        "status": "OK",
        "message": "API User state: available",
    })
}

const getAllUsers = async (req, resp) =>{
    const users = await user_service.getAllUsers()
    if (users) {
        resp.status(200).send({"statrus":"OK", "message": "Usuarios", "data":users})
    }else{
        resp.status(400).send({"statrus":"FAILED", "message": "Error al traer usuarios"})
    }
}
const getOneUser = async (req, resp) =>{
    const id = req.params.id
    const user = await user_service.getOneUser(id)
    if (user) {
        resp.status(200).send({"statrus":"OK", "message": "Usuario", "data":user})
    }else{
        resp.status(400).send({"statrus":"FAILED", "message": "Error al traer el usuario"})
    }
}
const saveUser = async (req, resp) =>{
    const {body} = req
    const savedUser = await user_service.saveUser(body.name,body.email,body.password)
    if (savedUser) {
        resp.status(200).send({status:"OK", "message": "Usuario", data:savedUser})
    }else{
        resp.status(400).send({status:"Failed", "message": "Usuario", data:savedUser})
    }
}
const updateUser = async (req, resp) =>{
    let id = req.params.id
    let {name,email,password} = req.body
    const updatedUser = await user_service.updateUser(id,name,email,password)
    if (updatedUser) {
        resp.status(200).send({status:"OK", "message": "Usuario actualizado con exito", data :updatedUser})
    }else{
        resp.status(400).send({status:"Failed", "message": "Actualizacion fallida", data :updatedUser})
    }
}

const deleteUser = async (req, resp) =>{
    let id = req.params.id
    const deletedUser = await user_service.deleteUser(id)
    if (deletedUser) {
        resp.status(200).send({status:"OK", "message": "Usuario eliminado con exito", data :deletedUser})
    }else{
        resp.status(400).send({status:"Failed", "message": "Eliminacion fallida", data :deletedUser})
    }
}

module.exports = {testUserAPI, getAllUsers, getOneUser, saveUser, updateUser, deleteUser} 