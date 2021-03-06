
DROP SCHEMA IF EXISTS portfolio_post;
CREATE SCHEMA IF NOT EXISTS portfolio_post;

CREATE TABLE IF NOT EXISTS portfolio_post.post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(80) NOT NULL,
    post_img text,
    post_date TIMESTAMP NOT NULL,
    post_content TEXT
);

CREATE TABLE IF NOT EXISTS portfolio_post.session(
        ID SERIAL PRIMARY KEY,
        session_id VARCHAR(120),
        user_id INT NOT NULL,
        session_expiration TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS portfolio_post.user(
        ID SERIAL PRIMARY KEY,
        email VARCHAR(200),
        fullName VARCHAR(200),
        joke VARCHAR(500),
        iceCream VARCHAR(100),
        age INT,
        nickName VARCHAR(100)
);


CREATE TABLE IF NOT EXISTS portfolio_post.comment(
        id SERIAL PRIMARY KEY, 
        comment TEXT
);

CREATE TABLE IF NOT EXISTS portfolio_post.user_comment(
        id SERIAL PRIMARY KEY, 
        user_id INT,
        comment_id INT,
        FOREIGN KEY(user_id) REFERENCES portfolio_post.user(id),
        FOREIGN KEY(comment_id) REFERENCES portfolio_post.comment(id)
);


-- CREATE TABLE IF NOT EXISTS portfolio_post.category(
--     id SERIAL PRIMARY KEY,
--     category VARCHAR(40)
-- );

-- CREATE TABLE IF NOT EXISTS portfolio_post.tag(
--     id SERIAL PRIMARY KEY, 
--     tag VARCHAR(40)
-- );

-- CREATE TABLE IF NOT EXISTS portfolio_post.post_category(
--     id SERIAL PRIMARY KEY, 
--     post_id INT,
--     category_id INT,
--     FOREIGN KEY (post_id) REFERENCES portfolio_post.post(id),
--     FOREIGN KEY (category_id) REFERENCES portfolio_post.category(id)
-- );

-- CREATE TABLE IF NOT EXISTS portfolio_post.post_tag(
--     id SERIAL PRIMARY KEY,
--     post_id INT, 
--     tag_id INT,
--     FOREIGN KEY (post_id) REFERENCES portfolio_post.post(id),
--     FOREIGN KEY (tag_id) REFERENCES portfolio_post.tag(id)
-- );



insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Kubernetes','https://developers.hp.com/sites/default/files/kubernetes-logo_0.jpg', '2021-11-21 10:23:54',
'Progressing toward earning my Bachelors degree and being immersed in the world of
tech, I have learned and heard about all sorts of different technologies. One of those technologies that has
caught my attention is kubernetes, or as it is commonly known, k8s. Working as a DevOps engineer intern for
Pluralsight, I had an opportunity to learn about k8s and even use it to some degree. I wanted to learn more
about it and here you can join my journey in learning kubernetes.


![4](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image4.png?raw=true)
 

To start our journey into kubernetes, we&rsquo;ll use an image that I previously
pushed up to docker hub, my car-app image.


![2](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image2.png?raw=true)


This is the simple kubernetes manifest that I made. I indicated that this is a stable
release of a pod, gave it a name and a label in the metadata portion, indicated what image I want to put in
each pod and what the pod names should be. Line 13 indicates that I want to be able to access the pod on
port 3000.


![12](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image12.png?raw=true)


It was then time to test my manifest, so I installed and started minikube and applied
my manifest. I found that instead of just running kubectl get pods over and over again, if you run it with
the --watch flag, it will show the pod status that updates periodically.


![5](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image5.png?raw=true)


I also wanted to make some services, this NodePort service indicates a port that is
open on every node in my kubernetes cluster. It also indicates the port the service listens on in the
cluster, the port the app in the container is listening on (this needs to match the manifest), the actual
indicated nodeport, and the label selector that must match the label in the manifest file.


![9](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image9.png?raw=true)


Here I applied my nodeport service and looked at the details of my service.


![6](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image6.png?raw=true)


I also wanted to be able to have multiple pods that a load balancer can direct
traffic to, so I opted to make a simple load balancer. I just indicated all of the normal metadata, stated I
want a load balancer, had it listen internally on port 80 and targetport that the service sends requests to
that the pods listen on.


![3](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image3.png?raw=true)


Here we can see the LoadBalancer up and running.


![7](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image7.png?raw=true)


Since I had all of the services that I wanted in place, it was time to exercise what
kubernetes is capable of in my deployment manifest.


![10](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image10.png?raw=true)


Here I&rsquo;m applying my deployment manifest, as you can see here, the three pods
are created successfully.


![11](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image11.png?raw=true)


Here I decided to test the self healing capabilities of kubernetes. In the context of
servers being cattle not pets, I decided to kill one. Kubernetes automatically made a new pod to replace the
old one. 


![1](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image1.png?raw=true)


I also wanted to be able to access whatever lives in my pods, in my case, my simple
react app that allows you to post a car that you want to sell. Since I used minikube as my kubernetes
playground, I created a service to access the load balancer so I could hit the react app in my pods.


![8](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image8.png?raw=true)


Here is the running app that lives in each pod of my cluster.');


insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Consuming an API with Dotnet, Blazor, and Refit','https://www.ynvtechnologies.com/img/solutions/dotnet.png', '2021-11-21 10:23:54', 
'Consuming an API has never been easier in dotnet than when you use Refit and a Blazor front end.
In this post, I&rsquo;ll show you how simple it can be. In this article I&rsquo;ll be using an API that I
wrote but the process still applies for any API you want to consume. To begin, you&rsquo;ll need to start a
new Blazor WebAssembly Application.


![8](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consume%20an%20api%20with%20dotnet/images/image8.png?raw=true)
          
          
You can give it an appropriate name for the project and solution and create it
with the default configuration. Once the project is created you&rsquo;ll start by adding the Refit nuget
package.

![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consume%20an%20api%20with%20dotnet/images/image4.png?raw=true)
           
           
You&rsquo;ll right-click on your project, select Manage Nuget Packages, select the browse button
at the top and search for Refit and download the Refit and Refit.HttpClientFactory nuget
packages.


![9](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consume%20an%20api%20with%20dotnet/images/image9.png?raw=true)
            
            
Once you have the Refit nuget packages downloaded you can create a Models folder
in your project and add a new file for your model. I&rsquo;m working with cars, so naturally, my model file
is CarModel.cs.


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consume%20an%20api%20with%20dotnet/images/image5.png?raw=true)
            
            
Inside of the model file we&rsquo;ll find all of the attributes about a car that I
want to store, like the year, make, model, engine, and transmission information as well as an associated id
for each car that I interact with.


![6](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consume%20an%20api%20with%20dotnet/images/image6.png?raw=true)
    
    
Now that the model file is all set up and ready to go, you can create a
DataAccess folder and make an interface that will set up methods for CRUD operations. &nbsp;My interface
will be called ICarData.cs. You&rsquo;ll also need to make sure that you&rsquo;re using Refit in your
interface file. Each of the CRUD methods in your interface will have the HTTP method, as well as the route
you&rsquo;ll use for that operation.


![7](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consume%20an%20api%20with%20dotnet/images/image7.png?raw=true)
         
         
After the interface is all set up you just need to navigate to Program.cs comment out the
builder.Services.AddScoped line and add the new one as seen here.The newly added line uses the interface
that was made and also takes in the address of the API that you want to interact with. Since this is my own
API running locally, I can access it via localhost. 


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consume%20an%20api%20with%20dotnet/images/image2.png?raw=true)
            
            
Now if you want something basic in our front end that you can use to get a list of all cars, you
can add this bit of code in the index.razor file found in the pages folder in order to display the list of
cars. 


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consume%20an%20api%20with%20dotnet/images/image3.png?raw=true)
            
               
Here is my running application with the list of cars and
specifications.

