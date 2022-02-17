import axios from 'axios'

const url = '/api/auth'

const signIn = async(username, password) => {
    const res = await axios.post(apiUrl + '/validate', {username, password})

}

const authService = {
    signIn
}

export default authService;