import axios from "axios"

const apiUrl = '/api'

type user = {
    username: string,
    password: string, 
    password2: string,
}

const addUser = async(user: user) => {
await axios.post(apiUrl + '/user/adduser', {user});
}

const newUserApiService = {
    addUser
}

export default newUserApiService;