![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consume%20an%20api%20with%20dotnet/images/image1.png?raw=true)


');


insert into portfolio_post.post(title, post_img, post_date, post_content) 
VALUES ('Consuming an APi with React','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54',
'Creating a react app that consumes an API with a key is simple and straightforward.
In this post you&rsquo;ll see what that process looks like. Starting this application will assume you have
React and NPM installed. To begin consuming an API, let&rsquo;s make a new React app by opening up a
terminal and running the command:
 

 ```
 npx create-react-app reactApi
 ```


This will create a brand new React application that is ready to go. Once the react
app has been made, you&rsquo;ll want to install Axios by running the following command in the
terminal:


```
npm install axios
```


Once axios is installed, open up VS:Code or your favorite code editor and navigate to
the src folder.In the src folder make a new file called Api.js.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consuming%20an%20api%20with%20react/images/image3.png?raw=true)


In the Api.js file is where we get our api set up. Here we need to import axios and
get our API set up with the key, address, and any parameters. We set up an anonymous async function that
will return car formation from our api. We can see that we pass in a vin number as a parameter with the host
URL and your host API key and can then return the pieces of JSON that we want at the bottom. Note: Please
don&rsquo;t forget to export your Api component.


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consuming%20an%20api%20with%20react/images/image5.png?raw=true)
    
    
Now back in App.js we can work on using that information from the API. We can use
useState to set up a state variable that will hold our car information and use useEffect to make
asynchronous calls to the api that will only re-render when the carInfo state variable has changes. In the
return statement we can finally take our API response and display it.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consuming%20an%20api%20with%20react/images/image4.png?raw=true)
    
    
Here we also learn something fun, API&rsquo;s that have keys often require payment. I
found one that let me have a limited number of requests and have been locked out from making too many
requests. Otherwise, this code would return the vin number and year of the car requested.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consuming%20an%20api%20with%20react/images/image1.png?raw=true)


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/consuming%20an%20api%20with%20react/images/image2.png?raw=true)


');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Creating and Inserting Into a Postgres Database','https://cdn-icons-png.flaticon.com/512/20/20093.png', '2021-11-21 10:23:54', 
'These days, it is more than likely that just about every web site that you use has
some form of database interaction. In this post, I&rsquo;m creating a postgres database in a docker
container and creating tables inside of it.


![8](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image8.png?raw=true)
    
    
In this post, I use docker-compose in order to stand up my database as well as my
react frontend and a nodejs api that will interact with this database. It uses the latest postgres image in
the container docker compose spins up and I can tell it what postgres user and postgres password that I want
to use.


![1](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image1.png?raw=true)
    
    
Here I create my schema on line 3 and start making the most basic tables. If you want
to see an ERD of this database, please refer to my database design post. The post table here has an
additional field because I forgot to add the post image field to that table. You may notice each id is a
serial primary key, ids being a primary key is normal, but serial allows you to omit inserting an id and
automatically assign sequential id numbers upon each insertion into the table. I can touch on this later
when I start showing data insertions.


![3](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image3.png?raw=true)


This is where the tables get more complicated. Each of these tables are association
tables, with the most complicated one being the post position table that has a bunch of foreign keys in
order to maintain the correct ordering of portfolio post content. It also involves a special constraint that
allows either the post_text_id or the post_image_id to be null, so each post position must have either text
or an image. I&rsquo;m not using the post_catagory or the post_tag tables yet but will be used in the
future. After creating all of these tables, now I&rsquo;m ready to start inserting data. For the insertions
I&rsquo;ll only include an example of one insertion for each table, as I don&rsquo;t see the point of
showing 25 insertions into a single table.


![5](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image5.png?raw=true)


Here is a simple insertion into the post table. Notice this insertion doesn&rsquo;t
have an id on line 68, this is because the id is serialized as I mentioned before.


![7](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image7.png?raw=true)


Here is an insertion in the text table that only has text content, that you&rsquo;ll
see is just a simple string. Images and text content are currently stored as strings inside of html tags.
This part of my project is incomplete and I&rsquo;m uncertain as to how I want to handle data that is being
obtained from my database.


![4](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image4.png?raw=true)
    
    
Here is my image insertion, this table will also probably change just like the text
table.


![6](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image6.png?raw=true)


Here are my position table insertions.


![2](https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image2.png?raw=true)


And last but not least, my post position table insertions. This one is hard to read
but this is how the text, image, post position, and post ids are used in order to form a full portfolio
post.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Database Design','https://cdn-icons-png.flaticon.com/512/20/20093.png', '2021-11-21 10:23:54',
'We often have ideas for web sites that we want to build, some of which handle data in databases or elsewhere. 
In this portfolio post, I want a database that will handle all of my portfolio posts that live on my portfolio
site. Having never designed a database for anything like a portfolio site, I first started with the most basic
pieces, the text and image content. Having never dealt with a database that stored pictures, I needed to 
know how to actually get images to appear on my portfolio site. After doing some research and thinking, 
I determined I wanted to store a reference to an image. Then came the challenge of figuring out how to 
order all of my content.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/database%20design/images/image1.png?raw=true)


This ERD is the solution that I came up with to handle images as well as post positioning. Each post has text 
and image content, as well as tag and category classifications. The position table and the post_position 
association table serve to link everything together. You may also notice the post_category and post_tag 
association tables are optional.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/database%20design/images/image3.png?raw=true)


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/database%20design/images/image2.png?raw=true)


Here we can see what the sql file looks like. It was a little bit tricky to write the check for the post 
position table that enforces post_text_id or post_image_id isn''t null for a given database entry. This 
could be fleshed out some more, but it will work to get my database up and running.


You may also notice the use of serial with each of my primary keys, this serves to create a sequence of 
id''s that automatically increments when a new entry is inserted into a table.');



insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Creating and Building a Docker Image','https://logodix.com/logo/826618.png', '2021-11-21 10:23:54',
'Docker is a commonly used technology in todays world of rapid deployment of
applications. Having used docker to some degree in the past, I thought it time to refresh and supplement my
docker knowledge by starting with a react application and containerizing it.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Docker/images/image4.png?raw=true)


I started out by containerizing a simple React.js application that I built. Here we
can see a simple dockerfile based on the node:13-alpine image. Line four sets our environment variable to
where the node modules live, and then we copy the package.json and package-lock.json files into the home
directory, then npm install into the home directory. If we want to be able to access the running container,
expose, on line 13, gives us a port to do just that. Line 15 then starts the application. This is enough to
get us to where we can build an image.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Docker/images/image1.png?raw=true)
    
    
When writing your dockerfile you can also include a .dockerignore file that will
ignore certain files or directories of the application that you are trying to containerize. This will help
slim down your image size considerably. I wasn&rsquo;t terribly concerned with the size of my image in this
case, so I didn&rsquo;t use one, but here is an example of one for reference.


![8](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Docker/images/image8.png?raw=true)


