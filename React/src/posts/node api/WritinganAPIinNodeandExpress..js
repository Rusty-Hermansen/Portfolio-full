export const nodeexpressapi = {
    id: 4,
    img: "https://logodix.com/logo/1764835.png",
    alt: "node",
title: 'Writing an API with node and express',
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

        .c1 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-family: "Arial";
            font-style: normal
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

        .c3 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.15;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c2 {
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

<body class="c2">
    <p class="c3"><span class="c1">Writing an API in Node and Express is simple and easy. In this post, I&rsquo;ll show
            you how to create your own API with node and express. </span></p>
    <p class="c0"><span class="c1"></span></p>
    <p class="c3"><span class="c1">To start out, you&rsquo;ll create a folder in the desired directory, and make a new
            file in that folder called something like &lsquo;App.js&rsquo;. It&rsquo;s easiest if you use VS:Code and
            are working in the folder you just created. In VS:Code upon up a new terminal and it&rsquo;s time to install
            Express by typing in the command,:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Npm install -g
            express</span></p>
    <p class="c0"><span class="c1"></span></p>
    <p class="c3"><span class="c1">Another useful package to install is called nodemon, which will hot reload your Node
            application whenever you save your files in VS:Code. To install nodemon you&rsquo;ll run the following
            command in your terminal:</span></p>
    <p class="c0"><span class="c1"></span></p>
    <p class="c3"><span class="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Npm install -g nodemon</span></p>
    <p class="c0"><span class="c1"></span></p>
    <p class="c3"><span class="c1">After you have those two packages it&rsquo;s time to create a package.json file,
            which will happen automatically when you run the
            command:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Npm init</span></p>
    <p class="c3"><span class="c1"><br>Once the init is completed you should see a package.json file that should look
            something like this:</span></p>
    <p class="c0"><span class="c1"></span></p>
    <p class="c3"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) 
            translateZ(0px); width: 561.00px; height: 356.00px;"><img
                alt="" src="images/image7.png"
                style="width: 561.00px; height: 356.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1"></span></p>
    <p class="c3"><span>You&rsquo;ll want to add line 6 in your package.json so you can use node modules. Node modules
            allow you to import in the same basic manner as in React.</span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 495.00px; height: 205.00px;"><img
                alt="" src="images/image3.png"
                style="width: 495.00px; height: 205.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c1"><br>You&rsquo;ll see the express import to use express and the users
            import. This import holds a list of users for us to interact with.</span></p>
    <p class="c3"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 480.00px; height: 270.00px;"><img
                alt="" src="images/image10.png"
                style="width: 480.00px; height: 270.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c3"><span class="c1">To continue in App.js, starting on line 5 is where we start configuring express with
            middleware, &nbsp;to send responses in json and to run on port 4000 so you can access it using localhost.
        </span></p>
    <p class="c3"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 495.00px; height: 205.00px;"><img
                alt="" src="images/image3.png"
                style="width: 495.00px; height: 205.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c3"><span>After we get all of the configuration done above we can get down to doing CRUD operations. Each
            HTTP request has an endpoint that you can use to call that specific crud operation as well as an anonymous
            function that takes in res and req. Req stands for request, res stands for response. <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 300.00px; height: 22.00px;"><img
                alt="" src="images/image9.png"
                style="width: 300.00px; height: 22.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c3"><span class="c1">On line 11 we can see a Read crud operation that reads off a greeting property with a
            greeting in Json.</span></p>
    <p class="c3"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 504.00px; height: 59.00px;"><img
                alt="" src="images/image8.png"
                style="width: 504.00px; height: 59.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c3"><span>On line 16 is where we read all users from a list/database and send them all in a json
            blob.<br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 408.00px; height: 79.00px;"><img
                alt="" src="images/image5.png"
                style="width: 408.00px; height: 79.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c3"><span>&nbsp;Line 21 is where we can Create a new user taking their information from the passed in
            request and adding it to the list of users on line 25, and sending an OK status code on line 26 to confirm
            success.<br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 578.00px; height: 140.00px;"><img
                alt="" src="images/image1.png"
                style="width: 578.00px; height: 140.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span><br> On line 29 is where you can find a user by id by filtering the list of users
            by id. &nbsp;<br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 78.67px;"><img
                alt="" src="images/image11.png"
                style="width: 624.00px; height: 78.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c1"><br>Line 34 is where we can update a user by id, using request
            parameters and pushing the updated user to the list and sending an OK status code to confirm success.
        </span></p>
    <p class="c3"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 89.33px;"><img
                alt="" src="images/image6.png"
                style="width: 624.00px; height: 89.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c3"><span class="c1">On line 41 is where we can find a user by id, and removing them according to their
            index using the splice function and sending an OK status code to confirm success. </span></p>
    <p class="c3"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 587.00px; height: 85.00px;"><img
                alt="" src="images/image4.png"
                style="width: 587.00px; height: 85.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c3"><span class="c1">Now in order to run this application you just need to run:<br></span></p>
    <p class="c3"><span class="c1">Node App.js</span></p>
    <p class="c0"><span class="c1"></span></p>
    <p class="c3"><span class="c1">Please note that the file names are case-sensative, App.js and app.js aren&rsquo;t
            the same.</span></p>
    <p class="c3"><span>Here is what we see when we look at the users endpoint. &nbsp;<br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 208.00px;"><img
                alt="" src="images/image2.png"
                style="width: 624.00px; height: 208.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1"></span></p>
</body>

</html>`}