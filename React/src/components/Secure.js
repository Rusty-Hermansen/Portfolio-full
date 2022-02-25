import axios from 'axios'
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
const Secure = () => {
const [userName, setUserName] = useState('')
const history = useHistory();

useEffect(() => {
 axios.get('/api/auth/secure', {withCredentials: true})
 .then(r => {
     console.log(r)
     if(r.response.status === 301){
        history.push("/login")
     }
    
     setUserName(r.data)})
 .catch(err => {
     console.error(err)
     if (err.response?.status===301){
         history.push("/login")
     }
 })
}, [])

    return(
        <div>

        </div>
    )
}

export default Secure;