import axios from 'axios'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const Secure = () => {
    const [userName, setUserName] = useState('')


    useEffect(() => {
        let history = useHistory();
        axios.get('/api/auth/secure', { withCredentials: true })
            .then(r => {
                console.log(r)
                if (r.response.status === 301) {
                    history.push("/login")
                }

                setUserName(r.data)
            })
            .catch(err => {
                console.error(err)
                if (err.response?.status === 301) {
                    history.push("/login")
                }
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

            </div>)
    }
}

export default Secure;