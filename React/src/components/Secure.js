import axios from 'axios'
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
const Secure = () => {
    const [userName, setUserName] = useState('')


    useEffect(() => {

        axios.get('/api/auth/secure', { withCredentials: true })
            .then(r => {
                console.log(r)
                if (r.status !== 403) {
                    setUserName(r.data)
                }    
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    if (userName) {
        return (<div>
            <h1>Welcome, {userName}!</h1>
        </div>)
    }
    else {
        return (
            <div>
                <Redirect to="/login"></Redirect>
            </div>)
    }
}

export default Secure;