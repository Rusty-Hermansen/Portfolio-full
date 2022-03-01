import { useEffect, useState } from 'react';
import authService from '../Services/authService';
import axios from 'axios';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasError, setHasError] = useState(false);


    useEffect(() => {

        axios.get('/api/auth/secure', { withCredentials: true })
            .then(r => {
                console.log(r)
                if (r.status !== 403) {
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
        setHasError(false);
        setUsername(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setHasError(false);
        setPassword(e.target.value);
    }



    const submitHandler = async (e) => {
        e.preventDefault();
        const authServiceResult = await authService.signIn(username, password)
        if (authServiceResult){
            setIsLoggedIn(true);
            setHasError(false);
        }
        else {
            setHasError(true);
        }
    }

    const logoutHandler = async (event) => {
        event.preventDefault();
        setUsername('');
        setPassword('');
        setIsLoggedIn(false);
        await axios.get('/api/auth/logout');
    }
    console.log(hasError);
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
                { 
                    hasError &&
                    <div>
                        Incorrect credentials
                    </div>
                }
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