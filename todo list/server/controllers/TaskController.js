const TaskModel = require("../models/TaskModel")

// GET
module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find()
    res.status(201).send(tasks)

}

// POST
module.exports.saveTasks =  (req, res) => {
    const {task}=req.body

    TaskModel.create({task})
    .then((data) => {
        console.log("Saved Successfully !")
        res.status(201).json(TaskModel)
    })
    .catch ((err) => {
        res.status(400).send({error: err, msg: "Something went wrong"})
    })

}

// POST
// module.exports.saveTasks =  (req, res) => {
//     const {
//         task
//     }=req.body
    
//     try {
//         const saveTask = new TaskModel ({
//             task
//         }).save()
//         res.status(201).json(saveTask)
//     }
//     catch (err){
//         res.status(400).send("error: ", err)
//     }

// }

// PUT
module.exports.updateTasks =  (req, res) => {
    const {id} = req.params
    const {task}=req.body

    TaskModel.findByIdAndUpdate(id, {task})
    .then(() => {
        console.log("Updated Successfully")
    })
    .catch ((err) => {
        res.status(400).send({error: err, msg: "Something went wrong"})
    })
}

// DELETE
module.exports.deleteTasks =  (req, res) => {
    const {id} = req.params
    
    TaskModel.findByIdAndDelete(id)
    .then(() => {
        console.log("Deleted Successfully")
    })
    .catch ((err) => {
        res.status(400).send({error: err, msg: "Something went wrong"})
    })

}


