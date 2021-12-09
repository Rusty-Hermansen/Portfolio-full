export const reactvalidation = {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    alt: "react",
    title: 'React Input Field Validation',
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
    <p class="c1"><span class="c0">Being relatively new to the world of React.js and Javascript as well as an avid
            browser of the internet, I thought I&rsquo;d take a stab at making some good, basic form validation in React
            using useReducer, useEffect, and useContext. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 154.91px; height: 511.50px;"><img
                alt="" src="images/image9.png"
                style="width: 154.91px; height: 511.50px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here is my basic file tree, as you can probably tell, it&rsquo;s pretty bare bones
            and will only focus on form validation. This application is similar to another one that I built in the past,
            but implements functionality in a much different way and includes no styling. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 560.00px; height: 485.00px;"><img
                alt="" src="images/image4.png"
                style="width: 560.00px; height: 485.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">This is the context that I&rsquo;m going to be using to keep track of the cars this
            application will interact with. We create our context that has a list of cars and an empty onAddCar method,
            this is done mostly to aid intellisense in vs:code as I write code later on. I also made a
            CarContextProvider, this context provider will make the addCarHandler accessible for when I need to submit
            my form and will allow me to add cars to my car list. The provider in the return statement helps us to use
            this in code, I&rsquo;ll touch on how the provider is used once you reach the form page. Using context in
            this manner helps us so that we don&rsquo;t have to pass state down through a bunch of different components
            and can make things much less messy and complicated since state isn&rsquo;t being passed through props. This
            application is simple enough that it doesn&rsquo;t need to use context but I thought it good practice
            anyways. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 590.00px; height: 371.00px;"><img
                alt="" src="images/image5.png"
                style="width: 590.00px; height: 371.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">The app file helps us to know how this application is constructed, here we can also
            see how the context provider is used. The provider component allows any of its children access to the state
            and functions that live inside of the context. So the TilePage component and NewCarForm component can access
            the contexts state and functions. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 440.00px; height: 281.00px;"><img
                alt="" src="images/image1.png"
                style="width: 440.00px; height: 281.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">These are the fields that I will be interested in in the forms, and this component
            will be used inside of the TilePage component as seen in the next image. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 201.33px;"><img
                alt="" src="images/image10.png"
                style="width: 624.00px; height: 201.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Now that we&rsquo;re on the TilePage component, context is used in order to get my
            list of cars and map through them, showing all of the details about each car. </span></p>
    <p class="c1 c3"><span class="c0"></span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 326.67px;"><img
                alt="" src="images/image6.png"
                style="width: 624.00px; height: 326.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">The form page that I made is somewhat lengthy so I have to break it up into a number
            of digestible pieces. I also get the opportunity to use useContext, useReducer, useEffect, as well as
            useState again. This is where I indicate the types of actions that I will use when I dispatch using my
            reducer as well as indicate the initial state of the form. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 334.67px;"><img
                alt="" src="images/image13.png"
                style="width: 624.00px; height: 334.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">This is my form reducer that will dispatch actions based upon the action type. This
            includes submission with some validation, so in the yearValid portion, we can see a valid value for the year
            is from the year 1900 and newer. This will also return the form back to its initial state once it is
            submitted. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 338.67px;"><img
                alt="" src="images/image3.png"
                style="width: 624.00px; height: 338.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Inside of the NewCarForm function the event is passed in and we can see the context
            will be used, the reducer, state for a valid form, and if each field has been touched. We can see how the
            reducer handles if each field has a valid input value and how I use them along with my touched states to
            handle if the form is initially invalid to show styling and a message that indicates invalid input. </span>
    </p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 486.67px;"><img
                alt="" src="images/image14.png"
                style="width: 624.00px; height: 486.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here in the useEffect is used in order to determine if the form as a whole is valid.
            This is done by setting the formValid state variable to true if all of the fields have valid inputs. This
            useEffect will cause the page to re-render any time a change is detected with isXxxxValid reducer states.
        </span></p>
    <p class="c1"><span class="c0">Each of the handlers dispatch the appropriate action for each field and the input is
            validated in the formReduce function. The blur handlers help make the initial form state to look pretty with
            no warning colors or messages, once one of them is clicked on, styling and a message will display if the
            input is invalid. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 338.67px;"><img
                alt="" src="images/image11.png"
                style="width: 624.00px; height: 338.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">The submitHandler will use the available context method to add a car to the car list
            the lives in context, so long as the form is valid. It will then dispatch the action that resets the form
            and all of the touched state variables are reset to false. I also made inputClasses at the bottom of this
            clip that will style the form according to the if the given field is invalid or not. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 354.67px;"><img
                alt="" src="images/image12.png"
                style="width: 624.00px; height: 354.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1 c3"><span class="c0"></span></p>
    <p class="c1"><span class="c0">This is where the visible form is made that a user can interact with. We can see the
            submitHandler is applied to the form and we have each input with an appropriate label. Each input has the
            appropriate change and blur handlers in order to give us the validation that we want. Each field also has a
            message that is conditionally rendered based upon field validity, as can be seen on lines 117, 122, 127, and
            132. The button will also be disabled if the form is invalid, not allowing the user to submit an invalid
            form. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 305.00px; height: 147.00px;"><img
                alt="" src="images/image8.png"
                style="width: 305.00px; height: 147.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c0">&nbsp;</span></p>
    <p class="c1"><span class="c0">This is the initial form state. It&rsquo;s not the prettiest thing in the world, but
            it shows everything is valid and not screaming at you. Notice while all of the fields appear valid the
            submit button is disabled. </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
            translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 368.00px; height: 307.00px;"><img
                alt="" src="images/image7.png"
                style="width: 368.00px; height: 307.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Here I have an example of different variations of validity in my fields. The year
            field has only been clicked on, and we&rsquo;re shown that that field is invalid, the same goes for the
            model state. The make state has a valid string in it, so it&rsquo;s happy and not showing us a message or
            anything else. The price field is indicating an invalid value, since cars generally don&rsquo;t have a
            negative value. The submit button is also still disabled because all of our fields are not satisfied.
        </span></p>
    <p class="c1"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad)
             translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 342.00px; height: 285.00px;"><img
                alt="" src="images/image2.png"
                style="width: 342.00px; height: 285.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c1"><span class="c0">Now we finally have an example of a happy form! Each field has a valid value in it
            and our submit button is finally not disabled, allowing us to submit a car. Awesome!</span></p>
    <div>
        <p class="c1 c3"><span class="c0"></span></p>
    </div>
</body>

</html>`}