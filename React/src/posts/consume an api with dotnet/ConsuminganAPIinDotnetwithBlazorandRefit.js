
export const consumeapidotnet = {
    id: 8,
    img: "https://www.ynvtechnologies.com/img/solutions/dotnet.png",
    alt: "dotnet",
    title: 'Consuming an api with dotnet, refit, and blazor',
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

        .c2 {
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

        .c3 {
            background-color: #ffffff;
            max-width: 468pt;
            padding: 72pt 72pt 72pt 72pt
        }

        .c1 {
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

<body class="c3">
    <p class="c0"><span>Consuming an API has never been easier in dotnet than when you use Refit and a Blazor front end.
            In this post, I&rsquo;ll show you how simple it can be. In this article I&rsquo;ll be using an API that I
            wrote but the process still applies for any API you want to consume. To begin, you&rsquo;ll need to start a
            new Blazor WebAssembly Application.<br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px);
             -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 74.67px;"><img
                alt="" src={require('./images/image8.png')}
                style="width: 624.00px; height: 74.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span><br>You can give it an appropriate name for the project and solution and create it
            with the default configuration. Once the project is created you&rsquo;ll start by adding the Refit nuget
            package.</span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) 
            translateZ(0px); width: 624.00px; height: 264.00px;"><img
                alt="" src="images/image4.png"
                style="width: 624.00px; height: 264.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span>You&rsquo;ll right-click on your project, select Manage Nuget Packages, select the browse button
            at the top and search for Refit and download the Refit and Refit.HttpClientFactory nuget
            packages.<br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 118.67px;"><img
                alt="" src="images/image9.png"
                style="width: 624.00px; height: 118.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span>Once you have the Refit nuget packages downloaded you can create a Models folder
            in your project and add a new file for your model. I&rsquo;m working with cars, so naturally, my model file
            is CarModel.cs.<br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 292.00px; height: 413.00px;"><img
                alt="" src="images/image5.png"
                style="width: 292.00px; height: 413.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">Inside of the model file we&rsquo;ll find all of the attributes about a car that I
            want to store, like the year, make, model, engine, and transmission information as well as an associated id
            for each car that I interact with. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 416.00px; height: 272.00px;"><img
                alt="" src="images/image6.png"
                style="width: 416.00px; height: 272.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span><br>Now that the model file is all set up and ready to go, you can create a
            DataAccess folder and make an interface that will set up methods for CRUD operations. &nbsp;My interface
            will be called ICarData.cs. You&rsquo;ll also need to make sure that you&rsquo;re using Refit in your
            interface file. Each of the CRUD methods in your interface will have the HTTP method, as well as the route
            you&rsquo;ll use for that operation. <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 445.00px; height: 493.00px;"><img
                alt="" src="images/image7.png"
                style="width: 445.00px; height: 493.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0 c1"><span class="c2"></span></p>
    <p class="c0"><span>After the interface is all set up you just need to navigate to Program.cs comment out the
            builder.Services.AddScoped line and add the new one as seen here.The newly added line uses the interface
            that was made and also takes in the address of the API that you want to interact with. Since this is my own
            API running locally, I can access it via localhost. <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 708.50px; height: 41.77px;"><img
                alt="" src="images/image2.png"
                style="width: 708.50px; height: 41.77px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span>Now if you want something basic in our front end that you can use to get a list of all cars, you
            can add this bit of code in the index.razor file found in the pages folder in order to display the list of
            cars. <br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 288.00px;"><img
                alt="" src="images/image3.png"
                style="width: 624.00px; height: 288.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c2"><br>Here is my running application with the list of cars and
            specifications.</span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 304.00px;"><img
                alt="" src="./images/image1.png"
                style="width: 624.00px; height: 304.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
</body>

</html>`}

