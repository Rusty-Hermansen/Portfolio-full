export const portfolioApi = {
    id:12,
    img: "https://logodix.com/logo/1764835.png",
    alt: "node", 
    title: 'Portfolio API for Database interactions',
    body: `
<html>

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
    <p class="c1"><span class="c0">When it comes to securely interacting with a database for a react app, database
            interactions need to take place through an api. In this post I will go over the api that I wrote that
            interacts with my database on behalf of my react frontend. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 508.00px; height: 420.00px;"><img
                alt="" src="images/image4.png"
                style="width: 508.00px; height: 420.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">This is the basics of my api, using express and dotenv (for environment variables),
            creating an endpoint to return a json post object from the api as well as returning all posts to display
            tiles for each post. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 599.00px; height: 797.00px;"><img
                alt="" src="images/image2.png"
                style="width: 599.00px; height: 797.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1 c2"><span class="c0"></span></p>
    <p class="c1 c2"><span class="c0"></span></p>
    <p class="c1"><span class="c0">Here I have the queries file that my App.js(in the backend) uses in order to ping the
            database. All of the credentials are pulled in from a .env file and the most basic functionality is set up
            with the proper queries to return a post. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 377.00px; height: 280.00px;"><img
                alt="" src="images/image3.png"
                style="width: 377.00px; height: 280.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">This is my apiService in my frontend that interacts with the api in order to get
            posts from the database. Again, it just has the most basic functionality that gets all of the posts from the
            database to display tiles in my post component and will get a specific post by id (not completed but coming
            soon!). </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 400.00px;"><img
                alt="" src="images/image1.png"
                style="width: 624.00px; height: 400.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here we can see the post component that uses the apiService that interacts with the
            api and database. In the useEffect it gets all of the posts from the database when the page is rendered and
            then those posts are mapped through starting on line 22 and the data is used to build tiles that the user
            can click on to view a post. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 333.33px;"><img
                alt="" src="images/image5.png"
                style="width: 624.00px; height: 333.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here is an example of a tile that is built using data that comes from the database.
        </span></p>
    <p class="c1 c2"><span class="c0"></span></p>
    <p class="c1 c2"><span class="c0"></span></p>
</body>

</html>`}