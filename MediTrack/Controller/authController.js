const sql = require("../Model/database")
const userModel = require("../Model/usermodel");
const express = require('express')
const router = require("../Router/authRouter");
const bcrypt = require("bcrypt");



exports.createUser = async (req,res) => {
    if(!req.body) {
        res.status(400).send({
            status : "failed",
            message : "Content cannot be empty",
        });
    }else console.log("Valid request");

    //checking fields
    if(req.body.emailAddress == null ||
        req.body.firstName == null ||
        req.body.phoneNumber == null ||
        req.body.password == null 
        ){
            res.status(400).send({
                status: "Failed",
                message: "Mandatory fields missing",
            });
            return;
        }

        encryptedPassword =  await bcrypt.hash(req.body.password, 10);
        console.log("Encrypted password -->",encryptedPassword);
        let newUser = {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            emailAddress: req.body.emailAddress,
            phoneNumber: req.body.phoneNumber,
            UserPassword: encryptedPassword,

        };
        console.log("calling database");
        let resultsReturned;
        try{
            console.log("New user object -->",newUser);
            resultsReturned = await userModel.createUser(newUser);
        }catch (err) {
            console.log("Error while calling database",err)
            res.status(500).send({
                status : "Failed",
                mrssage: "Some error occured",
            });
        }
        if(resultsReturned && resultsReturned.affectedRows > 0) {
            console.log("User created Successfully");
            res.status(200).send({
                status: "Success",
                message: "User Registered Successfully",
                userId : resultsReturned.insertId,
            });
        }
        else {
            console.log("User coud not be created" );
            res.status(500).send({
                status: "Failed",
                message: resultsReturned,

            });
        }


};




/*router.post('/signup', (req,res) => {
bcrypt.hash(req.body.password, )
})

exports.login = async (req, res) => {
console.log("Login Function");
console.log("User ID = ",req.body.userName)

res.send("User ID for Login = ",req.body.userName);
var test = sql.query("Select * from UserInformation");
console.log(test)
}

exports.signUp = async (req, res) => {
    let newAcc = 
    console.log("Sign up function");
    console.log("First Name = ",req.body.firstName)
    res.send("User Name = ",req.body.userName)
    console.log("Last Name = ",req.body.lastName)
    res.send("Last Name = ",req.body.lastName)

}

exports.getUserById = async (req,res) =>{
    console.log(req.body)
    console.log("Inside function get user by id");
   console.log("User Id for user to found = ", req.body.userId);
let user = await userModel.getUserInfo(req.body.userId);
console.log("User Information", user);
if(user){
    res.status(200).json({data : user})
} 
}*/