import { FC, useState, FormEvent, ChangeEvent } from 'react';
import authService from '../Services/authService';
import axios from 'axios';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const formValid = (

        username.trim().length > 0 &&
        password.trim().length > 0
    )


    const userNameChangeHandler = (e) => {
        setUsername(e.target.value)
        console.log(e.target.value)
        console.log(username)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }



    const submitHandler = (e) => {
        e.preventDefault();
        authService.signIn(username, password)
    }

    const logoutHandler = (event) => {
        event.preventDefault();
        setUsername('');
        setPassword('');
        document.cookie = "session_id =;";
        axios.get('/api/auth/logout', {withCredentials: true});

    }

    if (username.trim().length === 0) {
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
    // else {
    //     setUsername("");
    //     return(
    //         <button onClick={logoutHandler}>Logout</button>
    //     )
    // }


}
export default Login;