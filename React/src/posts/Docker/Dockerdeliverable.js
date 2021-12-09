export const docker = {
    id: 3,
    img: "https://logodix.com/logo/826618.png",
    alt: "docker",
    title: 'Docker',
    body: `<html>

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <style type="text/css">
        ol {
            margin: 0;
            padding: 0
        }

        table td,
        table th {
            padding: 0
        }

        .c0 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.15;
            orphans: 2;
            widows: 2;
            text-align: left;
            height: 11pt
        }

        .c2 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-family: "Arial";
            font-style: normal
        }

        .c1 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.15;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c3 {
            background-color: #ffffff;
            max-width: 468pt;
            padding: 72pt 72pt 72pt 72pt
        }

        .title {
            padding-top: 0pt;
            color: #000000;
            font-size: 26pt;
            padding-bottom: 3pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .subtitle {
            padding-top: 0pt;
            color: #666666;
            font-size: 15pt;
            padding-bottom: 16pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        li {
            color: #000000;
            font-size: 11pt;
            font-family: "Arial"
        }

        p {
            margin: 0;
            color: #000000;
            font-size: 11pt;
            font-family: "Arial"
        }

        h1 {
            padding-top: 20pt;
            color: #000000;
            font-size: 20pt;
            padding-bottom: 6pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h2 {
            padding-top: 18pt;
            color: #000000;
            font-size: 16pt;
            padding-bottom: 6pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h3 {
            padding-top: 16pt;
            color: #434343;
            font-size: 14pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h4 {
            padding-top: 14pt;
            color: #666666;
            font-size: 12pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h5 {
            padding-top: 12pt;
            color: #666666;
            font-size: 11pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h6 {
            padding-top: 12pt;
            color: #666666;
            font-size: 11pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            font-style: italic;
            orphans: 2;
            widows: 2;
            text-align: left
        }
    </style>
</head>

<body class="c3">
    <p class="c1"><span class="c2">Docker is a commonly used technology in todays world of rapid deployment of
            applications. Having used docker to some degree in the past, I thought it time to refresh and supplement my
            docker knowledge by starting with a react application and containerizing it. </span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 362.00px; height: 300.00px;"><img
                alt="" src="images/image4.png"
                style="width: 362.00px; height: 300.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c2">I started out by containerizing a simple React.js application that I built. Here we
            can see a simple dockerfile based on the node:13-alpine image. Line four sets our environment variable to
            where the node modules live, and then we copy the package.json and package-lock.json files into the home
            directory, then npm install into the home directory. If we want to be able to access the running container,
            expose, on line 13, gives us a port to do just that. Line 15 then starts the application. This is enough to
            get us to where we can build an image. </span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 227.00px; height: 171.00px;"><img
                alt="" src="images/image1.png"
                style="width: 227.00px; height: 171.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1"><span class="c2">When writing your dockerfile you can also include a .dockerignore file that will
            ignore certain files or directories of the application that you are trying to containerize. This will help
            slim down your image size considerably. I wasn&rsquo;t terribly concerned with the size of my image in this
            case, so I didn&rsquo;t use one, but here is an example of one for reference. </span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 284.00px;"><img
                alt="" src="images/image8.png"
                style="width: 624.00px; height: 284.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c2">Here is where I built the docker image successfully. I found there is a little nuance
            at this point, the dot at the end of the docker image build command that tells docker that the dockerfile is
            to be used in the current directory is easy to forget. I started with the intention of pushing my image to
            dockerhub for later use, this requires that you include *your Docker Hub username*/*image name*: *image
            tag*. I made the mistake initially of not using this convention and quickly discovered that I couldn&rsquo;t
            push it to Docker Hub from a CLI. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 161.33px;"><img
                alt="" src="images/image2.png"
                style="width: 624.00px; height: 161.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 340.00px;"><img
                alt="" src="images/image5.png"
                style="width: 624.00px; height: 340.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c2">Here we can see that I did manage to successfully push my image to dockerhub using a
            CLI. Now from here we can run the image.</span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 36.00px;"><img
                alt="" src="images/image6.png"
                style="width: 624.00px; height: 36.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c2">Here is where I got the docker container to run. The -d flag means the container is
            running in detached mode, and -p allows us to indicate the ports I want my app to run on. After indicating
            the ports I indicate the image that I want to run, this includes the tag. If you try this yourself, please
            note, if you run the docker run command without indicating the tag, it will only run if the image is tagged
            latest. If you have any other tag but latest, you have to indicate the image tag with the image name.
        </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 197.33px;"><img
                alt="" src="images/image3.png"
                style="width: 624.00px; height: 197.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c2">Here we can see the running docker container in docker desktop</span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 289.33px;"><img
                alt="" src="images/image7.png"
                style="width: 624.00px; height: 289.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c2">...and here is the running application!</span></p>
</body>

</html>`}