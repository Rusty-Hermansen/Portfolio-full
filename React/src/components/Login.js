import { FC, useState, FormEvent, ChangeEvent } from 'react';
import  authService from '../Services/authService';
import axios from 'axios';



const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
  


    const formValid = (

        username.trim().length > 0 &&
        password.trim().length > 0 
    )


    const userNameChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

 

    const submitHandler = (e) => {
        e.preventDefault();
        authService.signIn(username, password)
        axios.post('/api/auth/login', {username, password})
        .then (r => console.log('success', r))
        .catch(err => console.error(err))
    }

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
export default Login;