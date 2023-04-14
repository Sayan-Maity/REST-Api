const UserModel = require("../models/UserModel")

module.exports.getUser = async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(201).send(users)
    }
    catch (err) {
        console.log("Couldn't get the users !")
        res.status(400).send("Error: ", err)
    }
}

module.exports.getUserById = async (req, res) => {
    const {id} = req.params
    try {
        const users = await UserModel.findById(id)
        // const users = await UserModel.findById(req.params.id)
        res.status(201).send(users)
    }
    catch (err) {
        res.status(400).send("Error: ", err)
    }
}

module.exports.postUser = async (req, res) => {
    const {
        id,
        name,
        age,
        username,
    } = req.body 

    try {
        const addUser = await UserModel({
            id,
            name,
            age,
            username,
        }).save()

        res.status(201).send(addUser)
    }
    catch (err) {
        res.status(400).send("Error: ", err)
    }
}








