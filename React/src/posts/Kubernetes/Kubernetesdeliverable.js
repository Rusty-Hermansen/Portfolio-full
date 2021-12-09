export const kubernetes = {
    id:0,
    img: "https://developers.hp.com/sites/default/files/kubernetes-logo_0.jpg",
    alt: "kubernetes logo", 
    title: 'Kubernetes',
    body: `
    <html className="bg-black>

    <head>
        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    </head>
    
    <body class="c3">
        <p class="c1"><span class="c0">Progressing toward earning my Bachelors degree and being immersed in the world of
                tech, I have learned and heard about all sorts of different technologies. One of those technologies that has
                caught my attention is kubernetes, or as it is commonly known, k8s. Working as a DevOps engineer intern for
                Pluralsight, I had an opportunity to learn about k8s and even use it to some degree. I wanted to learn more
                about it and here you can join my journey in learning kubernetes. &nbsp;</span></p>
        <p class="c1 c2"><span class="c0"></span></p>
        <p class="c1 c2"><span class="c0"></span></p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 340.00px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image4.png?raw=true"
                    style="width: 624.00px; height: 340.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">To start our journey into kubernetes, we&rsquo;ll use an image that I previously
                pushed up to docker hub, my car-app image. </span></p>
        <p class="c1 c2"><span class="c0"></span></p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 202.67px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image2.png?raw=true"
                    style="width: 624.00px; height: 202.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">This is the simple kubernetes manifest that I made. I indicated that this is a stable
                release of a pod, gave it a name and a label in the metadata portion, indicated what image I want to put in
                each pod and what the pod names should be. Line 13 indicates that I want to be able to access the pod on
                port 3000. </span></p>
        <p class="c1 c2"><span class="c0"></span></p>
        <p class="c1 c2"><span class="c0"></span></p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 170.67px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image12.png?raw=true"
                    style="width: 624.00px; height: 170.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">It was then time to test my manifest, so I installed and started minikube and applied
                my manifest. I found that instead of just running kubectl get pods over and over again, if you run it with
                the --watch flag, it will show the pod status that updates periodically. </span></p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 230.67px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image5.png?raw=true"
                    style="width: 624.00px; height: 230.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">I also wanted to make some services, this NodePort service indicates a port that is
                open on every node in my kubernetes cluster. It also indicates the port the service listens on in the
                cluster, the port the app in the container is listening on (this needs to match the manifest), the actual
                indicated nodeport, and the label selector that must match the label in the manifest file. </span></p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 336.00px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image9.png?raw=true"
                    style="width: 624.00px; height: 336.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">Here I applied my nodeport service and looked at the details of my service. </span>
        </p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 354.00px; height: 265.00px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image6.png?raw=true"
                    style="width: 354.00px; height: 265.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">I also wanted to be able to have multiple pods that a load balancer can direct
                traffic to, so I opted to make a simple load balancer. I just indicated all of the normal metadata, stated I
                want a load balancer, had it listen internally on port 80 and targetport that the service sends requests to
                that the pods listen on. </span></p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 62.67px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image3.png?raw=true"
                    style="width: 624.00px; height: 62.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">Here we can see the LoadBalancer up and running. </span></p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 374.67px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image7.png?raw=true"
                    style="width: 624.00px; height: 374.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">Since I had all of the services that I wanted in place, it was time to exercise what
                kubernetes is capable of in my deployment manifest. </span></p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 214.67px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image10.png?raw=true"
                    style="width: 624.00px; height: 214.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">Here I&rsquo;m applying my deployment manifest, as you can see here, the three pods
                are created successfully. </span><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 122.67px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image11.png?raw=true"
                    style="width: 624.00px; height: 122.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
    
        <p class="c1"><span class="c0">Here I decided to test the self healing capabilities of kubernetes. In the context of
                servers being cattle not pets, I decided to kill one. Kubernetes automatically made a new pod to replace the
                old one. </span></p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 280.00px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image1.png?raw=true"
                    style="width: 624.00px; height: 280.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">I also wanted to be able to access whatever lives in my pods, in my case, my simple
                react app that allows you to post a car that you want to sell. Since I used minikube as my kubernetes
                playground, I created a service to access the load balancer so I could hit the react app in my pods. </span>
        </p>
        <p class="c1"><span
                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 326.67px;"><img
                    alt=""
                    src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image8.png?raw=true"
                    style="width: 624.00px; height: 326.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                    title=""></span></p>
        <p class="c1"><span class="c0">Here is the running app that lives in each pod of my cluster. </span></p>
    </body>
    
    </html>`
}