import axios from 'axios'
import { useState, useEffect } from 'react';

const Secure = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [firstRender, setFirstRender] = useState(true);
    const [joke, setJoke] = useState('');
    const [iceCream, setIceCream] = useState('');
    const [age, setAge] = useState();
    const [nickname, setNickname] = useState('');

    const [userName, setUserName] = useState('');

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
    }

    if (userName !== '' && firstRender === false) {
        return (<div>
            <h1>Welcome, {userName}!</h1>
        </div>)
    }
    else {
        return (
            
            <div>
                <h2>User Information</h2>
                <p>Email Address: {email}</p>
                <p>Name: {firstName} {lastName}</p>
                <p>Favorite Joke: {joke}</p>
                <p>favorite Ice Cream: {iceCream}</p>
                <p>age: {age}</p>
                <p>your nickname: {nickname}</p>
                <hr/>
                <form onSubmit={onSubmit}>
                    <label>Joke</label>
                    <input type='text' onChange={jokeChanged} value={joke} />
                    <label>Favorite Ice Cream</label>
                    <input type='text' onChange = {iceCreamChanged} value={iceCream} />
                    <label>Age</label>
                    <input type='number' onChange = {ageChanged} value={age}/>
                    <label>Nickname</label>
                    <input type='text' onChange = {nicknameChanged} value={nickname}/>
                    <button type='submit'>Submit</button>
                </form>
                {/* {
                    !firstRender &&
                   <Redirect to="/login"></Redirect> 
                } */}
                Unauthorized

            </div>)
    }
}

export default Secure;