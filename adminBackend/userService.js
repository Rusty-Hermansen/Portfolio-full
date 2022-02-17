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
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            console.log("attempting to add user to the database")
            dbService.addUser(user.username, hash, salt )
        })
    })

    
}

module.exports.userService = {
    addUser
}