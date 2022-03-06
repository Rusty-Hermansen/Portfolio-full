import { FC, useState, FormEvent, ChangeEvent } from 'react';
import newUserApiService from '../services/new-user-api-service';
import nameModel from '../Models/nameModel';
import passwordModel from '../Models/passwordModel'


const NewUser = () => {
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('')
    const [formValid , setFormValid] = useState<boolean>(false)
    

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
        try{
            const userObject = new nameModel(username);
            const passwordObject = new passwordModel(password);
            const passwordObject2 = new passwordModel(password2);
            if(passwordObject.password.trim() === passwordObject2.password.trim()){
                 newUserApiService.addUser({ username: userObject, password: passwordObject, password2: passwordObject2 })
            }
           
        }
        catch(err){
            throw new Error("Invalid username, password, or passwords don't match")
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
export default NewUser;