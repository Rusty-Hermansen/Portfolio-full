export const terraform = {
    id: 6,
    img: "https://logodix.com/logo/1686026.png",
    alt: "terraform",
    title: 'Terraform',
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
    <p class="c0"><span class="c1">Infrastructure-as-code is todays modern, declarative way to set up cloud
            infrastructure. It gives us an easy, repeatable way to set that infrastructure up and is designed to be
            readable. Todays adventure is learning a bit about an infrastructure-as-code tool called Terraform and using
            it to set up some infrastructure in AWS. Terraform uses its own declarative language called HCL, or
            Hashicorp Configuration Language. This adventure will consist of a single file, called main.tf. It is
            possible to store all of your variables in another file with a *.tfvars file type, I have so few variables
            that I opted not to use another file. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 390.00px; height: 426.00px;"><img
                alt="" src="images/image6.png"
                style="width: 390.00px; height: 426.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">Here are my variables, where I declare my region, network address space for the VPC,
            and two subnet address spaces to be used with two different EC2 instances and a load balancer. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 321.33px;"><img
                alt="" src="images/image9.png"
                style="width: 624.00px; height: 321.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">This is where I indicate the cloud provider that I&rsquo;m using, which is AWS. You
            can also use Google Cloud, Microsoft Azure, or smaller providers like Linode. I&rsquo;m also getting a list
            of all available AWS availability zones as well as dynamically getting the most current AMI for the Amazon
            Linux 2 operating system for each of my EC2 virtual machines. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 437.00px; height: 253.00px;"><img
                alt="" src="images/image1.png"
                style="width: 437.00px; height: 253.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">Here I&rsquo;m setting up my VPC or Virtual Private cloud, mainly for connectivity
            and security. I also have my aws internet gateway that allows the VPC to be reachable from the internet to
            make our EC2 instances reachable from the internet. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 345.33px;"><img
                alt="" src="images/image15.png"
                style="width: 624.00px; height: 345.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">Since I&rsquo;ll be setting up two different EC2 instances, I need two subnets, each
            in a different availability zone to help make whatever I&rsquo;m hosting be redundant, and more highly
            available than if I only used one availability zone. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 566.00px; height: 478.00px;"><img
                alt="" src="images/image3.png"
                style="width: 566.00px; height: 478.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">The route table directs traffic from subnets to wherever we want it to go, which is
            eventually my EC2 virtual machine. The route table associates associate our subnets to our route table.
        </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 474.00px; height: 283.00px;"><img
                alt="" src="images/image7.png"
                style="width: 474.00px; height: 283.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">This is where we set up an elastic load balancer security group. This security group
            is associated with a vpc and tells us which ports traffic will be accepted from. In our case, port 80, via
            http. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 326.67px;"><img
                alt="" src="images/image8.png"
                style="width: 624.00px; height: 326.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">Here is another security group that is associated that will allow me to get into my
            VM&rsquo;s using port 22 to ssh into it, or access it via http on port 80. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 640.00px;"><img
                alt="" src="images/image14.png"
                style="width: 624.00px; height: 640.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">This is where our actual EC2 virtual machines are defined, they are the smallest
            possible EC2 instance offered by AWS and are accessible via the Session Manager IAM profile. The elastic
            load balancer is then declared, given the appropriate subnets, security group, and EC2 instance ids) and set
            to listen on port 80 and can then route traffic to either EC2 instance. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 432.00px; height: 112.00px;"><img
                alt="" src="images/image13.png"
                style="width: 432.00px; height: 112.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">This is our output, as soon as all of the infrastructure is stood up, this output
            will give us the URL of our ELB to access our two EC2 virtual machines via the load balancer. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 260.00px;"><img
                alt="" src="images/image10.png"
                style="width: 624.00px; height: 260.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">Now that all of the terraform code is done, the &lsquo;terraform init&rsquo; command
            needs to be run and get everything initialized. </span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 480.00px;"><img
                alt="" src="images/image5.png"
                style="width: 624.00px; height: 480.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">Then a terraform plan can be called to double-check how the infrastructure is being
            set up. If everything looks good, a &lsquo;terraform apply&rsquo; command can be called and the
            infrastructure that lives in main.tf can be stood up. Whenever you want it all come down, you can run
            terraform destroy and every piece of infrastructure in your main.tf will be taken down. My infrastructure is
            still up and I can find it in my AWS console. </span></p>
    <p class="c0 c3"><span class="c1"></span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 173.33px;"><img
                alt="" src="images/image4.png"
                style="width: 624.00px; height: 173.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span>Here we can see that it made our two EC2 instances<br></span><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 13.33px;"><img
                alt="" src="images/image11.png"
                style="width: 624.00px; height: 13.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c1"><br>Now the vpc</span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 13.33px;"><img
                alt="" src="images/image12.png"
                style="width: 624.00px; height: 13.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c1"><br>The route table with two associated subnets</span></p>
    <p class="c0"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 10.67px;"><img
                alt="" src="images/image2.png"
                style="width: 624.00px; height: 10.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c1">...and the elastic load balancer. </span></p>
    <p class="c0 c3"><span class="c1"></span></p>
    <p class="c0 c3"><span class="c1"></span></p>
</body>

</html>`}