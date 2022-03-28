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

    console.table(storeUser)

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
        
        dispatch(getUser(token))
        console.log(storeUser);
        if (!storeUser) {
            console.error("no user")
        }
        else {
            
            setEmail(storeUser.email)
            setFullName(storeUser.fullName)
            setJoke(storeUser.joke)
            setIceCream(storeUser.iceCream)
            setAge(storeUser.age)
            setNickname(storeUser.nickName)
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

        if(storeUser){
            return (

            <div>
                <h2>User Information</h2>
                <p>Email Address: {email}</p>
                <p>Name: {fullName}</p>
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