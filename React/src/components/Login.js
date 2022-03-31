import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from '../store/userSlice';

const clientId = '517884522717-4i5ciriig1fm3uondq2ch65brkgrjs92.apps.googleusercontent.com';


const Login = () => {
 
    const dispatch = useDispatch();
    let history = useHistory();

    const refreshTokenSetup = (res) => {
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse()
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
            // console.log('new auth Token', newAuthRes.id_token)

            setTimeout(refreshToken, refreshTiming)
        }

        setTimeout(refreshToken, refreshTiming)
    }


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
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null
    )

    const onSuccess = async (res) => {
        console.log('[Login Success] currentUser:' , res.profileObj);
        setIsLoggedIn(true)
        refreshTokenSetup(res);
        dispatch(getUser(res.tokenId))
        console.log(res.tokenId);
        history.push('/secure');

    }
    const onFailure = (res)=> {
        console.log('[Login failed] res: ', res)
    };
    const onLogoutSuccess = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('loginData')
        setLoginData(null)
        alert('You have logged out')
    }


    if (!isLoggedIn) {
        return (
            <>
            {loginData ? (
                <div>
                    <h2>You are logged in as {loginData.email} </h2>
                </div>

            )
            : (

                 <GoogleLogin
                clientId={clientId}
                buttonText= "Login"
                // accessType="offline"
                // responseType="code"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}/>
            )
            } 
               
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