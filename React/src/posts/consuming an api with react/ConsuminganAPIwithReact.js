
export const reactapi = {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    title: 'Consuming an API with react',
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

        .c4 {
            text-indent: 36pt
        }

        .c2 {
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
    <p class="c1 c2"><span class="c0"></span></p>
    <p class="c1"><span class="c0">Creating a react app that consumes an API with a key is simple and straightforward.
            In this post you&rsquo;ll see what that process looks like. Starting this application will assume you have
            React and NPM installed. To begin consuming an API, let&rsquo;s make a new React app by opening up a
            terminal and running the command:</span></p>
    <p class="c1 c2"><span class="c0"></span></p>
    <p class="c1"><span class="c0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Npx create-react-app reactApi</span>
    </p>
    <p class="c1 c2"><span class="c0"></span></p>
    <p class="c1"><span class="c0">This will create a brand new React application that is ready to go. Once the react
            app has been made, you&rsquo;ll want to install Axios by running the following command in the
            terminal:</span></p>
    <p class="c1"><span
            class="c0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </p>
    <p class="c1 c4"><span class="c0">Npm install axios</span></p>
    <p class="c1 c2 c4"><span class="c0"></span></p>
    <p class="c1"><span class="c0">Once axios is installed, open up VS:Code or your favorite code editor and navigate to
            the src folder.In the src folder make a new file called Api.js</span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad)
             translateZ(0px); width: 179.00px; height: 392.00px;"><img
                alt="" src="images/image3.png"
                style="width: 179.00px; height: 392.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">In the Api.js file is where we get our api set up. Here we need to import axios and
            get our API set up with the key, address, and any parameters. We set up an anonymous async function that
            will return car formation from our api. We can see that we pass in a vin number as a parameter with the host
            URL and your host API key and can then return the pieces of JSON that we want at the bottom. Note: Please
            don&rsquo;t forget to export your Api component. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 560.00px; height: 313.00px;"><img
                alt="" src="images/image5.png"
                style="width: 560.00px; height: 313.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1 c2"><span class="c0"></span></p>
    <p class="c1"><span class="c0">Now back in App.js we can work on using that information from the API. We can use
            useState to set up a state variable that will hold our car information and use useEffect to make
            asynchronous calls to the api that will only re-render when the carInfo state variable has changes. In the
            return statement we can finally take our API response and display it. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000;
             transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 500.00px; height: 544.00px;"><img
                alt="" src="images/image4.png"
                style="width: 500.00px; height: 544.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here we also learn something fun, API&rsquo;s that have keys often require payment. I
            found one that let me have a limited number of requests and have been locked out from making too many
            requests. Otherwise, this code would return the vin number and year of the car requested. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; 
            transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 156.00px;"><img
                alt="" src="images/image1.png"

                style="width: 624.00px; height: 156.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 508.00px; height: 422.00px;"><img
                alt="" src="images/image2.png"
                style="width: 508.00px; height: 422.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1 c2"><span class="c0"></span></p>
</body>

</html>`
}