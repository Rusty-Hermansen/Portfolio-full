export const reactRouting = {
    id:10,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    alt: "react", 
    title: 'React Routing',
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
    <p class="c0"><span class="c2">In this.In this post I&rsquo;ll be covering how you make a React application appear
            as though there are multiple pages using react-router-dom. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 484.00px; height: 364.00px;"><img
                alt="" src="images/image2.png"
                style="width: 484.00px; height: 364.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">In this post I&rsquo;ll first start in index.js where the groundwork is laid to make
            page routing work in a react application. I first started by importing BrowserRouter from react-router-dom
            and wrapped &lt;App/&gt; with the &lt;BrowserRouter&gt; tags to enable routing in the application.</span>
    </p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 596.00px; height: 635.00px;"><img
                alt="" src="images/image1.png"
                style="width: 596.00px; height: 635.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">Moving on to App.js, I imported Switch and Route from react-router-dom &nbsp;on line
            3 in order to create routes and the component that is tied to each route, as well as the related path. I
            used the Switch component that starts on line 18 and wraps the route components on lines 19-22. Each route
            component allows me to create the routes that I want, determine which route loads which component, and also
            includes the associated path you desire that route to live in. I also implemented lazy loading in order to
            decrease page load times. In order to implement lazy loading all that really needs to happen is importing
            react from react and then importing only when the component is used like on lines 19-22. When a react
            application is loaded without lazy loading, every component in the application is loaded instead of only
            what is needed. Lazy loading only loads those imported components when they&rsquo;re used. In my application
            it doesn&rsquo;t really make a difference, but it would in a larger application.</span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 349.33px;"><img
                alt="" src="images/image3.png"
                style="width: 624.00px; height: 349.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">Inside of my navbar component I have navlinks that allow users to navigate to the
            desired &lsquo;page&rsquo;. Each navlink can have its own styling, including active styling that is
            determined in activeClassName attribute that highlights the currently selected navlink.You can also tell
            which route that you want each navlink to take you in the &lsquo;to&rsquo; attribute of the navlink
            component. The navbar also uses the react-social-icons npm package that will display social media icons that
            I used to link to my social media accounts. All it takes is the import on line 2 and using the component
            like I did on lines 30 and 31. You can tell the SocialIcon component what url you want to use and how you
            want it styled. My favorite part about using react-social-icons is that it automatically determines which
            icon to use based upon the url that you use in the url attribute. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 392.00px;"><img
                alt="" src="images/image5.png"
                style="width: 624.00px; height: 392.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">Here in my post component, I create tiles for each post that I have created and link
            to the individual post using the index as I map through each post. The links that are created have a path
            they navigate to, a key, and state that can be passed down into the component being loaded. The index here
            will be utilized in the SinglePost component via useParams to determine which post to load.</span></p>
    <p class="c0 c1"><span class="c2"></span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 342.67px;"><img
                alt="" src="images/image4.png"
                style="width: 624.00px; height: 342.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">In this SinglePost component, I use useParams to pass down the index and I use that
            index to load the correct post from my locally stored posts array on lines 9 and 11. Here you have it, the
            complete picture of how the routing works in this very portfolio that you view at this moment. </span></p>
</body>

</html>`}