import axios from 'axios';

const url = '/api/user';


const createUser = async (userObject) => {
    console.log("inside of create in userservice in frontend")
    console.table(userObject);
    try {
        const res = await axios.post(url + '/create',
            {
                email: userObject.email,
                fullName: userObject.fullName,
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

const authenticateUser = async (token)=> {
    try {
        const res = await axios.get(url + '/authenticate',{
            headers: {
                    Authorization: `Bearer ${token} `, 
            }
        });
        console.log(res.data)
        return res.data;
    }
    catch(error){
        return error.stack(error)
    }
}

const logoutUser = async (token) => {
    try{
        const res = axios.post('/api/user/logout', {token: token})
        res.status(200);
    }
    catch(error){
        console.error(error.stack);
    }
}
const userService = {
    createUser,
    authenticateUser,
    logoutUser
}

export default userService;

