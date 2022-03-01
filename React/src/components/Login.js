import { useEffect, useState } from 'react';
import authService from '../Services/authService';
import axios from 'axios';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {

        axios.get('/api/auth/secure', { withCredentials: true })
            .then(r => {
                console.log(r)
                if (r.response.status !== 403) {
                    setIsLoggedIn(true)
                }    
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const formValid = (

        username.trim().length > 0 &&
        password.trim().length > 0
    )


    const userNameChangeHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }



    const submitHandler = async (e) => {
        e.preventDefault();
        const authServiceResult = await authService.signIn(username, password)
        if (authServiceResult){
            setIsLoggedIn(true);
        }
    }

    const logoutHandler = (event) => {
        event.preventDefault();
        setUsername('');
        setPassword('');
        document.cookie = "session_id =;";
        axios.get('/api/auth/logout', {withCredentials: true});

    }

    if (!isLoggedIn) {
        return (
            <>
                <h1>
                    Please sign-in for the super secret sauce:
                </h1>
                <form onSubmit={submitHandler}>
                    <label>Username:</label>
                    <input type='text' onChange={userNameChangeHandler} />
                    <label>Password:</label>
                    <input type='password' onChange={passwordChangeHandler} />
                    <button type="submit">Sign In</button>

                </form>
            </>
        )
    }
    else {
        return(
            <button onClick={logoutHandler}>Logout</button>
        )
    }


}
export default Login;