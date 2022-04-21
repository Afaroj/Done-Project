const express = require("express");
const router = express.Router();
const auth = require("../Controller/authController");


//router.post("/login",auth.login);
router.post("/signup",auth.createUser);
//router.post("/getuser",auth.getUserById);

module.exports = router;