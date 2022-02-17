import { FC, useState, FormEvent, ChangeEvent } from 'react';
import newUserApiService from '../services/new-user-api-service';



const NewUser = () => {
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('')


    const formValid: boolean = (

        username.trim().length > 0 &&
        password.trim().length > 0 &&
        password2.trim().length > 0 &&
        password.trim() === password2.trim())


    const userNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const password2ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value)
    }

    const submitUserHandler = (e: FormEvent) => {
        e.preventDefault();
        if (formValid) {
            newUserApiService.addUser({ username, password, password2 })
                .then(r => console.log('success'))
                .catch(error => console.error(error));
        }
    }

    return (
        <>
            <h1>
                Add New user:
            </h1>
            <form onSubmit={submitUserHandler}>
                <label>Username:</label>
                <input type='text' onChange={userNameChangeHandler} />
                <label>Password:</label>
                <input type='password' onChange={passwordChangeHandler} />
                <label>Retype Password:</label>
                <input type='password' onChange={password2ChangeHandler} />
                <button type="submit" >Submit</button>
                <button type="button">Cancel</button>
            </form>
        </>
    )

}
export default NewUser