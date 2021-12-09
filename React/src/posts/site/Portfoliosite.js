export const site = {
    id: 9,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    alt: "react",
    title: 'Portfolio site',
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
    <p class="c0"><span class="c2">In our modern tech world, it seems that many software engineers have their own
            portfolio. In this post I will show you my first stab at making my own portfolio and how it didn&rsquo;t go
            quite as smoothly as I wanted. I started with grand plans of using a node api that interacts with a database
            but I found myself too short on time to be able to do that just yet. Here is the start of what is my
            software engineering portfolio. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 364.00px; height: 636.00px;"><img
                alt="" src="images/image2.png"
                style="width: 364.00px; height: 636.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">Here is my basic file structure with a handful of the necessary components for making
            a portfolio. There is also a posts folder that stores my current posts statically as well as some background
            images that I have used to dress up my portfolio page. I also have a copy of my most current resume that any
            potential employers can look over. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 595.00px; height: 480.00px;"><img
                alt="" src="images/image11.png"
                style="width: 595.00px; height: 480.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">I&rsquo;ll start by showing you my app file. I use react-router in order to do the
            routing that I need to make my portfolio site a little easier to navigate. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 262.67px;"><img
                alt="" src="images/image9.png"
                style="width: 624.00px; height: 262.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">Here is the code for my simple home component, this is a pretty simple component that
            utilizes a black and white photo of a laptop as the background. Upon making this page initially I found that
            my text was hard to read because it blended in with the white in the picture. To help make it more readable
            I added a black opaque tint. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 313.33px;"><img
                alt="" src="images/image4.png"
                style="width: 624.00px; height: 313.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0 c1"><span class="c2"></span></p>
    <p class="c0"><span class="c2">Here you can see the rendered home component in all of its glory. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 400.00px;"><img
                alt="" src="images/image6.png"
                style="width: 624.00px; height: 400.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">Here is the code for my about component. I wanted to keep this component simple so I
            thought I&rsquo;d display the pdf version of my resume here. I used an npm package called react-pdf that
            allows me to render my resume on this page. The react-pdf package was very easy to use and is supposed to
            have support for clickable links on pdfs but I couldn&rsquo;t seem to get it working. Thankfully I have
            links in the navbar that take you to the same place.I also added the same black opaque tint to this page as
            I did to the home page to tone down dome of the intensity of the picture. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 314.67px;"><img
                alt="" src="images/image3.png"
                style="width: 624.00px; height: 314.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0 c1"><span class="c2"></span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 310.67px;"><img
                alt="" src="images/image8.png"
                style="width: 624.00px; height: 310.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">Here is the code for the navbar, I used the React social icons package to get the
            social media icons and navlinks are utilized for routing. <br></span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 349.33px;"><img
                alt="" src="images/image1.png"
                style="width: 624.00px; height: 349.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">This is the code for the page that lists all of my portfolio posts. It currently maps
            through a static list. I didn&rsquo;t quite get to finish styling this page so it&rsquo;s still a little
            plain jane but it&rsquo;s a good start. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 313.33px;"><img
                alt="" src="images/image10.png"
                style="width: 624.00px; height: 313.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2">Here is what the posts page currently looks like. They all use the same image
            currently but that will easily be fixed in the future. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 440.00px; height: 369.00px;"><img
                alt="" src="images/image7.png"
                style="width: 440.00px; height: 369.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c2"><br>Here&rsquo;s the code for the single post page. This page is also
            supposed to use react-router and have state passed to it in order to render this SinglePost component. I ran
            into the strange issue below that has me currently stumped and onlookers won&rsquo;t be able to see my posts
            just yet.</span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 286.67px;"><img
                alt="" src="images/image5.png"
                style="width: 624.00px; height: 286.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0 c1"><span class="c2"></span></p>
    <p class="c0 c1"><span class="c2"></span></p>
</body>

</html>`}