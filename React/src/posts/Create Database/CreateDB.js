export const createDB = {
    id:11,
    img: "https://cdn-icons-png.flaticon.com/512/20/20093.png",
    alt: "postgres", 
    title: 'Creating and Inserting Into a Database',
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
    <p class="c1"><span class="c0">These days, it is more than likely that just about every web site that you use has
            some form of database interaction. In this post, I&rsquo;m creating a postgres database in a docker
            container and creating tables inside of it. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 745.33px;"><img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image8.png?raw=true"
                style="width: 624.00px; height: 745.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">In this post, I use docker-compose in order to stand up my database as well as my
            react frontend and a nodejs api that will interact with this database. It uses the latest postgres image in
            the container docker compose spins up and I can tell it what postgres user and postgres password that I want
            to use.</span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 469.00px; height: 722.00px;"><img
                alt="" src="images/image1.png"
                style="width: 469.00px; height: 722.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here I create my schema on line 3 and start making the most basic tables. If you want
            to see an ERD of this database, please refer to my database design post. The post table here has an
            additional field because I forgot to add the post image field to that table. You may notice each id is a
            serial primary key, ids being a primary key is normal, but serial allows you to omit inserting an id and
            automatically assign sequential id numbers upon each insertion into the table. I can touch on this later
            when I start showing data insertions.</span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 623.00px; height: 552.00px;"><img
                alt="" src="images/image3.png"
                style="width: 623.00px; height: 552.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">This is where the tables get more complicated. Each of these tables are association
            tables, with the most complicated one being the post position table that has a bunch of foreign keys in
            order to maintain the correct ordering of portfolio post content. It also involves a special constraint that
            allows either the post_text_id or the post_image_id to be null, so each post position must have either text
            or an image. I&rsquo;m not using the post_catagory or the post_tag tables yet but will be used in the
            future. After creating all of these tables, now I&rsquo;m ready to start inserting data. For the insertions
            I&rsquo;ll only include an example of one insertion for each table, as I don&rsquo;t see the point of
            showing 25 insertions into a single table. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 44.00px;"><img
                alt="" src="images/image5.png"
                style="width: 624.00px; height: 44.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here is a simple insertion into the post table. Notice this insertion doesn&rsquo;t
            have an id on line 68, this is because the id is serialized as I mentioned before. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 88.00px;"><img
                alt="" src="images/image7.png"
                style="width: 624.00px; height: 88.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here is an insertion in the text table that only has text content, that you&rsquo;ll
            see is just a simple string. Images and text content are currently stored as strings inside of html tags.
            This part of my project is incomplete and I&rsquo;m uncertain as to how I want to handle data that is being
            obtained from my database. </span></p>
    <p class="c1 c3"><span class="c0"></span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 68.00px;"><img
                alt="" src="images/image4.png"
                style="width: 624.00px; height: 68.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here is my image insertion, this table will also probably change just like the text
            table. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 42.67px;"><img
                alt="" src="images/image6.png"
                style="width: 624.00px; height: 42.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here are my position table insertions. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 77.33px;"><img
                alt="" src="images/image2.png"
                style="width: 624.00px; height: 77.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">And last but not least, my post position table insertions. This one is hard to read
            but this is how the text, image, post position, and post ids are used in order to form a full portfolio
            post. </span></p>
    <p class="c1 c3"><span class="c0"></span></p>
    <p class="c1 c3"><span class="c0"></span></p>
</body>

</html>`}