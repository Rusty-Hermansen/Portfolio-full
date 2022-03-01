import axios from 'axios'
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
const Secure = () => {
    const [userName, setUserName] = useState('')
    const [firstRender, setFirstRender] = useState(true);

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

    if (userName !== '' && firstRender === false) {
        return (<div>
            <h1>Welcome, {userName}!</h1>
        </div>)
    }
    else {
        return (
            <div>
                {/* {
                    !firstRender &&
                   <Redirect to="/login"></Redirect> 
                } */}
                Unauthorized
                
            </div>)
    }
}

export default Secure;