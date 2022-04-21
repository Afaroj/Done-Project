const express = require('express');
const authRouter = require("../Router/authRouter");
const router = express.Router();

router.use("/auth",authRouter);
//router.use("/signUp",authRouter);


module.exports = router;



