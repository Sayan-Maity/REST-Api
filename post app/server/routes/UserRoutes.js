const express = require("express")
const router = express.Router()
const {getUser, getUserById, postUser} = require("../controllers/UserController")

router.get("/getUsers", getUser)
router.get("/getUsers/:id", getUserById)
router.post("/postUsers", postUser)

module.exports = router