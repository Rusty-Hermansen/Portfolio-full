import axios from 'axios'
import {useState, useEffect} from 'react'
const Secure = () => {
const [userName, setUserName] = useState('')

useEffect(() => {
 axios.get('/api/auth/secure', {withCredentials: true})
 .then(r => setUserName(r.data))
 .catch(err => {
     console.error(err)
     if (err.response?.status===301){
         history.pushState("*/")
     }
 })
}, [])

    return(
        <div>

        </div>
    )
}

export default Secure;