Here is where I built the docker image successfully. I found there is a little nuance
at this point, the dot at the end of the docker image build command that tells docker that the dockerfile is
to be used in the current directory is easy to forget. I started with the intention of pushing my image to
dockerhub for later use, this requires that you include *your Docker Hub username*/*image name*: *image
tag*. I made the mistake initially of not using this convention and quickly discovered that I couldn&rsquo;t
push it to Docker Hub from a CLI.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Docker/images/image2.png?raw=true)
    

![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Docker/images/image5.png?raw=true)


Here we can see that I did manage to successfully push my image to dockerhub using a
CLI. Now from here we can run the image.


![6](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Docker/images/image6.png?raw=true)


Here is where I got the docker container to run. The -d flag means the container is
running in detached mode, and -p allows us to indicate the ports I want my app to run on. After indicating
the ports I indicate the image that I want to run, this includes the tag. If you try this yourself, please
note, if you run the docker run command without indicating the tag, it will only run if the image is tagged
latest. If you have any other tag but latest, you have to indicate the image tag with the image name.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Docker/images/image3.png?raw=true)


Here we can see the running docker container in docker desktop.


![7](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Docker/images/image7.png?raw=true)


...and here is the running application!');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Provisioning Infrastructure With Terraform','https://logodix.com/logo/1686026.png', '2021-11-21 10:23:54',
'Infrastructure-as-code is todays modern, declarative way to set up cloud
infrastructure. It gives us an easy, repeatable way to set that infrastructure up and is designed to be
readable. Todays adventure is learning a bit about an infrastructure-as-code tool called Terraform and using
it to set up some infrastructure in AWS. Terraform uses its own declarative language called HCL, or
Hashicorp Configuration Language. This adventure will consist of a single file, called main.tf. It is
possible to store all of your variables in another file with a *.tfvars file type, I have so few variables
that I opted not to use another file.


![6](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image6.png?raw=true)


Here are my variables, where I declare my region, network address space for the VPC,
and two subnet address spaces to be used with two different EC2 instances and a load balancer.


![9](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image9.png?raw=true)
    
    
This is where I indicate the cloud provider that I&rsquo;m using, which is AWS. You
can also use Google Cloud, Microsoft Azure, or smaller providers like Linode. I&rsquo;m also getting a list
of all available AWS availability zones as well as dynamically getting the most current AMI for the Amazon
Linux 2 operating system for each of my EC2 virtual machines.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image1.png?raw=true)
 
 
Here I&rsquo;m setting up my VPC or Virtual Private cloud, mainly for connectivity
and security. I also have my aws internet gateway that allows the VPC to be reachable from the internet to
make our EC2 instances reachable from the internet.


![15](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image15.png?raw=true)


Since I&rsquo;ll be setting up two different EC2 instances, I need two subnets, each
in a different availability zone to help make whatever I&rsquo;m hosting be redundant, and more highly
available than if I only used one availability zone.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image3.png?raw=true)


The route table directs traffic from subnets to wherever we want it to go, which is
eventually my EC2 virtual machine. The route table associates associate our subnets to our route table.


![7](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image7.png?raw=true)


This is where we set up an elastic load balancer security group. This security group
is associated with a vpc and tells us which ports traffic will be accepted from. In our case, port 80, via
http.


![8](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image8.png?raw=true)


Here is another security group that is associated that will allow me to get into my
VM&rsquo;s using port 22 to ssh into it, or access it via http on port 80.


![14](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image14.png?raw=true)


This is where our actual EC2 virtual machines are defined, they are the smallest
possible EC2 instance offered by AWS and are accessible via the Session Manager IAM profile. The elastic
load balancer is then declared, given the appropriate subnets, security group, and EC2 instance ids) and set
to listen on port 80 and can then route traffic to either EC2 instance.


![13](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image13.png?raw=true)


This is our output, as soon as all of the infrastructure is stood up, this output
will give us the URL of our ELB to access our two EC2 virtual machines via the load balancer.


![10](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image10.png?raw=true)


Now that all of the terraform code is done, the &lsquo;terraform init&rsquo; command
needs to be run and get everything initialized.


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image5.png?raw=true)


Then a terraform plan can be called to double-check how the infrastructure is being
set up. If everything looks good, a &lsquo;terraform apply&rsquo; command can be called and the
infrastructure that lives in main.tf can be stood up. Whenever you want it all come down, you can run
terraform destroy and every piece of infrastructure in your main.tf will be taken down. My infrastructure is
still up and I can find it in my AWS console.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image4.png?raw=true)


Here we can see that it made our two EC2 instances.


![11](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image11.png?raw=true)


Now the vpc.


![12](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image12.png?raw=true)


The route table with two associated subnets.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image2.png?raw=true)


...and the elastic load balancer.');


insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Creating an API with Node and Express','https://logodix.com/logo/1764835.png', '2021-11-21 10:23:54',
'Writing an API in Node and Express is simple and easy. In this post, I&rsquo;ll show
you how to create your own API with node and express. 


To start out, you&rsquo;ll create a folder in the desired directory, and make a new
file in that folder called something like &lsquo;App.js&rsquo;. It&rsquo;s easiest if you use VS:Code and
are working in the folder you just created. In VS:Code upon up a new terminal and it&rsquo;s time to install
Express by typing in the command:


```
npm install -g express
```


Another useful package to install is called nodemon, which will hot reload your Node
application whenever you save your files in VS:Code. To install nodemon you&rsquo;ll run the following
command in your terminal:


```
npm install -g nodemon
```

After you have those two packages it&rsquo;s time to create a package.json file,
which will happen automatically when you run the command:


```
npm init
```


Once the init is completed you should see a package.json file that should look something like this:


![7](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image7.png?raw=true)


You&rsquo;ll want to add line 6 in your package.json so you can use node modules. Node modules
allow you to import in the same basic manner as in React.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image3.png?raw=true)
            
            
You&rsquo;ll see the express import to use express and the users
import. This import holds a list of users for us to interact with.


![10](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image10.png?raw=true)


To continue in App.js, starting on line 5 is where we start configuring express with
middleware, &nbsp;to send responses in json and to run on port 4000 so you can access it using localhost.
        

![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image3.png?raw=true)
    

After we get all of the configuration done above we can get down to doing CRUD operations. Each
HTTP request has an endpoint that you can use to call that specific crud operation as well as an anonymous
function that takes in res and req. Req stands for request, res stands for response.


![9](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image9.png?raw=true)


On line 11 we can see a Read crud operation that reads off a greeting property with a
greeting in Json.


![8](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image8.png?raw=true)


On line 16 is where we read all users from a list/database and send them all in a json
blob.


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image5.png?raw=true)


&nbsp;Line 21 is where we can Create a new user taking their information from the passed in
request and adding it to the list of users on line 25, and sending an OK status code on line 26 to confirm
success.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image1.png?raw=true)


On line 29 is where you can find a user by id by filtering the list of users
by id. &nbsp;


![11](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image11.png?raw=true)


Line 34 is where we can update a user by id, using request
parameters and pushing the updated user to the list and sending an OK status code to confirm success.


![6](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image6.png?raw=true)


On line 41 is where we can find a user by id, and removing them according to their
index using the splice function and sending an OK status code to confirm success.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image4.png?raw=true)
Now in order to run this application you just need to run:


```
Node App.js
```


Please note that the file names are case-sensative, App.js and app.js aren&rsquo;t the same.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image2.png?raw=true)
 
 
 Here is what we see when we look at the users endpoint. &nbsp;
 
 
 ![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/node%20api/images/image2.png?raw=true)');

insert into portfolio_post.post(title,post_img, post_date,post_content) 
VALUES ('Creating A Node/Express API With Database Interaction','https://logodix.com/logo/1764835.png', '2021-11-21 10:23:54',
'When it comes to securely interacting with a database for a react app, database
interactions need to take place through an api. In this post I will go over the api that I wrote that
interacts with my database on behalf of my react frontend.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Portfolio%20API/images/image4.png?raw=true)


This is the basics of my api, using express and dotenv (for environment variables),
creating an endpoint to return a json post object from the api as well as returning all posts to display
tiles for each post.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Portfolio%20API/images/image2.png?raw=true)


Here I have the queries file that my App.js(in the backend) uses in order to ping the
database. All of the credentials are pulled in from a .env file and the most basic functionality is set up
with the proper queries to return a post.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Portfolio%20API/images/image3.png?raw=true)


This is my apiService in my frontend that interacts with the api in order to get
posts from the database. Again, it just has the most basic functionality that gets all of the posts from the
database to display tiles in my post component and will get a specific post by id (not completed but coming
soon!).


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Portfolio%20API/images/image1.png?raw=true)


Here we can see the post component that uses the apiService that interacts with the
api and database. In the useEffect it gets all of the posts from the database when the page is rendered and
then those posts are mapped through starting on line 22 and the data is used to build tiles that the user
can click on to view a post.


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Portfolio%20API/images/image5.png?raw=true)


Here is an example of a tile that is built using data that comes from the database.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Postgres Joins','https://cdn-icons-png.flaticon.com/512/20/20093.png', '2021-11-21 10:23:54',
'When I first started learning sql, I was taking a databases class using postgresql. When learning about joins, 
I had a hard time envisioning when I would use something like a left or a right join. In this post I will 
go over the three different joins and why I use them.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Postgres%20Complex%20Queries/images/image1.png?raw=true)


The object of this query is to return all of the content in a portfolio post. In order to do so, I had to 
carefully choose the type of joins that I use so all of the data could be displayed. When I first started 
writing this query, I did all inner joins and my query returned nothing. I was stumped for a bit until I 
came to the realization that, when a text has a value an image is null and when text is null and an 
image has a value. That means that an inner join can''t be used to get a complete portfolio post. All 
of the other tables can use simple inner joins because they all exist at the same time. It turned out 
using left joins on the text and image tables allowed me to get all of the content for a complete post.');



insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('React Input Validation','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54',
'Being relatively new to the world of React.js and Javascript as well as an avid
browser of the internet, I thought I&rsquo;d take a stab at making some good, basic form validation in React
using useReducer, useEffect, and useContext.


![9](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image9.png?raw=true)


Here is my basic file tree, as you can probably tell, it&rsquo;s pretty bare bones
and will only focus on form validation. This application is similar to another one that I built in the past,
but implements functionality in a much different way and includes no styling.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image4.png?raw=true)


This is the context that I&rsquo;m going to be using to keep track of the cars this
application will interact with. We create our context that has a list of cars and an empty onAddCar method,
this is done mostly to aid intellisense in vs:code as I write code later on. I also made a
CarContextProvider, this context provider will make the addCarHandler accessible for when I need to submit
my form and will allow me to add cars to my car list. The provider in the return statement helps us to use
this in code, I&rsquo;ll touch on how the provider is used once you reach the form page. Using context in
this manner helps us so that we don&rsquo;t have to pass state down through a bunch of different components
and can make things much less messy and complicated since state isn&rsquo;t being passed through props. This
application is simple enough that it doesn&rsquo;t need to use context but I thought it good practice
anyways.


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image5.png?raw=true)


The app file helps us to know how this application is constructed, here we can also
see how the context provider is used. The provider component allows any of its children access to the state
and functions that live inside of the context. So the TilePage component and NewCarForm component can access
the contexts state and functions.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image1.png?raw=true)


These are the fields that I will be interested in in the forms, and this component
will be used inside of the TilePage component as seen in the next image.


![10](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image10.png?raw=true)


Now that we&rsquo;re on the TilePage component, context is used in order to get my
list of cars and map through them, showing all of the details about each car.


![6](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image6.png?raw=true)


The form page that I made is somewhat lengthy so I have to break it up into a number
of digestible pieces. I also get the opportunity to use useContext, useReducer, useEffect, as well as
useState again. This is where I indicate the types of actions that I will use when I dispatch using my
reducer as well as indicate the initial state of the form.


![13](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image13.png?raw=true)


This is my form reducer that will dispatch actions based upon the action type. This
includes submission with some validation, so in the yearValid portion, we can see a valid value for the year
is from the year 1900 and newer. This will also return the form back to its initial state once it is
submitted.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image3.png?raw=true)


Inside of the NewCarForm function the event is passed in and we can see the context
will be used, the reducer, state for a valid form, and if each field has been touched. We can see how the
reducer handles if each field has a valid input value and how I use them along with my touched states to
handle if the form is initially invalid to show styling and a message that indicates invalid input.


![14](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image14.png?raw=true)


Here in the useEffect is used in order to determine if the form as a whole is valid.
This is done by setting the formValid state variable to true if all of the fields have valid inputs. This
useEffect will cause the page to re-render any time a change is detected with isXxxxValid reducer states.


Each of the handlers dispatch the appropriate action for each field and the input is
validated in the formReduce function. The blur handlers help make the initial form state to look pretty with
no warning colors or messages, once one of them is clicked on, styling and a message will display if the
input is invalid.


![11](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image11.png?raw=true)
   

The submitHandler will use the available context method to add a car to the car list
the lives in context, so long as the form is valid. It will then dispatch the action that resets the form
and all of the touched state variables are reset to false. I also made inputClasses at the bottom of this
clip that will style the form according to the if the given field is invalid or not.


![12](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image12.png?raw=true)


This is where the visible form is made that a user can interact with. We can see the
submitHandler is applied to the form and we have each input with an appropriate label. Each input has the
appropriate change and blur handlers in order to give us the validation that we want. Each field also has a
message that is conditionally rendered based upon field validity, as can be seen on lines 117, 122, 127, and
132. The button will also be disabled if the form is invalid, not allowing the user to submit an invalid
form.


![8](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image8.png?raw=true)


This is the initial form state. It&rsquo;s not the prettiest thing in the world, but
it shows everything is valid and not screaming at you. Notice while all of the fields appear valid the
submit button is disabled.


![7](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image7.png?raw=true)


Here I have an example of different variations of validity in my fields. The year
field has only been clicked on, and we&rsquo;re shown that that field is invalid, the same goes for the
model state. The make state has a valid string in it, so it&rsquo;s happy and not showing us a message or
anything else. The price field is indicating an invalid value, since cars generally don&rsquo;t have a
negative value. The submit button is also still disabled because all of our fields are not satisfied.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image2.png?raw=true)


Now we finally have an example of a happy form! Each field has a valid value in it
and our submit button is finally not disabled, allowing us to submit a car. Awesome!');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('React Routing','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54',
'In this.In this post I&rsquo;ll be covering how you make a React application appear
as though there are multiple pages using react-router-dom.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image2.png?raw=true)


In this post I&rsquo;ll first start in index.js where the groundwork is laid to make
page routing work in a react application. I first started by importing BrowserRouter from react-router-dom
and wrapped &lt;App/&gt; with the &lt;BrowserRouter&gt; tags to enable routing in the application.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image1.png?raw=true)


Moving on to App.js, I imported Switch and Route from react-router-dom &nbsp;on line
3 in order to create routes and the component that is tied to each route, as well as the related path. I
used the Switch component that starts on line 18 and wraps the route components on lines 19-22. Each route
component allows me to create the routes that I want, determine which route loads which component, and also
includes the associated path you desire that route to live in. I also implemented lazy loading in order to
decrease page load times. In order to implement lazy loading all that really needs to happen is importing
react from react and then importing only when the component is used like on lines 19-22. When a react
application is loaded without lazy loading, every component in the application is loaded instead of only
what is needed. Lazy loading only loads those imported components when they&rsquo;re used. In my application
it doesn&rsquo;t really make a difference, but it would in a larger application.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image3.png?raw=true)


Inside of my navbar component I have navlinks that allow users to navigate to the
desired &lsquo;page&rsquo;. Each navlink can have its own styling, including active styling that is
determined in activeClassName attribute that highlights the currently selected navlink.You can also tell
which route that you want each navlink to take you in the &lsquo;to&rsquo; attribute of the navlink
component. The navbar also uses the react-social-icons npm package that will display social media icons that
I used to link to my social media accounts. All it takes is the import on line 2 and using the component
like I did on lines 30 and 31. You can tell the SocialIcon component what url you want to use and how you
want it styled. My favorite part about using react-social-icons is that it automatically determines which
icon to use based upon the url that you use in the url attribute.


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image5.png?raw=true)


Here in my post component, I create tiles for each post that I have created and link
to the individual post using the index as I map through each post. The links that are created have a path
they navigate to, a key, and state that can be passed down into the component being loaded. The index here
will be utilized in the SinglePost component via useParams to determine which post to load.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image4.png?raw=true)


In this SinglePost component, I use useParams to pass down the index and I use that
index to load the correct post from my locally stored posts array on lines 9 and 11. Here you have it, the
complete picture of how the routing works in this very portfolio that you view at this moment.');



insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('My React Portfolio','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54',
'In our modern tech world, it seems that many software engineers have their own
portfolio. In this post I will show you my first stab at making my own portfolio and how it didn&rsquo;t go
quite as smoothly as I wanted. I started with grand plans of using a node api that interacts with a database
but I found myself too short on time to be able to do that just yet. Here is the start of what is my
software engineering portfolio.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image2.png?raw=true)


Here is my basic file structure with a handful of the necessary components for making
a portfolio. There is also a posts folder that stores my current posts statically as well as some background
images that I have used to dress up my portfolio page. I also have a copy of my most current resume that any
potential employers can look over.


![11](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image11.png?raw=true)


I&rsquo;ll start by showing you my app file. I use react-router in order to do the
routing that I need to make my portfolio site a little easier to navigate.


![9](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image9.png?raw=true)


Here is the code for my simple home component, this is a pretty simple component that
utilizes a black and white photo of a laptop as the background. Upon making this page initially I found that
my text was hard to read because it blended in with the white in the picture. To help make it more readable
I added a black opaque tint.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image4.png?raw=true)


Here you can see the rendered home component in all of its glory.


![6](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image6.png?raw=true)


Here is the code for my about component. I wanted to keep this component simple so I
thought I&rsquo;d display the pdf version of my resume here. I used an npm package called react-pdf that
allows me to render my resume on this page. The react-pdf package was very easy to use and is supposed to
have support for clickable links on pdfs but I couldn&rsquo;t seem to get it working. Thankfully I have
links in the navbar that take you to the same place.I also added the same black opaque tint to this page as
I did to the home page to tone down dome of the intensity of the picture.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image3.png?raw=true)


![8](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image8.png?raw=true)


Here is the code for the navbar, I used the React social icons package to get the
social media icons and navlinks are utilized for routing.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image1.png?raw=true)


This is the code for the page that lists all of my portfolio posts. It currently maps
through a static list. I didn&rsquo;t quite get to finish styling this page so it&rsquo;s still a little
plain jane but it&rsquo;s a good start.


![10](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image10.png?raw=true)


Here is what the posts page currently looks like. They all use the same image
currently but that will easily be fixed in the future.


![7](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image7.png?raw=true)


 Here&rsquo;s the code for the single post page. This page is also
supposed to use react-router and have state passed to it in order to render this SinglePost component. I ran
into the strange issue below that has me currently stumped and onlookers won&rsquo;t be able to see my posts
just yet.


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image5.png?raw=true)');


insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Writing an API in Dotnet','https://www.ynvtechnologies.com/img/solutions/dotnet.png', '2021-11-21 10:23:54',
'If you&rsquo;re new to writing web applications in dotnet, the thought of writing
your own API might be a bit intimidating. The purpose of this post is to show you how to write your own
simple API in dotnet to see that it&rsquo;s not so intimidating.


You&rsquo;ll first start by making a new project and selecting an ASP.Net Core Web API that will
scaffold an API for you.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image2.png?raw=true)


You can name your project and solution whatever is appropriate for your use case. My api is a
car tracker that just tracks some information about cars.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image4.png?raw=true)


Once you move onto the next page of the creation wizard, you&rsquo;ll just want to make sure you
have the default options selected. 


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image5.png?raw=true)


Now you should have your API project scaffolded. I&rsquo;ll first start by defining the kind of
information about a car that I want to keep track of. For doing that, I&rsquo;ll create a models folder in
my project and make a model file that will have all of the information that I want.


![7](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image7.png?raw=true)


Inside my model, I decided I wanted to keep track of basic car information
like the year, make, model, engine, and transmission along with an Id.


![6](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image6.png?raw=true)


Now that I have a model in place I can create a controller that will do CRUD
operations. In the controllers folder you&rsquo;ll notice a WeatherForecastController that won&rsquo;t be
used. Make a new controller in that folder by right clicking the folder, selecting add, and then controller.


![11](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image11.png?raw=true)


In this project I&rsquo;m not connecting to a database, so I have a list that I created in my
controller that stores data about two vehicles and will allow me to create cars, read all cars from the
list, update cars in the list, and delete cars from the list. Please note the attributes at the top of the
picture below and don&rsquo;t forget put them in your project. I won&rsquo;t get into the [ApiController]
attribute here because it&rsquo;s fairly complicated, but the [Route] attribute helps you be able to route
to and call the correct CRUD methods. &nbsp;


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image1.png?raw=true)


Here are all of the methods responsible for CRUD operations, all with the appropriate
request types, GET for retrieving the list and individual cars by Id, POST to add a car, PUT to update a
car, and DELETE to remove a car from the list.


![10](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image10.png?raw=true)


You may also need to add a Cross-Origin Resource Sharing (CORS) policy, I did
because I couldn&rsquo;t communicate with my API without one. You&rsquo;ll create the policy in your
ConfigureServices method of your Startup.cs file. 


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image3.png?raw=true)


You then have to specify the policy that you want to use in the Configure method of Startup.cs.


![8](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image8.png?raw=true)


You may have issues with HTTPS causing problem with hitting your API, I had issues so
I commented out UseHttpsRedirection and removed the https endpoint from the applicationUrl property in my
launchSettings.json file so it looks like this:


![12](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image12.png?raw=true)


This is all you really have to do to set up the API portion of your project. When you run your
API project you should see a Swagger page appear that will allow you to play around with your API. You can
perform all of your CRUD operations here to make sure your API has all of the functionality that it needs.


![9](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/write%20dotnet%20api/images/image9.png?raw=true)');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Changing Your Favicon and Page Title in React','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54',
'I find that when I build a React application that I always forget to switch out the
generic &lsquo;React App&rsquo; page title and favicon image. In this post, it&rsquo;s time to change that
for my portfolio web page. I&rsquo;ll start with changing the title first.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/ChangingPageFaviconReact/images/image1.png?raw=true)


In order to change the title I first went into the index.html file in the public
folder of my React app and then looked for the title tag, then it&rsquo;s as easy as changing the content
between the opening and closing title tag.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/ChangingPageFaviconReact/images/image4.png?raw=true)


Here is my new title for my portfolio web page! Now on to changing the favicon icon
that is next to the page title.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/ChangingPageFaviconReact/images/image2.png?raw=true)


In manifest.json (still in the public folder) we have name and short name attributes as well as
the favicon information. I opted only to change the name and short name attributes but you can also change
the value on line 6 in order to use a favicon with a different file name. I wanted to keep it simple, so I
left it alone. Now to finish the process of getting the favicon changed, all I did was find a stock image I
wanted to use for my icon and used [https://realfavicongenerator.net](https://www.google.com/url?q=https://realfavicongenerator.net/&amp;sa=D&amp;source=editors&amp;ust=1643588875469208&amp;usg=AOvVaw3VUuYq0wjHpLIWdSj4rTrm)
&nbsp;to generate my new favicon.ico file. Then it&rsquo;s as simple as replacing the old
favicon.ico file with the new one. 


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/ChangingPageFaviconReact/images/image3.png?raw=true)


I&rsquo;d say this is much better!');

    insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Testing in React with Jest','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54',
'When it comes to building frontend applications with Javascript frameworks like
React, writing tests and doing testing doesn&rsquo;t seem very intuitive compares to testing in a language
like C#. In this post I&rsquo;m going to cover introductory testing in React using Jest and the React
Testing Library.


In order to get started we need to install some NPM packages. The first being jest
where we can just run: 


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/ReactTesting/images/image5.png?raw=true)


The next package that needs to be installed is the React Testing Library. It is
installed using the following command:


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/ReactTesting/images/image1.png?raw=true)


We do these installations because React does the testing and the React Testing
Library handles allowing us to render components for testing purposes.


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/ReactTesting/images/image4.png?raw=true)


This demonstration is being done using my own portfolio site that I implemented a
number of simple tests in. The file system here shows my components as well as the tests folder that I
created for my tests to live in in order to keep my filesystem clean and easy to navigate. The files that
the tests are written in are made in the format of &lt;Component Name&gt;.test.js to test that specific
component.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/ReactTesting/images/image2.png?raw=true)


Here is the test for my home component, importing everything from the react testing
library that is need to mock-render the component on line 1, then importing the BrowserRouter from
react-router-dom, and the component being tested. Inside of the describe on line 6 is where we make our
testing suite for testing this Home component and give it the name we want. Inside of this suite is where
the tests are written. The tests in here are all the same basic test that is designed to test to see if
every component that lives in the home page renders. Every test written is constructed in the following
manner:

```
test(&ldquo;test name&rdquo;,()=&gt; {
render(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The component that is being tested is
rendered here
)
The actual test goes here.
```


Looking at the first test on line 8 above, the title of the test is stated, then in
lines 9-14 we can see what we want rendered, which is the home component. The home component has to be
wrapped inside the browser router in order to correctly render for testing. On lines 16-17 we can see which
form element that we want to test. In this case, we&rsquo;re looking for the text &ldquo;Rusty!&rdquo; to be
in the document, in other words, in the page/component that is being rendered. This style of test is the
only style of testing that is done in the project.


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/ReactTesting/images/image3.png?raw=true)


It is also possible to test entire HTML blocks that are rendered using React Testing
Libraries Extended Expect. I tried to use it to test the linkedin social media icon in my Navbar component
but since the image is an SVG and is basically never exactly the same dimension, the test always failed and
I was forced to remove it. It requires that specific component to have a test-id=&rsquo;linkedin&rsquo; prop
that the screen.getByTestId(&lsquo;linkedin&rsquo;) finds in order to test the piece of html that is
returned. The last line in the shot shows that we are looking for the document/page/component to have that
specific block of HTML.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Database Revision','https://cdn-icons-png.flaticon.com/512/20/20093.png', '2021-11-21 10:23:54',
'For this newest post on my portfolio it was time to address some issues. One of those
issues was how difficult it has been to add new posts. If you&rsquo;ve read some of my previous posts you
can see the design of my database and what it entails. I&rsquo;ll also give a brief refresher to give this
post some extra context. Here is my old design:


![6](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/database%20revision/images/image6.png?raw=true)


This is a perfectly fine design and for all intents and purposes, does its job. What
makes this hard to deal with, especially if you have a bunch of posts is, having tables for the text and
image content that need to be displayed in the proper order. After you get ten or so posts, this starts
getting ugly and if you have content that isn&rsquo;t positioned correctly, it takes a lot of time to figure
out whatever is going on. Here are my original tables:


![5](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/database%20revision/images/image5.png?raw=true)


Here is my new table:


![4](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/database%20revision/images/image4.png?raw=true)


This handles everything that I need it to and makes positioning much simpler. Instead
of breaking a post down into text and images, I just give it a giant block of HTML that I use Google Docs to
generate for me. Making this tweak also required that I made some changes on my frontend that displays them.
As far as displaying the tiles for each story, that remained exactly the same, displaying the full blog
posts was another story though.It first required that I made a small change in my API so that it queried the
database correctly. Here is both versions of the query I had in my API to fetch the desired data.The old
code is commented out above the new code:


![3](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/database%20revision/images/image3.png?raw=true)


&nbsp;As you can see, the new query is much more palatable. I also had to make some
changes to the frontend. Here is my original code JSX that displays the content of a post:


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/database%20revision/images/image2.png?raw=true)


Here you can see that the content had to be looped through using a map in order to
display it.


![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/database%20revision/images/image1.png?raw=true)


Now here you can see that there is no looping at all, it&rsquo;s simple and easy.
Granted, this wasn&rsquo;t without issue, as I fought with the dbPost state variable being empty when the
page renders, so I had to make it null or empty until it had content to display. These changes made it much
easier to add posts and to find and fix any issues any post may have and will allow me to have greater
velocity in the future.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Adding a background image with a div in React','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54',
'There are a number of ways of adding background images to your web pages or react
components. In this post I&rsquo;m going to go over how to easily do so using a div with inline CSS.


![2](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/AddingBackground/images/image2.png?raw=true)


Here is the snippet of code that I wanted to add a background image to this
particular page/component of my React portfolio application. The background image is added on line 35 with
Tailwind css classes that make the background fixed so it doesn&rsquo;t move as the user scrolls and that
also make it cover the entire viewport screen.

![1](https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/AddingBackground/images/image1.png?raw=true)


Here we can see in my Creating a Node/Express API with Database interaction post that
there is a nice background image with an opaque black overlay.


And there you have it, an easy way to add a background image to a page using a div
and inline CSS.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Dependency Inversion in Node/Express','https://logodix.com/logo/1764835.png', '2021-11-21 10:23:54',
'When it comes to writing backend code for our frontend web applications there are
many options out there to make that happen. One of the more popular choices is Node and Express and many are
familiar with the way that an API is written using them. Here is your pretty typical GET request that would
live in your index.js file. This example is a snippet grabbed from my first article about writing a
Node/Express API.


![4](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/dependencyInversion/images/image4.png)


In this post I&rsquo;ll be showing how to write an API in a totally new way that
allows for loose coupling &nbsp;and for a testable Node API. This new way utilizes dependency inversion to
achieve loose coupling and further testability. In this example I&rsquo;ll start from the start.js file and
work out from there showing an example from a recipe application that I wrote with two fellow engineering
students. We&rsquo;ll focus on just the recipe piece of the application.


![2](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/dependencyInversion/images/image2.png)


It starts with service interfaces, the implemented services, controllers, contexts,
and app configuration. Then after that is where the services are injected, this is important because the way
that the services are injected with their respective contexts are how we achieve loose coupling and
testability. Each of these pieces can be switched out for mocked pieces that allow for testing. The
controllers are then exported for use when routing occurs and the server is started up. I&rsquo;ll now work
from top to bottom to show exactly what each piece of this file looks like.


![5](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/dependencyInversion/images/image5.png)


Here is what the IRecipeService interface looks like. You can see that it looks like
what a good interface should, showing inputs that will be passed into the actual service. It&rsquo;s also
important to note a few other things about this code snippet. On line 2 where #service is, when you put the
&lsquo;#&rsquo; in front of the variable name, that makes that variable private to the class. Then after the
service is set on line 4 there is Object.freeze(this), when you freeze an object like this in the
constructor it makes it so the variables set in the constructor are immutable and cannot be changed. The
Object.freeze on line 59 makes the class completely immutable and makes it so a user cannot do something
tricky like add a new function to the class.


![3](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/dependencyInversion/images/image3.png)


This is a portion of the implemented recipe service. You can see that it takes in a
dbcontext and has the implemented service functions. This shot shows an example of the builder pattern that
will be covered in a future post. The service is always where the hard work takes place.


![1](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/dependencyInversion/images/image1.png)


 This is an example of some of the functions that live inside of the context. As you
can see, the pool calls the query function (like on line 27 for example) that actually finds that specific
query in the recipequeries file and takes in all of the arguments in a parameterized way to prevent SQL
injection and returns the result(s) obtained from the database.


![6](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/dependencyInversion/images/image6.png)


 This is an example of the recipe queries that were written for use in the context.


 ![8](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/dependencyInversion/images/image8.png)


There is also the glue that makes everything work, that is the appConfig file that
gets the server configured and up and running. Now that the bulk of the work is taken care of, now
it&rsquo;s time to have a URL endpoint that will take requests from any frontend that needs to interact with
a recipe.


![7](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/dependencyInversion/images/image7.png)


Now here in the recipes router is where the endpoints that allow the API to be
accessed are as well as with their associated request types. It is important to note that if you have
multiple GET requests that need to occur in the same router that you have to break those additional requests
out into their own pieces. A good example of this is lines 5-8 that allows you to get a recipe by id. This
differs from the get request that starts on line 12 because the request on line 5 takes in an id to get a
specific recipe, whereas line 12 gets all recipes. This models the way that I prefer to write routers for
each piece of functionality, with the &lsquo;get all&rsquo; type request being lumped in with all of the
others, and any other GET requests are separated.


This is what all of the inner workings look like in my implementation of dependency
inversion. Please come back soon to see new posts on the builder pattern, domain primitives, and testing
that utilizes dependency inversion.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Image uploading to Amazon S3 in React and Node/Express','https://logodix.com/logo/1764835.png', '2021-11-21 10:23:54',
'When it comes to handling images on a web page, especially images that need to be
uploaded by a user there are a number of options available for use. In this post I will show one of those
options, that being uploading an image to an Amazon S3 bucket in a React frontend using Node/Express.
I&rsquo;ll begin by starting in the Node/Express API in the index.js file. In order to make it happen, there
are a few imports that are needed beyond the standard Node/Express imports in the API. I&rsquo;ll include
all of the needed imports for the Index.js file below. Note: the imports/code on lines 2, 3, 12, 14, and 16
are for handling cookies/sessions and is unnecessary for uploading images to S3.


![1](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/ImageUploadS3/images/image1.png)


The multer import on line 6 is what really helps to make this task easy, then the s3
import on line 7 is another file that helps with the functionality that is needed for upload and download
functionality with your S3 bucket. Line 8 is where Multer comes into play, this line indicates that images
will be uploaded to the uploads directory that will live in the root directory of the Node/Express api.
Please note that the upload folder will be created by Multer if it does not already exist. The fs import on
line 9 &nbsp;and the util import on line 10 help to clean up the upload folder after the file uploaded has
been sent to s3. This is done using unlink on line 17. This prevents the upload folder from becoming
excessively large and keeps the disk size of your API in check so you won&rsquo;t have hundreds or thousands
of images needlessly taking up space in your API. &nbsp;


![6](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/ImageUploadS3/images/image6.png)


The image contains the only two requests needed in order to upload and download
images.


The post request uploads the image, taking a file from the requests parameter,
feeding that file to the upload file function that returns an image key on line 441, then unlinking that
file so it&rsquo;s not taking up space in your api on line 442, and then then sends the response as an
object to the frontend. The image key that is returned from the uploadFile() function is what is used to
refer to the uploaded image in S3. If you&rsquo;re storing the image information in a database table, that
image key is what will need to be stored. &nbsp;


![1](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/ImageUploadS3/images/image1.png)


The get request is responsible for downloading the image from S3 so it can be
displayed. It takes the image key from the URL parameters and that can be used to download the image. That
key can then be used to create a readStream and you can pipe the response into the readstream to download
the image.


![3](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/ImageUploadS3/images/image3.png)


The s3 file that is imported in index.js is where you interface with the actual AWS
SDK that makes the magic come to life. Starting from the top, I first configure my environment variables
that live in an env file, and then import fs (line 3) and the only the S3 functionality from the AWS SDK
(line 4). After that I just make constants that contain the environment variables and pass them into the
constructor in an object to make a new s3 object (lines 11-15). On lines 17-27 is where the upload function
is defined that we saw in index.js It involves creating a read stream using fs passing in the file path that
the image lives in when it is first uploaded into the API (in the uploads folder that is specified using
multer), then creating the uploadParam object that is passed into the s3.upload() function that returns a
promise of a file key that is used to identify the file when you need to upload it.


![7](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/ImageUploadS3/images/image7.png)


After the upload functionality comes the download functionality in the getFileStream
function that is also seen in index.js. This function takes in the image key that identifies the file that
was uploaded to s3 and uses that inside of the downloadParmas along with the bucket name that is passed into
the s3.getObject function along with chaining the createReadStream function that returns the image. Now
we&rsquo;re ready to look at the React frontend.


![5](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/ImageUploadS3/images/image5.png)


The example here is a little trivial but serves the purpose of showing how image
uploading works on the frontend. The only hook that is needed in this example is just the useState hook that
will just hold file information and I&rsquo;ll do the axios call directly instead of having it abstracted
into a service like I would normally do. We can see in the postImage function (lines 5-11) that I create a
new formData object and append image information and then make a post request to my API with the formData
object, and some necessary headers and return the results. Then down in the main Recipe function that starts
on line 12 I create the file state variable and make a submitHandler that utilizes the postImage function
from above to return the image.


![2](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/ImageUploadS3/images/image2.png)


Next comes the fileSelected handler that just takes in the event and sets the file
state variable to the file passed in through that event. Then comes the JSX that displays a simple image
upload form. Outside of that form in the image tag displays an image that is downloaded from S3, displaying
an image works this way because React will automatically reach out to the API to download the image and
display it. This however can be problematic in some circumstances so the API code can be changed to return
an image URL that seems to be more robust. This, in a nutshell, is how you can upload files/images from a
React frontend to an Amazon S3 bucket.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('The Builder Pattern in Node/Express','https://logodix.com/logo/1764835.png', '2021-11-21 10:23:54',
'When writing code there are many things that we can do in order to make our lives
easier and to build better software. In this post I&rsquo;m going to talk about the Builder pattern as used
in a recipe web page to show how it works and how it helps to build better code.


![2](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/BuilderPattern/images/image2.png)


In this snippet is a function inside of a Node API that is responsible for getting a
recipe from the database by the recipe id. The important part of this function is lines 35-43 when we deal
with the recipe. We can see that when we make a new RecipeBuilder object that we chain a bunch of functions
that add pieces to the RecipeBuilder object until it is finalized. Notice how this recipe is being formatted
for use in the frontend on like 43.


![1](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/BuilderPattern/images/image1.png)


Here in the start of the actual RecipeBuilder class notice that there is no
constructor. This is by design so there is no default recipe that is being built. Each piece of the recipe
has to be added by that specific function.


![3](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/BuilderPattern/images/image3.png)


Here we have the finalizeforFrontendRecipe function within the RecipeBuilder class
that makes sure that undefined values cannot be set to the attributes of the Recipe class. If all of those
items are not undefined then it will make that new recipe. Another thing to note is line 87, the purpose of
line 87 is to freeze the class so that it cannot be extended and have new functions added to it. This helps
to keep the integrity of our data and makes the class much harder to exploit.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Domain Primitives in Node','https://logodix.com/logo/1764835.png', '2021-11-21 10:23:54',
'Oftentimes when we code, we have types that describe a certain attribute. We often
think, &ldquo;oh, a name should be a string&rdquo;, or &ldquo;age should be an integer&rdquo;, or something
along those lines. That works, but can also have certain weaknesses, weaknesses that can potentially be
exploited. A good example of this would be, for a quantity in an online shopping application like Amazon. Do
we want to use an integer to describe quantity? Sure, we can, but there is often more to that integer that
we take for granted. At face value using an integer type is fine, until someone tries to purchase a negative
quantity and your company ends up giving them money when they shouldn&rsquo;t have. This is why domain
primitives are important and why it&rsquo;s important to model our domain appropriately with deep models.
&nbsp;


![1](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/DomainPrimitives/images/image1.png)


Using an integer to describe a quantity is what is known as a shallow model, it can
work, but may not fit as well as it should. This is where deep modeling and domain primitives come into
play.


![2](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/DomainPrimitives/images/image2.png)


This is an example of a domain model of a database id in a Node backend that connects
with a Postgres database. The primary key in this database is automatically incremented and always starts at
1, this is reflected in my domain model that determines if the input is valid in lines 10-13. Here we model
exactly what a database id is, it must be of type number and must also be greater than zero. Only when those
conditions are met do you have a valid database id.


Having a domain model like the one above also helps to increase the security of your
application because you are specifically defining what things like names, numbers, quantities, etc. look
like. You can even use domain models to prevent certain injection attacks because something like a name or a
password is specifically defined and doesn&rsquo;t allow characters that may be used for an injection
attack.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Adding a Content Security Policy in React','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2022-4-30 09:50:32',
'When it comes to writing web pages in React, it is a pretty secure framework. If you try cross site 
scripting attacks you are generally met with disappointment because it guards against them out of 
the box. It does, however have other vulnerabilities. One of those vulnerabilities I managed to find 
just messing around with different types of attacks that web pages may be vulnerable to. Lo and behold, 
I found one, clickjacking. The clickjacking attack that I found my own portfolio was vulnerable to 
is one where you can give an iframe source your URL and your page will render in the iframe. You may 
be wondering why this may be bad, this is bad because someone can take your url and make a new one 
that is so similar that it is feasible that it could be your URL. They can render your page in an iframe, 
overlay a new link over one of your buttons or links, clone something like a login page, and start 
skimming login login credentials. Below is an example of some code that can be used to perform a 
clickjacking attack to a vulnerable page. 

``` html
<style>
    iframe {
        position: relative;
        width: 1000px;
        height: 700px;
        z-index: 1;
    }
    a {
        position: absolute;
        top: 440px;
        left: 470px;
        opacity: .00001;
        z-index:2;
    }   
</style>
<HTML>
<HEAD>

    <TITLE>ClickJack&rsquo;d!</TITLE>

</HEAD>
<BODY BGCOLOR="FFFFFF">
    <iframe src="https://emmanueltorreshn.com"></iframe>
    <a href="https://rustyhermansensoftwareengineer.link">Link Name</a>
</BODY>
</HTML>
```

Notice in this code how the anchor overlays the iframe and the anchor is given coordinates, this is because 
you have to position your anchor in just the right spot and make it more or less invisible in order to fool 
someone. Below is an example of what this code looks like when clickjacking my friend, Emmanuels page:

![emmanuel](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/cpsReact/images/emmanuelclickjack.png)

In order to prevent attacks like these on your page you can employ a content security policy or CSP. The 
easiest way to get a CSP is to use browser extensions that just require you to navigate to the web page 
and activate the extension and it will automatically generate a content security policy for you. Since I&rsquo;m 
using Chrome I selected the Content Security Policy Generator extension.

![csp](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/cpsReact/images/csp.png)

Once you have your extension installed now all you need to do is navigate to your web page an have it generate 
a policy for you. Here is the policy it generated for my web page. It&rsquo;s kind of a generic policy that it 
creates that requires you to add permissions as needed to have all of your content work and load properly. Here 
is what the generic generated policy looks like:

![generatedpolicy](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/cpsReact/images/generatedpolicy.png)

Now that I have a policy generated, it&rsquo;s time to put the policy to work. There is more than one way put 
your policy to work, you can do it in your NGINX conf files if you want if you&rsquo;re using NGINX or you can 
just put meta tags in the head of your HTML page. Since React is a single page application you really only ever 
need to worry about putting it in one place, that being between the head tags in the index.html file that 
lives in the public folder (that is, if you used npx create-react-app *appname* to scaffold your react app for you).

![index.html](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/cpsReact/images/index.png)

Here is what my code looks like with the content security policy in index.html that lives in my public folder:

![csp-index](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/cpsReact/images/csp-index.png)

You&rsquo;ll notice that I made some changes to mine, these changes were made because I have some images that 
render from a URL as opposed to living inside of directory for my page. You may very well have to make some 
of your own changes for your own content security policy. The good news is,  you can use the console in your 
browser developer tools when you inspect a page in order to determine if your security policy needs some 
tweaking to make all of your features work. 

![completecsp](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/cpsReact/images/defaultconf.png)

In my case, I needed to add a piece of code on line 46 in the default.conf file for NGINX to prevent clickjacking. 
You may notice that there is no frame-ancestors in the picture above. This is because you can&rsquo;t put this 
in meta tags, it has to be put in a header.

![completecsp](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/cpsReact/images/noclickjack.png)

There you have it, a content security policy in place and a page that is more secure than it was before.');

insert into portfolio_post.post(title,post_img, post_date, post_content) 
VALUES ('Rendering Markdown in React','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2022-5-01 09:52:32',
'My portfolio has taken a few different forms when it comes to rendering posts.
When I first started I stored all of my posts in a list in React and read all 
of my posts locally. I then determined that I wanted to change that to store my posts
in a database and have stored as raw html and parse that html when you view the post. 
I didn&rsquo;t really care for that solution, as it felt a little gross and the NPM package 
had some vulnerabilities. I had seen some beautiful blog posts written by my friends using 
markdown, so I opted to set out on the journey of getting my posts converted to markdown. 
I won&rsquo;t go into the whole journey, but I&rsquo;ll show you how to render markdown in a React 
application. I started by installing the React-Markdown npm package.

``` bash
npm install react-markdown
```

Now it&rsquo;s as simple as an import on line 3 and using the component on line 6. My posts are stored in a text field that contains all 
of the markdown for the entire post. So you can also do something like store it in a big long string and pass that string inside of the braces in the ReactMarkdown component.

![singlepost](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/renderingMarkdownReact/images/singlepost.png)

This is a piece of markdown from my content security policy post:

![markdown](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/renderingMarkdownReact/images/markdown2.png)

...and here you have it, the post that renders in markdown!

![rendered](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/renderingMarkdownReact/images/markdown.png)');






