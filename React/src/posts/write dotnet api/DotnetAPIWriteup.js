export const dotnetapi = {
    id: 7,
    img: "https://www.ynvtechnologies.com/img/solutions/dotnet.png",
    alt: "dotnet", 
    title: 'Writing an API in dotnet',
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
            text-align: left
        }

        .c2 {
            background-color: #ffffff;
            max-width: 468pt;
            padding: 72pt 72pt 72pt 72pt
        }

        .c3 {
            height: 11pt
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
    <p class="c0"><span class="c1">If you&rsquo;re new to writing web applications in dotnet, the thought of writing
            your own API might be a bit intimidating. The purpose of this post is to show you how to write your own
            simple API in dotnet to see that it&rsquo;s not so intimidating. </span></p>
    <p class="c0 c3"><span class="c1"></span></p>
    <p class="c0"><span>You&rsquo;ll first start by making a new project and selecting an ASP.Net Core Web API that will
            scaffold an API for you. <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 81.33px;"><img
                alt="" src="images/image2.png"
                style="width: 624.00px; height: 81.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span>You can name your project and solution whatever is appropriate for your use case. My api is a
            car tracker that just tracks some information about cars. <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 308.00px;"><img
                alt="" src="images/image4.png"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span>Once you move onto the next page of the creation wizard, you&rsquo;ll just want to make sure you
            have the default options selected. <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 316.00px;"><img
                alt="" src="images/image5.png"
                style="width: 624.00px; height: 316.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c1"><br></span></p>
    <p class="c0"><span>Now you should have your API project scaffolded. I&rsquo;ll first start by defining the kind of
            information about a car that I want to keep track of. For doing that, I&rsquo;ll create a models folder in
            my project and make a model file that will have all of the information that I want. <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 300.00px; height: 304.00px;"><img
                alt="" src="images/image7.png"
                style="width: 300.00px; height: 304.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span><br>Inside my model, I decided I wanted to keep track of basic car information
            like the year, make, model, engine, and transmission along with an Id. <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 431.00px; height: 269.00px;"><img
                alt="" src="images/image6.png"
                style="width: 431.00px; height: 269.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">Now that I have a model in place I can create a controller that will do CRUD
            operations. In the controllers folder you&rsquo;ll notice a WeatherForecastController that won&rsquo;t be
            used. Make a new controller in that folder by right clicking the folder, selecting add, and then controller.
        </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 126.67px;"><img
                alt="" src="images/image11.png"
                style="width: 624.00px; height: 126.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span>In this project I&rsquo;m not connecting to a database, so I have a list that I created in my
            controller that stores data about two vehicles and will allow me to create cars, read all cars from the
            list, update cars in the list, and delete cars from the list. Please note the attributes at the top of the
            picture below and don&rsquo;t forget put them in your project. I won&rsquo;t get into the [ApiController]
            attribute here because it&rsquo;s fairly complicated, but the [Route] attribute helps you be able to route
            to and call the correct CRUD methods. &nbsp;<br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 508.00px; height: 429.00px;"><img
                alt="" src="images/image1.png"
                style="width: 508.00px; height: 429.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">Here are all of the methods responsible for CRUD operations, all with the appropriate
            request types, GET for retrieving the list and individual cars by Id, POST to add a car, PUT to update a
            car, and DELETE to remove a car from the list. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 428.00px;"><img
                alt="" src="images/image10.png"
                style="width: 624.00px; height: 428.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span><br>You may also need to add a Cross-Origin Resource Sharing (CORS) policy, I did
            because I couldn&rsquo;t communicate with my API without one. You&rsquo;ll create the policy in your
            ConfigureServices method of your Startup.cs file. </span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 184.00px;"><img
                alt="" src="images/image3.png"
                style="width: 624.00px; height: 184.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span>You then have to specify the policy that you want to use in the Configure method of Startup.cs.
            <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 301.33px;"><img
                alt="" src="images/image8.png"
                style="width: 624.00px; height: 301.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">You may have issues with HTTPS causing problem with hitting your API, I had issues so
            I commented out UseHttpsRedirection and removed the https endpoint from the applicationUrl property in my
            launchSettings.json file so it looks like this:</span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 441.00px; height: 149.00px;"><img
                alt="" src="images/image12.png"
                style="width: 441.00px; height: 149.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span>This is all you really have to do to set up the API portion of your project. When you run your
            API project you should see a Swagger page appear that will allow you to play around with your API. You can
            perform all of your CRUD operations here to make sure your API has all of the functionality that it needs.
            <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 305.33px;"><img
                alt="" src="images/image9.png"
                style="width: 624.00px; height: 305.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
</body>

</html>`}