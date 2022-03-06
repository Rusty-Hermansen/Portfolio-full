import axios from 'axios'

const apiUrl = '/api/auth'

const signIn = async (usernameObject, passwordObject) => {
    console.log("hitting sign in: " + usernameObject.name + " password: " + passwordObject.password)
    try {
        const res = await axios.post(apiUrl + '/login', {username: usernameObject.name, password: passwordObject.password})
        return res.status === 200
    }
    catch (err) {
        return false;
    }
    
    
}

const authService = {
    signIn
}

export default authService;