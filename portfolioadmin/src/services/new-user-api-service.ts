import axios from "axios"
import nameModel from "../Models/nameModel"
import passwordModel from "../Models/passwordModel"

const apiUrl = '/api'

type user = {
    username: nameModel,
    password: passwordModel, 
    password2: passwordModel,
}

const addUser = async(user: user) => {
await axios.post(apiUrl + '/user/adduser', {user: user.username.name, password: user.password.value, password2: user.password2.value});
}

const newUserApiService = {
    addUser
}

export default newUserApiService;