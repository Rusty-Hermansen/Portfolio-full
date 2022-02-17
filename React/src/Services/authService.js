import axios from 'axios'

const apiUrl = '/api/auth'

const signIn = async(username, password) => {
    const res = await axios.post(apiUrl + '/login', {username, password})

}

const authService = {
    signIn
}

export default authService;