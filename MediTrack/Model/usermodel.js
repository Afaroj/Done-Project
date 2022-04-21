const sql = require("./database.js");

exports.createUser = async (newUser) =>{
    console.log("Inside user model");
    let checkUser;
    try {
        checkUser = await checkExistingUser(newUser);
        console.log("check existing user",checkUser)

    }catch (error){
        console.log("Error while checking existing user");
        return null;
    }
    if(checkUser == null){
        console.log("Existing user not found in databas,creating new user",newUser);

    
    let createdUser;
    try{
        console.log("New User",newUser);
        createdUser = await sql.query("INSERT into userInformation SET ?",newUser);
    }catch (err){
        console.log("error",err);
        return null;
    }
    if(createdUser){
        console.log("User created",createdUser);
        return createdUser;
    }else return null;
  }else if (checkUser == 1){
      return "User with Email id already exists"
  }else if (checkUser == 2){
      return "Mobile number already exists"
  }

};

exports.findbyId = async (userid) => {
    let userFound
    try{
        userFound = await sql.query("SELECT* from userInformation SET? WHERE userid=?",[userid]);
        console.log("User found -->",userFound);
    }catch(err) {
        console.log("error",err);
        return null;
    }
    if(userFound.length > 0){
        console.log("User infor returned");
        return userFound[0];
    }
};

exports.updateById = async (user,userid) => {
    let userUpdated 
    try{
    userUpdated = await sql.query("update userInformation SET? WHERE  userId = ? ",[user,userid]);
    console.log("User updated",userUpdated);
    }catch (err) {
        console.log("Error",err);
        return null;
    }
    if(userUpdated){
        console.log("Data returned",userUpdated);
        return userUpdated;
    }

};

checkExistingUser = async (userobj) => {
    let existingUser;
    try {
        existingUser = await sql.query(
            "select * from UserInformation where emailAddress = ? or phoneNumber = ?",
            [userobj.emailAddress, userobj.phoneNumber]
        );
        console.log("Existing User Check -->", existingUser);
    }catch (err) {
        console.log("error",err);
        return null;
    }
       if(existingUser[0]){
           console.log("User exists");
           if(existingUser[0].emailAddress === userobj.emailAddress){
               console.log("User with email already exists");
               return 1;
           } else if (existingUser[0].phoneNumber === userobj.phoneNumber){
               console.log("Mobile is already registered");
               return 2;
           }else return null;
       }else return null;
};