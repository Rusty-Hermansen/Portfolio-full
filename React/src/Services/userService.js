import axios from 'axios';

const url = '/api/user';

const getUser = async (email) => {
    const res = await axios.get(url + '/get');
    return res.data;
}

const createUser = async (userObject) => {
    try {
        const res = await axios.post(url + '/create',
            {
                email: userObject.email,
                firstName: userObject.firstName,
                lastName: userObject.lastName,
                joke: userObject.joke,
                iceCream: userObject.iceCream,
                age: userObject.age,
                nickName: userObject.nickName
            })
            return res.status === 200
    }
    catch(err){
        return false
    }
    
}
const userService = {
    getUser,
    createUser
}

export default userService;

