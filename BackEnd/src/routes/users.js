const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();


//Crear user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error}))
});

//Listar todos
router.get("/users", (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))
});

//Obtener un usuario
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))
});

//Actualizar un usuario
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { nombresyapellidos,rol,usuario,contraseña,documento,age,HepatitisB,Pentavalente,BCG,Rotavirus,Polio,Neumococo,Influenzaestacional,SRP,Varicela,HepatitisA,FiebreAmarilla,email } = req.body;

    userSchema
    .updateOne({_id: id}, {$set: {nombresyapellidos, rol,usuario,contraseña,documento,age,HepatitisB,Pentavalente,BCG,Rotavirus,Polio,Neumococo,Influenzaestacional,SRP,Varicela,HepatitisA,FiebreAmarilla,email}})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))
});


//Obtener un usuario por usuario 
router.get("/user/:usuario", (req, res) => {
    const {usuario} = req.params;
    userSchema
    .find({ usuario : usuario})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))
});
//Eliminar un usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error})) 
});
module.exports = router;

