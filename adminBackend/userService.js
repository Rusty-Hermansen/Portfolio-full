const bcrypt = require('bcrypt');
const { dbService } = require('./db-service');
const saltRounds = 5;


const addUser = async (user) => {
    console.log("in addUser service ", user)
    if (
        !user ||
        !(user.username) ||
        !(user.password) ||
        !(user.password2) ||
        user.username.trim().length < 5 ||
        user.password.trim().length < 8 ||
        user.password != user.password2) {
        throw 400;
    }
console.log("hashing and salting")

    const salt = await bcrypt.genSalt(saltRounds)
    const hash= await bcrypt.hash(password, salt)
    await dbService.addUser(user.username, hash, salt)
    
}

module.exports.userService = {
    addUser
}