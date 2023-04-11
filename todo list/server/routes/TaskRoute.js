const express = require("express")
const router = express.Router()
const { getTasks, saveTasks, deleteTasks, updateTasks } = require("../controllers/TaskController")



router.get("/get", getTasks)
router.post("/save", saveTasks)
router.delete("/delete/:id", deleteTasks)
router.put("/update/:id", updateTasks)



module.exports = router