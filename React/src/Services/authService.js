import axios from 'axios'

const apiUrl = '/api/auth'

const signIn = async(username, password) => {
    console.log("hitting sign in: " + username + " passwrod: " + password)
    const res = await axios.post(apiUrl + '/login', {username, password})

}

const authService = {
    signIn
}

export default authService;