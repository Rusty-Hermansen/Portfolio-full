import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { getUser } from '../store/userSlice';
import userService from '../Services/userService';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';

const clientId = '517884522717-4i5ciriig1fm3uondq2ch65brkgrjs92.apps.googleusercontent.com';


const Login = () => {
 
    const dispatch = useDispatch();
    let history = useHistory();
    const token = useSelector(store => store.user.token);



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

    const redirectHandler = () => {
        history.push('/secure');
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
    
    }

    const onFailure = (res)=> {
        console.log('[Login failed] res: ', res)
    };
    const onLogoutSuccess = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('loginData')
        setLoginData(null);
       
        console.log("token from slice" + token)
        const logout = userService.logoutUser(token)
        const response = userService.authenticateUser(token)
        console.log("logout response " + response)
        alert('You have logged out')
    }

    const markdown = `Progressing toward earning my Bachelors degree and being immersed in the world of
tech, I have learned and heard about all sorts of different technologies. One of those technologies that has
caught my attention is kubernetes, or as it is commonly known, k8s. Working as a DevOps engineer intern for
Pluralsight, I had an opportunity to learn about k8s and even use it to some degree. I wanted to learn more
about it and here you can join my journey in learning kubernetes.


![4](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image4.png?raw=true)
 

To start our journey into kubernetes, we'll use an image that I previously
pushed up to docker hub, my car-app image.


![2](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image2.png?raw=true)


This is the simple kubernetes manifest that I made. I indicated that this is a stable
release of a pod, gave it a name and a label in the metadata portion, indicated what image I want to put in
each pod and what the pod names should be. Line 13 indicates that I want to be able to access the pod on
port 3000.


![12](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image12.png?raw=true)


It was then time to test my manifest, so I installed and started minikube and applied
my manifest. I found that instead of just running kubectl get pods over and over again, if you run it with
the --watch flag, it will show the pod status that updates periodically.


![5](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image5.png?raw=true)


I also wanted to make some services, this NodePort service indicates a port that is
open on every node in my kubernetes cluster. It also indicates the port the service listens on in the
cluster, the port the app in the container is listening on (this needs to match the manifest), the actual
indicated nodeport, and the label selector that must match the label in the manifest file.


![9](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image9.png?raw=true)


Here I applied my nodeport service and looked at the details of my service.


![6](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image6.png?raw=true)


I also wanted to be able to have multiple pods that a load balancer can direct
traffic to, so I opted to make a simple load balancer. I just indicated all of the normal metadata, stated I
want a load balancer, had it listen internally on port 80 and targetport that the service sends requests to
that the pods listen on.


![3](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image3.png?raw=true)


Here we can see the LoadBalancer up and running.


![7](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image7.png?raw=true)


Since I had all of the services that I wanted in place, it was time to exercise what
kubernetes is capable of in my deployment manifest.


![10](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image10.png?raw=true)


Here I&rsquo;m applying my deployment manifest, as you can see here, the three pods
are created successfully.


![11](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image11.png?raw=true)


Here I decided to test the self healing capabilities of kubernetes. In the context of
servers being cattle not pets, I decided to kill one. Kubernetes automatically made a new pod to replace the
old one. 


![1](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image1.png?raw=true)


I also wanted to be able to access whatever lives in my pods, in my case, my simple
react app that allows you to post a car that you want to sell. Since I used minikube as my kubernetes
playground, I created a service to access the load balancer so I could hit the react app in my pods.


![8](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image8.png?raw=true)


Here is the running app that lives in each pod of my cluster.`
     
    if (!isLoggedIn) {
        return (
            <>
            {loginData ? (
                <div>
                    <h2>You are logged in as {loginData.email} </h2>
                </div>

            )
            : (
                <div>
                      <GoogleLogin
                clientId={clientId}
                buttonText= "Login"
                // accessType="offline"
                // responseType="code"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy='single_host_origin'
                style={{marginTop: '100px'}}
                isSignedIn={true}/>

                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
                </div>
               
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
                <button onClick= {redirectHandler}>Redirect to /secure</button>
                    
              
            </>
        )
    }


}
export default Login;