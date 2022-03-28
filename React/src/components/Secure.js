import axios from 'axios'
import { useState, useEffect } from 'react';
import userService from '../Services/userService';
import { useDispatch, useStore } from 'react-redux';
import { getUser } from '../store/userSlice';

const Secure = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [firstRender, setFirstRender] = useState(true);
    const [joke, setJoke] = useState('');
    const [iceCream, setIceCream] = useState('');
    const [age, setAge] = useState();
    const [nickname, setNickname] = useState('');

    const [userName, setUserName] = useState('');
    const storeUser = useStore(store => store.user.user)
    const token = useStore(store => store.user.token)
    const dispatch = useDispatch();

    useEffect(() => {

        axios.get('/api/auth/secure', { withCredentials: true })
            .then(r => {
                console.log(r)
                if (r.status !== 403) {
                    setFirstRender(false)
                    setUserName(r.data)
                }
            })
            .catch(err => {
                console.error(err)
            })
        
        useDispatch(getUser(token))
        console.log(storeUser);
        if (!user) {
            console.error("no user")
        }
        else {
            const user = userService.getUser(user.email)
            setEmail(user.email)
            setFullName(user.fullName)
            setJoke(user.joke)
            setIceCream(user.iceCream)
            setAge(user.age)
            setNickname(user.nickName)
        }
    }, [])

    const jokeChanged = (e) => {
        setJoke(e.target.value)
    }
    const iceCreamChanged = (e) => {
        setIceCream(e.target.value)
    }
    const ageChanged = (e) => {
        setAge(e.target.value)
    }
    const nicknameChanged = (e) => {
        setNickname(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            fullName: fullName,
            joke: joke,
            iceCream: iceCream,
            age: age,
            nickName: nickname
        }
        userService.createUser(user)
    }

        if(user){
            return (

            <div>
                <h2>User Information</h2>
                <p>Email Address: {email}</p>
                <p>Name: {firstName} {lastName}</p>
                <p>Favorite Joke: {joke}</p>
                <p>favorite Ice Cream: {iceCream}</p>
                <p>age: {age}</p>
                <p>your nickname: {nickname}</p>
                <hr />
                <form onSubmit={onSubmit}>
                    <label>Joke</label>
                    <input type='text' onChange={jokeChanged} value={joke} />
                    <label>Favorite Ice Cream</label>
                    <input type='text' onChange={iceCreamChanged} value={iceCream} />
                    <label>Age</label>
                    <input type='number' onChange={ageChanged} value={age} />
                    <label>Nickname</label>
                    <input type='text' onChange={nicknameChanged} value={nickname} />
                    <button type='submit'>Submit</button>
                </form>
               

            </div>) 
        }
        else {
            return (
                <>
                Unauthorized
                </>
                
            )
        }
       
    }


export default Secure;