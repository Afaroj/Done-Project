const sql = require("../Model/database")

exports.getUserInfo = async (userId) => {
    const userInfo = await sql.query("select * from UserInformation where userId = ?",userId);
console.log("User Information from DB ->",userInfo);
return userInfo;
} 