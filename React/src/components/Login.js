import { useEffect, useState } from 'react';
import {refreshTokenSetup} from '../Helpers/refreshTokenSetup';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';

const clientId = '517884522717-4i5ciriig1fm3uondq2ch65brkgrjs92.apps.googleusercontent.com';

const refreshTokenSetup = (res) => {
    let refreshTiming = (res.tokenObj.expires_in || 3600 -5 * 60) * 1000;
}
const Login = () => {
 


    // useEffect(() => {

    //     axios.get('/api/auth/secure', { withCredentials: true })
    //         .then(r => {
    //             console.log(r)
    //             if (r.status !== 403) {
    //                 setIsLoggedIn(true)
    //             }    
    //         })
    //         .catch(err => {
    //             console.error(err)
    //         })
    // }, [])

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:' , resprofileObj);
        setIsLoggedIn(true)
        refreshTokenSetup(res);
    }
    const onFailure = (res)=> {
        console.log('[Login failed] res: ', res)
    };
    const onLogoutSuccess = () => {
        setIsLoggedIn(false)
        alert('You have logged out')
    }


    if (!isLoggedIn) {
        return (
            <>
                <GoogleLogin
                clientId={clientId}
                buttonText= "Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}/>
            </>
        )

    }
    else {
        return(
            <>
                <GoogleLogout
                clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                />
                    
              
            </>
        )
    }


}
export default Login;