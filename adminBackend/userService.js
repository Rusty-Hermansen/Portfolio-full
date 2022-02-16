const bcrypt = require('bcrypt');
const { dbService } = require('./db-service');
const saltRounts = 100;


const addUser = async (user) => {
    if (
        !user?.username ||
        !user?.password ||
        !user?.password2 ||
        user.userName.trim().length < 5 ||
        user.password.trim().length < 8 ||
        user.passowrd !== user.password2) {
        throw 400;
    }

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            dbService.addUser(user.username, hash, salt )
        })
    })


}

module.exports.userService = {
    addUser
}