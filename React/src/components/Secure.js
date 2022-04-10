import axios from 'axios'
import { useState, useEffect } from 'react';
import userService from '../Services/userService';
import { useDispatch, useSelector } from 'react-redux';
import imageService from '../Services/imageService';
import { getUser } from '../store/userSlice';

const Secure = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [firstRender, setFirstRender] = useState(true);
    const [joke, setJoke] = useState('');
    const [iceCream, setIceCream] = useState('');
    const [age, setAge] = useState();
    const [nickname, setNickname] = useState('');
    const [file, setFile] = useState()
    const [userName, setUserName] = useState('');
    const storeUser = useSelector(store => store.user.user)
    const token = useSelector(store => store.user.token)
    const dispatch = useDispatch();

    console.log("store " + storeUser)

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
        
        // dispatch(getUser(token))
        console.log("stored user" + storeUser);
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
        
        console.log("nickname" + nickname)
        const result = await imageService.uploadImage({ image: file })
        console.log(result)
        const user = {
            email: email,
            fullName: fullName,
            joke: joke,
            iceCream: iceCream,
            age: age,
            nickName: nickname,
            profilePicKey: result
        }
        userService.createUser(user)
    }

    const fileSelectedHandler = (event) => {
        const file = event.target.files[0]
        setFile(file)
    }

        if(!storeUser){
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
                    <label>Upload your image here:</label>
                <input
                    type="file"
                    onChange={fileSelectedHandler}
                    accept="image/*"
                />
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