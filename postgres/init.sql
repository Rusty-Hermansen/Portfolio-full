
DROP SCHEMA IF EXISTS portfolio_post;
CREATE SCHEMA IF NOT EXISTS portfolio_post;

CREATE TABLE IF NOT EXISTS portfolio_post.post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(80) NOT NULL,
    post_img text,
    post_date TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS portfolio_post.image(
    id SERIAL PRIMARY KEY,
    title VARCHAR(80) NOT NULL,
    image_url TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS portfolio_post.text(
    id SERIAL PRIMARY KEY, 
    text_content TEXT,
    header VARCHAR(80)
);

CREATE TABLE IF NOT EXISTS portfolio_post.position(
    id SERIAL PRIMARY KEY,
    position INT NOT NULL
);

CREATE TABLE IF NOT EXISTS portfolio_post.category(
    id SERIAL PRIMARY KEY,
    category VARCHAR(40)
);

CREATE TABLE IF NOT EXISTS portfolio_post.tag(
    id SERIAL PRIMARY KEY, 
    tag VARCHAR(40)
);

CREATE TABLE IF NOT EXISTS portfolio_post.post_position(
    id SERIAL PRIMARY KEY,
    post_text_id INT,
    post_image_id INT, 
    post_position_id INT NOT NULL,
    portfolio_post_id INT NOT NULL, 
    FOREIGN KEY (post_text_id) REFERENCES portfolio_post.text(id),
    FOREIGN KEY (post_image_id) REFERENCES portfolio_post.image(id),
    FOREIGN KEY (post_position_id) REFERENCES portfolio_post.position(id),
    FOREIGN KEY (portfolio_post_id) REFERENCES portfolio_post.post(id),
    check(post_text_id is not null or post_image_id is not null)
);

CREATE TABLE IF NOT EXISTS portfolio_post.post_category(
    id SERIAL PRIMARY KEY, 
    post_id INT,
    category_id INT,
    FOREIGN KEY (post_id) REFERENCES portfolio_post.post(id),
    FOREIGN KEY (category_id) REFERENCES portfolio_post.category(id)
);

CREATE TABLE IF NOT EXISTS portfolio_post.post_tag(
    id SERIAL PRIMARY KEY,
    post_id INT, 
    tag_id INT,
    FOREIGN KEY (post_id) REFERENCES portfolio_post.post(id),
    FOREIGN KEY (tag_id) REFERENCES portfolio_post.tag(id)
);

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Kubernetes','https://developers.hp.com/sites/default/files/kubernetes-logo_0.jpg', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) 
VALUES ('<p>Progressing toward earning my Bachelors degree and being immersed in the world of tech, 
I have learned and heard about all sorts of different technologies. 
One of those technologies that has caught my attention is kubernetes, or as it is commonly known, k8s. 
Working as a DevOps engineer intern for Pluralsight, I had an opportunity to learn about k8s and even use
it to some degree. I wanted to learn more about it and here you can join my journey in learning kubernetes.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>To start our journey into kubernetes, we’ll use an image 
that I previously pushed up to docker hub, my car-app image.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is the simple kubernetes manifest that I made. 
I indicated that this is a stable release of a pod, gave it a name and a label in the metadata portion, indicated
 what image I want to put in each pod and what the pod names should be. Line 13 indicates that I want to be able to access
the pod on port 3000.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>It was then time to test my manifest, so I installed 
and started minikube and applied my manifest. I found that instead of just running kubectl get pods over and over 
again, if you run it with the --watch flag, it will show the pod status that updates periodically.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>I also wanted to make some services, this NodePort service 
indicates a port that is open on every node in my kubernetes cluster. It also indicates the port the service listens 
on in the cluster, the port the app in the container is listening on (this needs to match the manifest), the actual 
indicated nodeport, and the label selector that must match the label in the manifest file.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here I applied my nodeport service and looked at the details 
of my service.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>I also wanted to be able to have multiple pods that a 
load balancer can direct traffic to, so I opted to make a simple load balancer. I just indicated all of the normal 
metadata, stated I want a load balancer, had it listen internally on port 80 and targetport that the service sends 
requests to that the pods listen on.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here we can see the LoadBalancer up and running.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Since I had all of the services that I wanted in place, 
it was time to exercise what kubernetes is capable of in my deployment manifest.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here I’m applying my deployment manifest, as you can see here, 
the three pods are created successfully.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here I decided to test the self healing capabilities of kubernetes. 
In the context of servers being cattle not pets, I decided to kill one. Kubernetes automatically made a new pod to replace the old one.</p>');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>I also wanted to be able to access whatever lives in my pods,
 in my case, my simple react app that allows you to post a car that you want to sell. Since I used minikube as my 
 kubernetes playground, I created a service to access the load balancer so I could hit the react app in my pods.<
/p>');

iNSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is the running app that lives in each pod of my cluster.</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image4.png?raw=true" 
style="width: 624.00px; height: 340.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image2.png?raw=true" 
style="width: 624.00px; height: 202.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image12', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image12.png?raw=true" 
style="width: 624.00px; height: 170.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image5.png?raw=true" 
style="width: 624.00px; height: 230.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image9', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image9.png?raw=true" 
style="width: 624.00px; height: 336.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image6', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image6.png?raw=true" 
style="width: 354.00px; height: 265.00px; margin-left: 0.00px; margin-top: 0.00px; 
transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image3.png?raw=true" 
style="width: 624.00px; height: 62.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image7', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image7.png?raw=true" 
style="width: 624.00px; height: 374.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image10', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image10.png?raw=true" 
style="width: 624.00px; height: 214.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image11', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image11.png?raw=true" 
style="width: 624.00px; height: 122.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image1.png?raw=true" 
style="width: 624.00px; height: 280.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

Insert into portfolio_post.image(title, image_url) VALUES ('image8', '<img alt="" 
src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Kubernetes/images/image8.png?raw=true" 
style="width: 624.00px; height: 326.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

INSERT INTO portfolio_post.position(position) VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(
13),(14),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27),(28),(29),(30),(31),(32),(33),(34),(35);

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(1, null, 1, 1), 
(null, 1, 2, 1), 
(2, null, 3, 1), 
(null, 2, 4, 1), 
(3, null, 5, 1),
(null, 3, 6, 1), 
(4, null, 7, 1), 
(null, 4, 8, 1), 
(5, null, 9, 1), 
(null, 5, 10, 1), 
(6, null, 11, 1), 
(null, 6, 12, 1), 
(7, null, 13, 1), 
(null, 7, 14, 1), 
(8, null, 15, 1),
(null,8,16,1), 
(9, null, 17,1),
(null,9,18,1), 
(10,null, 19,1),
(null,10,20,1),
(11,null,21,1),
(null,11,22,1),
(12,null,23,1),
(null,12,24,1),
(13,null,25,1);

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Consuming an API with Dotnet, Blazor, and Refit','https://www.ynvtechnologies.com/img/solutions/dotnet.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Consuming an API has never been easier in dotnet than when you use Refit and a Blazor front end. In this post, I’ll show you how simple it can be. In this article I’ll be using an API that I wrote but the process still applies for any API you want to consume. To begin, you’ll need to start a new Blazor WebAssembly Application.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>You can give it an appropriate name for the project and solution and create it with the default configuration. Once the project is created you’ll start by adding the Refit nuget package.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>You’ll right-click on your project, select Manage Nuget Packages, select the browse button at the top and search for Refit and download the Refit and Refit.HttpClientFactory nuget packages.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Once you have the Refit nuget packages downloaded you can create a Models folder in your project and add a new file for your model. I’m working with cars, so naturally, my model file is CarModel.cs.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Inside of the model file we’ll find all of the attributes about a car that I want to store, like the year, make, model, engine, and transmission information as well as an associated id for each car that I interact with.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p><Now that the model file is all set up and ready to go, you can create a DataAccess folder and make an interface that will set up methods for CRUD operations.  My interface will be called ICarData.cs. You’ll also need to make sure that you’re using Refit in your interface file. Each of the CRUD methods in your interface will have the HTTP method, as well as the route you’ll use for that operation./p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>After the interface is all set up you just need to navigate to Program.cs comment out the builder.Services.AddScoped line and add the new one as seen here.The newly added line uses the interface that was made and also takes in the address of the API that you want to interact with. Since this is my own API running locally, I can access it via localhost.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Now if you want something basic in our front end that you can use to get a list of all cars, you can add this bit of code in the index.razor file found in the pages folder in order to display the list of cars.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is my running application with the list of cars and specifications.</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image8', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consume%20an%20api%20with%20dotnet/images/image8.png?raw=true"
                style="width: 624.00px; height: 81.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consume%20an%20api%20with%20dotnet/images/image4.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image9', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consume%20an%20api%20with%20dotnet/images/image9.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consume%20an%20api%20with%20dotnet/images/image5.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image6', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consume%20an%20api%20with%20dotnet/images/image6.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image7', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consume%20an%20api%20with%20dotnet/images/image7.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consume%20an%20api%20with%20dotnet/images/image2.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consume%20an%20api%20with%20dotnet/images/image3.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consume%20an%20api%20with%20dotnet/images/image1.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(14, null, 1, 2),
(null, 13, 2, 2), 
(15, null, 3, 2), 
(null, 14, 4, 2), 
(16, null, 5, 2),
(null, 15, 6, 2), 
(17, null, 7, 2), 
(null, 16, 8, 2), 
(18, null, 9, 2), 
(null, 17, 10, 2), 
(19, null, 11, 2), 
(null, 18, 12, 2), 
(20, null, 13, 2), 
(null, 19, 14, 2), 
(21, null, 15, 2),
(null, 20, 16, 2), 
(22, null, 17, 2),
(null, 21, 18, 2); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Consuming an APi with React','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>In this post you’ll see what that process looks like. Starting this application will assume you have React and NPM installed. To begin consuming an API, let’s make a new React app by opening up a terminal and running the command: 
</br>
</br> 
&emsp Npx create-react-app reactApi
</br>
</br>
This will create a brand new React application that is ready to go. Once the react app has been made, you’ll want to install Axios by running the following command in the terminal:
</br>
</br>           
&emsp Npm install axios
</br>
</br>
Once axios is installed, open up VS:Code or your favorite code editor and navigate to the src folder.In the src folder make a new file called Api.js</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>In the Api.js file is where we get our api set up. Here we need to import axios and get our API set up with the key, address, and any parameters. We set up an anonymous async function that will return car formation from our api. We can see that we pass in a vin number as a parameter with the host URL and your host API key and can then return the pieces of JSON that we want at the bottom. Note: Please don’t forget to export your Api component.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Now back in App.js we can work on using that information from the API. We can use useState to set up a state variable that will hold our car information and use useEffect to make asynchronous calls to the api that will only re-render when the carInfo state variable has changes. In the return statement we can finally take our API response and display it.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here we also learn something fun, API’s that have keys often require payment. I found one that let me have a limited number of requests and have been locked out from making too many requests. Otherwise, this code would return the vin number and year of the car requested.</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consuming%20an%20api%20with%20react/images/image3.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consuming%20an%20api%20with%20react/images/image5.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consuming%20an%20api%20with%20react/images/image4.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consuming%20an%20api%20with%20react/images/image1.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/consuming%20an%20api%20with%20react/images/image2.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(23, null, 1, 3),
(null, 22, 2, 3), 
(24, null, 3, 3), 
(null, 23, 4, 3), 
(25, null, 5, 3),
(null, 24, 6, 3), 
(26, null, 7, 3), 
(null, 25, 8, 3), 
(null, 26, 9, 3); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Creating and Inserting Into a Postgres Database','https://cdn-icons-png.flaticon.com/512/20/20093.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>These days, it is more than likely that just about every web site that you use has some form of database interaction. In this post, I’m creating a postgres database in a docker container and creating tables inside of it.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>In this post, I use docker-compose in order to stand up my database as well as my react frontend and a nodejs api that will interact with this database. It uses the latest postgres image in the container docker compose spins up and I can tell it what postgres user and postgres password that I want to use.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here I create my schema on line 3 and start making the most basic tables. If you want to see an ERD of this database, please refer to my database design post. The post table here has an additional field because I forgot to add the post image field to that table. You may notice each id is a serial primary key, ids being a primary key is normal, but serial allows you to omit inserting an id and automatically assign sequential id numbers upon each insertion into the table. I can touch on this later when I start showing data insertions.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is where the tables get more complicated. Each of these tables are association tables, with the most complicated one being the post position table that has a bunch of foreign keys in order to maintain the correct ordering of portfolio post content. It also involves a special constraint that allows either the post_text_id or the post_image_id to be null, so each post position must have either text or an image. I’m not using the post_catagory or the post_tag tables yet but will be used in the future. After creating all of these tables, now I’m ready to start inserting data. For the insertions I’ll only include an example of one insertion for each table, as I don’t see the point of showing 25 insertions into a single table.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is a simple insertion into the post table. Notice this insertion doesn’t have an id on line 68, this is because the id is serialized as I mentioned before.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is an insertion in the text table that only has text content, that you’ll see is just a simple string. Images and text content are currently stored as strings inside of html tags. This part of my project is incomplete and I’m uncertain as to how I want to handle data that is being obtained from my database.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is my image insertion, this table will also probably change just like the text table.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here are my position table insertions.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>And last but not least, my post position table insertions. This one is hard to read but this is how the text, image, post position, and post ids are used in order to form a full portfolio post.</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image8', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image8.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image1.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image3.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image5.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image7', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image7.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image4.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image6', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image6.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Create%20Database/images/image2.png?raw=true"
                style="width: 624.00px; height: 308.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(27, null, 1, 4),
(null, 27, 2, 4), 
(28, null, 3, 4), 
(null, 28, 4, 4), 
(29, null, 5, 4),
(null, 29, 6, 4), 
(30, null, 7, 4), 
(null, 30, 8, 4), 
(31, null, 9, 4),
(null, 31, 10, 4), 
(32, null, 11, 4), 
(null, 32, 12, 4), 
(33, null, 13, 4),
(null, 33, 14, 4), 
(34, null, 15, 4), 
(null, 34, 16, 4),
(35, null, 17, 4); 


insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Database Design','https://cdn-icons-png.flaticon.com/512/20/20093.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>We often have ideas for web sites that we want to build, some of which handle data in databases or elsewhere. In this portfolio post, I want a database that will handle all of my portfolio posts that live on my portfolio site. Having never designed a database for anything like a portfolio site, I first started with the most basic pieces, the text and image content. Having never dealt with a database that stored pictures, I needed to know how to actually get images to appear on my portfolio site. After doing some research and thinking, I determined I wanted to store a reference to an image. Then came the challenge of figuring out how to order all of my content.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This ERD is the solution that I came up with to handle images as well as post positioning. Each post has text and image content, as well as tag and category classifications. The position table and the post_position association table serve to link everything together. You may also notice the post_category and post_tag association tables are optional.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here we can see what the sql file looks like. It was a little bit tricky to write the check for the post position table that enforces post_text_id or post_image_id isn’t null for a given database entry. This could be fleshed out some more, but it will work to get my database up and running.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>You may also notice the use of serial with each of my primary keys, this serves to create a sequence of id’s that automatically increments when a new entry is inserted into a table.</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img alt="" src="images/image1.png" style="width: 624.00px; height: 298.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img alt="" src="images/image3.png" style="width: 624.00px; height: 802.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
    translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img alt="" src="images/image2.png" style="width: 624.00px; height: 566.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
    translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(36, null, 1, 5),
(null, 35, 2, 5), 
(37, null, 3, 5), 
(null, 36, 4, 5), 
(null, 37, 5, 5),
(38, null, 6, 5), 
(39, null, 7, 5); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Creating and Building a Docker Image','https://logodix.com/logo/826618.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Docker is a commonly used technology in todays world of rapid deployment of applications. Having used docker to some degree in the past, I thought it time to refresh and supplement my docker knowledge by starting with a react application and containerizing it.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>I started out by containerizing a simple React.js application that I built. Here we can see a simple dockerfile based on the node:13-alpine image. Line four sets our environment variable to where the node modules live, and then we copy the package.json and package-lock.json files into the home directory, then npm install into the home directory. If we want to be able to access the running container, expose, on line 13, gives us a port to do just that. Line 15 then starts the application. This is enough to get us to where we can build an image.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>When writing your dockerfile you can also include a .dockerignore file that will ignore certain files or directories of the application that you are trying to containerize. This will help slim down your image size considerably. I wasn’t terribly concerned with the size of my image in this case, so I didn’t use one, but here is an example of one for reference.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is where I built the docker image successfully. I found there is a little nuance at this point, the dot at the end of the docker image build command that tells docker that the dockerfile is to be used in the current directory is easy to forget. I started with the intention of pushing my image to dockerhub for later use, this requires that you include *your Docker Hub username*/*image name*: *image tag*. I made the mistake initially of not using this convention and quickly discovered that I couldn’t push it to Docker Hub from a CLI.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here we can see that I did manage to successfully push my image to dockerhub using a CLI. Now from here we can run the image.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is where I got the docker container to run. The -d flag means the container is running in detached mode, and -p allows us to indicate the ports I want my app to run on. After indicating the ports I indicate the image that I want to run, this includes the tag. If you try this yourself, please note, if you run the docker run command without indicating the tag, it will only run if the image is tagged latest. If you have any other tag but latest, you have to indicate the image tag with the image name.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here we can see the running docker container in docker desktop</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>...and here is the running application!</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Docker/images/image4.png?raw=true"
                style="width: 362.00px; height: 300.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Docker/images/image1.png?raw=true"
                style="width: 227.00px; height: 171.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image8', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Docker/images/image8.png?raw=true"
                style="width: 624.00px; height: 284.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Docker/images/image2.png?raw=true"
                style="width: 624.00px; height: 161.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Docker/images/image5.png?raw=true"
                style="width: 624.00px; height: 340.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image6', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Docker/images/image6.png?raw=true"
                style="width: 624.00px; height: 36.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Docker/images/image3.png?raw=true"
                style="width: 624.00px; height: 197.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image7', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Docker/images/image7.png?raw=true"
                style="width: 624.00px; height: 289.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(40, null, 1, 6),
(null, 38, 2, 6), 
(41, null, 3, 6), 
(null, 39, 4, 6), 
(42, null, 5, 6),
(null, 40, 6, 6), 
(43, null, 7, 6),
(null, 41, 8, 6), 
(null, 42, 9, 6), 
(44, null, 10, 6), 
(null, 43, 11, 6), 
(45, null, 12, 6),
(null, 44, 13, 6), 
(46, null, 14, 6),
(null, 45, 15, 6),
(47, null, 16, 6); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Provisioning Infrastructure With Terraform','https://logodix.com/logo/1686026.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Infrastructure-as-code is todays modern, declarative way to set up cloud infrastructure. It gives us an easy, repeatable way to set that infrastructure up and is designed to be readable. Todays adventure is learning a bit about an infrastructure-as-code tool called Terraform and using it to set up some infrastructure in AWS. Terraform uses its own declarative language called HCL, or Hashicorp Configuration Language. This adventure will consist of a single file, called main.tf. It is possible to store all of your variables in another file with a *.tfvars file type, I have so few variables that I opted not to use another file. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here are my variables, where I declare my region, network address space for the VPC, and two subnet address spaces to be used with two different EC2 instances and a load balancer. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>
This is where I indicate the cloud provider that I’m using, which is AWS. You can also use Google Cloud, Microsoft Azure, or smaller providers like Linode. I’m also getting a list of all available AWS availability zones as well as dynamically getting the most current AMI for the Amazon Linux 2 operating system for each of my EC2 virtual machines. 
</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here I’m setting up my VPC or Virtual Private cloud, mainly for connectivity and security. I also have my aws internet gateway that allows the VPC to be reachable from the internet to make our EC2 instances reachable from the internet.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Since I’ll be setting up two different EC2 instances, I need two subnets, each in a different availability zone to help make whatever I’m hosting be redundant, and more highly available than if I only used one availability zone. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>The route table directs traffic from subnets to wherever we want it to go, which is eventually my EC2 virtual machine. The route table associates associate our subnets to our route table. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is where we set up an elastic load balancer security group. This security group is associated with a vpc and tells us which ports traffic will be accepted from. In our case, port 80, via http. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is another security group that is associated that will allow me to get into my VM’s using port 22 to ssh into it, or access it via http on port 80. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is where our actual EC2 virtual machines are defined, they are the smallest possible EC2 instance offered by AWS and are accessible via the Session Manager IAM profile. The elastic load balancer is then declared, given the appropriate subnets, security group, and EC2 instance ids) and set to listen on port 80 and can then route traffic to either EC2 instance. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is our output, as soon as all of the infrastructure is stood up, this output will give us the URL of our ELB to access our two EC2 virtual machines via the load balancer. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>
Now that all of the terraform code is done, the ‘terraform init’ command needs to be run and get everything initialized. 
</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Then a terraform plan can be called to double-check how the infrastructure is being set up. If everything looks good, a ‘terraform apply’ command can be called and the infrastructure that lives in main.tf can be stood up. Whenever you want it all come down, you can run terraform destroy and every piece of infrastructure in your main.tf will be taken down. My infrastructure is still up and I can find it in my AWS console. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here we can see that it made our two EC2 instances</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Now the vpc</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>The route table with two associated subnets</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>...and the elastic load balancer. </p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image6', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image6.png?raw=true"
                style="width: 390.00px; height: 426.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image9', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image9.png?raw=true"
                style="width: 624.00px; height: 321.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image1.png?raw=true"
                style="width: 437.00px; height: 253.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image15', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image15.png?raw=true"
                style="width: 624.00px; height: 345.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image3.png?raw=true"
                style="width: 566.00px; height: 478.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image7', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image7.png?raw=true"
                style="width: 474.00px; height: 283.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image8', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image8.png?raw=true"
                style="width: 624.00px; height: 326.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image14', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image14.png?raw=true"
                style="width: 624.00px; height: 640.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image13', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image13.png?raw=true"
                style="width: 432.00px; height: 112.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image10', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image10.png?raw=true"
                style="width: 624.00px; height: 260.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image5.png?raw=true"
                style="width: 624.00px; height: 480.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image4.png?raw=true"
                style="width: 624.00px; height: 173.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image11', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image11.png?raw=true"
                style="width: 624.00px; height: 13.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image12', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image12.png?raw=true"
                style="width: 624.00px; height: 13.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image2.png?raw=true"
                style="width: 624.00px; height: 10.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(48, null, 1, 7),
(null, 46, 2, 7), 
(49, null, 3, 7), 
(null, 47, 4, 7), 
(50, null, 5, 7),
(null, 48, 6, 7), 
(51, null, 7, 7),
(null, 49, 8, 7), 
(52, null, 9, 7), 
(null, 50, 10, 7), 
(53, null, 11, 7), 
(null, 51, 12, 7),  
(54, null, 13, 7),
(null, 52, 14, 7),
(55, null, 15, 7),
(null, 53, 16, 7), 
(56, null, 17, 7), 
(null, 54, 18, 7), 
(57, null, 19, 7),
(null, 55, 20, 7),
(58, null, 21, 7),
(null, 56, 22, 7),
(59, null, 23, 7),
(null, 57, 24, 7), 
(60, null, 25, 7), 
(null, 58, 26, 7), 
(61, null, 27, 7),
(null, 59, 28, 7),
(62, null, 29, 7),
(null, 60, 30, 7),
(63, null, 31, 7); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Creating an API with Node and Express','https://logodix.com/logo/1764835.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Writing an API in Node and Express is simple and easy. In this post, I’ll show you how to create your own API with node and express.
</br>
</br>
To start out, you’ll create a folder in the desired directory, and make a new file in that folder called something like ‘App.js’. It’s easiest if you use VS:Code and are working in the folder you just created. In VS:Code upon up a new terminal and it’s time to install Express by typing in the command,:
</br>
</br>
&emsp Npm install -g express
</br>
</br>
Another useful package to install is called nodemon, which will hot reload your Node application whenever you save your files in VS:Code. To install nodemon you’ll run the following command in your terminal:
</br>
</br>
&emsp Npm install -g nodemon
</br>
</br>
After you have those two packages it’s time to create a package.json file, which will happen automatically when you run the command:
</br>
</br>
&emsp  Npm init
</br>
</br>
Once the init is completed you should see a package.json file that should look something like this:</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>You’ll want to add line 6 in your package.json so you can use node modules. Node modules allow you to import in the same basic manner as in React.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>You’ll see the express import to use express and the users import. This import holds a list of users for us to interact with.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>To continue in App.js, starting on line 5 is where we start configuring express with middleware,  to send responses in json and to run on port 4000 so you can access it using localhost.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>After we get all of the configuration done above we can get down to doing CRUD operations. Each HTTP request has an endpoint that you can use to call that specific crud operation as well as an anonymous function that takes in res and req. Req stands for request, res stands for response.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>On line 11 we can see a Read crud operation that reads off a greeting property with a greeting in Json.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>On line 16 is where we read all users from a list/database and send them all in a json blob.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Line 21 is where we can Create a new user taking their information from the passed in request and adding it to the list of users on line 25, and sending an OK status code on line 26 to confirm success.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>On line 29 is where you can find a user by id by filtering the list of users by id. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Line 34 is where we can update a user by id, using request parameters and pushing the updated user to the list and sending an OK status code to confirm success</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>On line 41 is where we can find a user by id, and removing them according to their index using the splice function and sending an OK status code to confirm success.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Now in order to run this application you just need to run:</br>
</br>
&emsp Node App.js
</br>
</br>
Please note that the file names are case-sensative, App.js and app.js aren’t the same. </br>

Here is what we see when we look at the users endpoint.</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image7', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image7.png?raw=true"
                style="width: 561.00px; height: 356.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image3.png?raw=true"
                style="width: 495.00px; height: 205.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image10', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image10.png?raw=true"
                style="width: 480.00px; height: 270.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image3.png?raw=true"
                style="width: 495.00px; height: 205.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image9', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image9.png?raw=true"
                style="width: 300.00px; height: 22.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image8', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image8.png?raw=true"
                style="width: 504.00px; height: 59.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image5.png?raw=true"
                style="width: 408.00px; height: 79.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image1.png?raw=true"
                style="width: 578.00px; height: 140.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image11', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image11.png?raw=true"
                style="width: 624.00px; height: 78.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image6', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image6.png?raw=true"
                style="width: 624.00px; height: 89.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image4.png?raw=true"
                style="width: 587.00px; height: 85.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/node%20api/images/image2.png?raw=true"
                style="width: 624.00px; height: 208.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(64, null, 1, 8),
(null, 61, 2, 8), 
(65, null, 3, 8), 
(null, 62, 4, 8), 
(66, null, 5, 8),
(null, 63, 6, 8), 
(67, null, 7, 8),
(null, 64, 8, 8), 
(68, null, 9, 8), 
(null, 65, 10, 8), 
(69, null, 11, 8), 
(null, 66, 12, 8),
(70, null, 13, 8), 
(null, 67, 14, 8),
(71, null, 15, 8),
(null, 68, 16, 8); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Creating A Node/Express API With Database Interaction','https://logodix.com/logo/1764835.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>When it comes to securely interacting with a database for a react app, database interactions need to take place through an api. In this post I will go over the api that I wrote that interacts with my database on behalf of my react frontend.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is the basics of my api, using express and dotenv (for environment variables), creating an endpoint to return a json post object from the api as well as returning all posts to display tiles for each post.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here I have the queries file that my App.js(in the backend) uses in order to ping the database. All of the credentials are pulled in from a .env file and the most basic functionality is set up with the proper queries to return a post.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is my apiService in my frontend that interacts with the api in order to get posts from the database. Again, it just has the most basic functionality that gets all of the posts from the database to display tiles in my post component and will get a specific post by id (not completed but coming soon!).</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here we can see the post component that uses the apiService that interacts with the api and database. In the useEffect it gets all of the posts from the database when the page is rendered and then those posts are mapped through starting on line 22 and the data is used to build tiles that the user can click on to view a post.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is an example of a tile that is built using data that comes from the database.</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Portfolio%20API/images/image4.png?raw=true"
                style="width: 508.00px; height: 420.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Portfolio%20API/images/image2.png?raw=true"
                style="width: 599.00px; height: 797.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Portfolio%20API/images/image3.png?raw=true"
                style="width: 377.00px; height: 280.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Portfolio%20API/images/image1.png?raw=true"
                style="width: 624.00px; height: 400.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/portfolio/blob/main/src/posts/Portfolio%20API/images/image5.png?raw=true"
                style="width: 624.00px; height: 333.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(72, null, 1, 9),
(null, 69, 2, 9), 
(73, null, 3, 9), 
(null, 70, 4, 9), 
(74, null, 5, 9),
(null, 71, 6, 9), 
(75, null, 7, 9),
(null, 72, 8, 9), 
(76, null, 9, 9), 
(null, 73, 10, 9), 
(77, null, 11, 9); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Postgres Joins','https://cdn-icons-png.flaticon.com/512/20/20093.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>When I first started learning sql, I was taking a databases class using postgresql. When learning about joins, I had a hard time envisioning when I would use something like a left or a right join. In this post I will go over the three different joins and why I use them.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>The object of this query is to return all of the content in a portfolio post. In order to do so, I had to carefully choose the type of joins that I use so all of the data could be displayed. When I first started writing this query, I did all inner joins and my query returned nothing. I was stumped for a bit until I came to the realization that, when a text has a value an image is null and when text is null and an image has a value. That means that an inner join can’t be used to get a complete portfolio post. All of the other tables can use simple inner joins because they all exist at the same time. It turned out using left joins on the text and image tables allowed me to get all of the content for a complete post.</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Postgres%20Complex%20Queries/images/image1.png?raw=true"
                style="width: 604.00px; height: 237.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(78, null, 1, 10),
(null, 74, 2, 10), 
(79, null, 3, 10);

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('React Input Validation','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Being relatively new to the world of React.js and Javascript as well as an avid browser of the internet, I thought I’d take a stab at making some good, basic form validation in React using useReducer, useEffect, and useContext. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is my basic file tree, as you can probably tell, it’s pretty bare bones and will only focus on form validation. This application is similar to another one that I built in the past, but implements functionality in a much different way and includes no styling. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is the context that I’m going to be using to keep track of the cars this application will interact with. We create our context that has a list of cars and an empty onAddCar method, this is done mostly to aid intellisense in vs:code as I write code later on. I also made a CarContextProvider, this context provider will make the addCarHandler accessible for when I need to submit my form and will allow me to add cars to my car list. The provider in the return statement helps us to use this in code, I’ll touch on how the provider is used once you reach the form page. Using context in this manner helps us so that we don’t have to pass state down through a bunch of different components and can make things much less messy and complicated since state isn’t being passed through props. This application is simple enough that it doesn’t need to use context but I thought it good practice anyways. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>The app file helps us to know how this application is constructed, here we can also see how the context provider is used. The provider component allows any of its children access to the state and functions that live inside of the context. So the TilePage component and NewCarForm component can access the contexts state and functions. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>These are the fields that I will be interested in in the forms, and this component will be used inside of the TilePage component as seen in the next image.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Now that we’re on the TilePage component, context is used in order to get my list of cars and map through them, showing all of the details about each car. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>The form page that I made is somewhat lengthy so I have to break it up into a number of digestible pieces. I also get the opportunity to use useContext, useReducer, useEffect, as well as useState again. This is where I indicate the types of actions that I will use when I dispatch using my reducer as well as indicate the initial state of the form.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is my form reducer that will dispatch actions based upon the action type. This includes submission with some validation, so in the yearValid portion, we can see a valid value for the year is from the year 1900 and newer. This will also return the form back to its initial state once it is submitted. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Inside of the NewCarForm function the event is passed in and we can see the context will be used, the reducer, state for a valid form, and if each field has been touched. We can see how the reducer handles if each field has a valid input value and how I use them along with my touched states to handle if the form is initially invalid to show styling and a message that indicates invalid input. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here in the useEffect is used in order to determine if the form as a whole is valid. This is done by setting the formValid state variable to true if all of the fields have valid inputs. This useEffect will cause the page to re-render any time a change is detected with isXxxxValid reducer states. 
Each of the handlers dispatch the appropriate action for each field and the input is validated in the formReduce function. The blur handlers help make the initial form state to look pretty with no warning colors or messages, once one of them is clicked on, styling and a message will display if the input is invalid. 
</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>The submitHandler will use the available context method to add a car to the car list the lives in context, so long as the form is valid. It will then dispatch the action that resets the form and all of the touched state variables are reset to false. I also made inputClasses at the bottom of this clip that will style the form according to the if the given field is invalid or not. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is where the visible form is made that a user can interact with. We can see the submitHandler is applied to the form and we have each input with an appropriate label. Each input has the appropriate change and blur handlers in order to give us the validation that we want. Each field also has a message that is conditionally rendered based upon field validity, as can be seen on lines 117, 122, 127, and 132. The button will also be disabled if the form is invalid, not allowing the user to submit an invalid form. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is the initial form state. It’s not the prettiest thing in the world, but it shows everything is valid and not screaming at you. Notice while all of the fields appear valid the submit button is disabled. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here I have an example of different variations of validity in my fields. The year field has only been clicked on, and we’re shown that that field is invalid, the same goes for the model state. The make state has a valid string in it, so it’s happy and not showing us a message or anything else. The price field is indicating an invalid value, since cars generally don’t have a negative value. The submit button is also still disabled because all of our fields are not satisfied. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Now we finally have an example of a happy form! Each field has a valid value in it and our submit button is finally not disabled, allowing us to submit a car. Awesome!</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image9', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image9.png?raw=true"
                style="width: 154.91px; height: 511.50px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image4.png?raw=true"
                style="width: 560.00px; height: 485.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image5.png?raw=true"
                style="width: 590.00px; height: 371.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image1.png?raw=true"
                style="width: 440.00px; height: 281.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image10', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image10.png?raw=true"
                style="width: 624.00px; height: 201.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image6', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image6.png?raw=true"
                style="width: 624.00px; height: 326.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image13', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image13.png?raw=true"
                style="width: 624.00px; height: 334.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image3.png?raw=true"
                style="width: 624.00px; height: 338.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image14', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image14.png?raw=true"
                style="width: 624.00px; height: 486.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image11', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image11.png?raw=true"
                style="width: 624.00px; height: 338.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image12', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image12.png?raw=true"
                style="width: 624.00px; height: 354.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image8', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image8.png?raw=true"
                style="width: 305.00px; height: 147.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image7', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image7.png?raw=true"
                style="width: 368.00px; height: 307.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/React%20field%20validation/images/image2.png?raw=true"
                style="width: 342.00px; height: 285.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
                
INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(80, null, 1, 11),
(null, 75, 2, 11), 
(81, null, 3, 11), 
(null, 76, 4, 11), 
(82, null, 5, 11),
(null, 77, 6, 11), 
(83, null, 7, 11),
(null, 78, 8, 11), 
(84, null, 9, 11), 
(null, 79, 10, 11), 
(85, null, 11, 11), 
(null, 80, 12, 11),
(86, null, 13, 11), 
(null, 81, 14, 11),
(87, null, 15, 11),
(null, 82, 16, 11),
(88, null, 17, 11),
(null, 83, 18, 11), 
(89, null, 19, 11), 
(null, 84, 20, 11), 
(90, null, 21, 11),
(null, 85, 22, 11), 
(91, null, 23, 11),
(null, 86, 24, 11), 
(92, null, 25, 11), 
(null, 87, 26, 11), 
(93, null, 27, 11); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('React Routing','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>In this.In this post I’ll be covering how you make a React application appear as though there are multiple pages using react-router-dom. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>In this post I’ll first start in index.js where the groundwork is laid to make page routing work in a react application. I first started by importing BrowserRouter from react-router-dom and wrapped <App/> with the <BrowserRouter> tags to enable routing in the application.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Moving on to App.js, I imported Switch and Route from react-router-dom  on line 3 in order to create routes and the component that is tied to each route, as well as the related path. I used the Switch component that starts on line 18 and wraps the route components on lines 19-22. Each route component allows me to create the routes that I want, determine which route loads which component, and also includes the associated path you desire that route to live in. I also implemented lazy loading in order to decrease page load times. In order to implement lazy loading all that really needs to happen is importing react from react and then importing only when the component is used like on lines 19-22. When a react application is loaded without lazy loading, every component in the application is loaded instead of only what is needed. Lazy loading only loads those imported components when they’re used. In my application it doesn’t really make a difference, but it would in a larger application</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Inside of my navbar component I have navlinks that allow users to navigate to the desired ‘page’. Each navlink can have its own styling, including active styling that is determined in activeClassName attribute that highlights the currently selected navlink.You can also tell which route that you want each navlink to take you in the ‘to’ attribute of the navlink component. The navbar also uses the react-social-icons npm package that will display social media icons that I used to link to my social media accounts. All it takes is the import on line 2 and using the component like I did on lines 30 and 31. You can tell the SocialIcon component what url you want to use and how you want it styled. My favorite part about using react-social-icons is that it automatically determines which icon to use based upon the url that you use in the url attribute.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here in my post component, I create tiles for each post that I have created and link to the individual post using the index as I map through each post. The links that are created have a path they navigate to, a key, and state that can be passed down into the component being loaded. The index here will be utilized in the SinglePost component via useParams to determine which post to load.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>In this SinglePost component I use useParams to pass down the index and I use that index to load the correct post from my locally stored posts array on lines 9 and 11. Here you have it, the complete picture of how the routing works in this very portfolio that you view at this moment. </p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image2.png?raw=true"
                style="width: 484.00px; height: 364.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image1.png?raw=true"
                style="width: 596.00px; height: 635.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image3.png?raw=true"
                style="width: 624.00px; height: 349.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image5.png?raw=true"
                style="width: 624.00px; height: 392.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/react%20routing/images/image4.png?raw=true"
                style="width: 624.00px; height: 342.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(97, null, 1, 12),
(null, 88, 2, 12), 
(98, null, 3, 12), 
(null, 89, 4, 12), 
(99, null, 5, 12),
(null, 90, 6, 12), 
(100, null, 7, 12),
(null, 92, 8, 12), 
(101, null, 9, 12), 
(null, 93, 10, 12), 
(102, null, 11, 12);

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('My React Portfolio','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>In our modern tech world, it seems that many software engineers have their own portfolio. In this post I will show you my first stab at making my own portfolio and how it didn’t go quite as smoothly as I wanted. I started with grand plans of using a node api that interacts with a database but I found myself too short on time to be able to do that just yet. Here is the start of what is my software engineering portfolio. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is my basic file structure with a handful of the necessary components for making a portfolio. There is also a posts folder that stores my current posts statically as well as some background images that I have used to dress up my portfolio page. I also have a copy of my most current resume that any potential employers can look over. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>I’ll start by showing you my app file. I use react-router in order to do the routing that I need to make my portfolio site a little easier to navigate. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is the code for my simple home component, this is a pretty simple component that utilizes a black and white photo of a laptop as the background. Upon making this page initially I found that my text was hard to read because it blended in with the white in the picture. To help make it more readable I added a black opaque tint. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here you can see the rendered home component in all of its glory. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is the code for my about component. I wanted to keep this component simple so I thought I’d display the pdf version of my resume here. I used an npm package called react-pdf that allows me to render my resume on this page. The react-pdf package was very easy to use and is supposed to have support for clickable links on pdfs but I couldn’t seem to get it working. Thankfully I have links in the navbar that take you to the same place.I also added the same black opaque tint to this page as I did to the home page to tone down dome of the intensity of the picture. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is the code for the navbar, I used the React social icons package to get the social media icons and navlinks are utilized for routing. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is the code for the page that lists all of my portfolio posts. It currently maps through a static list. I didn’t quite get to finish styling this page so it’s still a little plain jane but it’s a good start. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is what the posts page currently looks like. They all use the same image currently but that will easily be fixed in the futur</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here’s the code for the single post page. This page is also supposed to use react-router and have state passed to it in order to render this SinglePost component. I ran into the strange issue below that has me currently stumped and onlookers won’t be able to see my posts just yet.</p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image2.png?raw=true"
                style="width: 364.00px; height: 636.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image11', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image11.png?raw=true"
                style="width: 595.00px; height: 480.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image9', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image9.png?raw=true"
                style="width: 624.00px; height: 262.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image4.png?raw=true"
                style="width: 624.00px; height: 313.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image6', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image6.png?raw=true"
                style="width: 624.00px; height: 400.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image3.png?raw=true"
                style="width: 624.00px; height: 314.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image8', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image8.png?raw=true"
                style="width: 624.00px; height: 310.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image1.png?raw=true"
                style="width: 624.00px; height: 349.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image10', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image10.png?raw=true"
                style="width: 624.00px; height: 313.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image7', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image7.png?raw=true"
                style="width: 440.00px; height: 369.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/site/images/image5.png?raw=true"
                style="width: 624.00px; height: 286.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(103, null, 1, 13),
(null, 94, 2, 13), 
(104, null, 3, 13), 
(null, 95, 4, 13), 
(105, null, 5, 13),
(null, 96, 6, 13), 
(106, null, 7, 13),
(null, 97, 8, 13), 
(107, null, 9, 13), 
(null, 98, 10, 13), 
(108, null, 11, 13), 
(null, 99, 12, 13), 
(null, 100, 13, 13), 
(109, null, 15, 13),
(null, 101, 16, 13),
(110, null, 17, 13),
(null, 102, 18, 13), 
(111, null, 19, 13), 
(null, 103, 20, 13), 
(112, null, 21, 13),
(null, 104, 22, 13); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Provisioning Infrastructure With Terraform','https://logodix.com/logo/1686026.png', '2021-11-21 10:23:54');

INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Infrastructure-as-code is todays modern, declarative way to set up cloud infrastructure. It gives us an easy, repeatable way to set that infrastructure up and is designed to be readable. Todays adventure is learning a bit about an infrastructure-as-code tool called Terraform and using it to set up some infrastructure in AWS. Terraform uses its own declarative language called HCL, or Hashicorp Configuration Language. This adventure will consist of a single file, called main.tf. It is possible to store all of your variables in another file with a *.tfvars file type, I have so few variables that I opted not to use another file. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here are my variables, where I declare my region, network address space for the VPC, and two subnet address spaces to be used with two different EC2 instances and a load balancer. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>
This is where I indicate the cloud provider that I’m using, which is AWS. You can also use Google Cloud, Microsoft Azure, or smaller providers like Linode. I’m also getting a list of all available AWS availability zones as well as dynamically getting the most current AMI for the Amazon Linux 2 operating system for each of my EC2 virtual machines. 
</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here I’m setting up my VPC or Virtual Private cloud, mainly for connectivity and security. I also have my aws internet gateway that allows the VPC to be reachable from the internet to make our EC2 instances reachable from the internet.</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Since I’ll be setting up two different EC2 instances, I need two subnets, each in a different availability zone to help make whatever I’m hosting be redundant, and more highly available than if I only used one availability zone. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>The route table directs traffic from subnets to wherever we want it to go, which is eventually my EC2 virtual machine. The route table associates associate our subnets to our route table. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is where we set up an elastic load balancer security group. This security group is associated with a vpc and tells us which ports traffic will be accepted from. In our case, port 80, via http. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here is another security group that is associated that will allow me to get into my VM’s using port 22 to ssh into it, or access it via http on port 80. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is where our actual EC2 virtual machines are defined, they are the smallest possible EC2 instance offered by AWS and are accessible via the Session Manager IAM profile. The elastic load balancer is then declared, given the appropriate subnets, security group, and EC2 instance ids) and set to listen on port 80 and can then route traffic to either EC2 instance. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>This is our output, as soon as all of the infrastructure is stood up, this output will give us the URL of our ELB to access our two EC2 virtual machines via the load balancer. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>
Now that all of the terraform code is done, the ‘terraform init’ command needs to be run and get everything initialized. 
</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Then a terraform plan can be called to double-check how the infrastructure is being set up. If everything looks good, a ‘terraform apply’ command can be called and the infrastructure that lives in main.tf can be stood up. Whenever you want it all come down, you can run terraform destroy and every piece of infrastructure in your main.tf will be taken down. My infrastructure is still up and I can find it in my AWS console. </p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Here we can see that it made our two EC2 instances</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>Now the vpc</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>The route table with two associated subnets</p>');
INSERT INTO portfolio_post.text(text_content) VALUES ('<p>...and the elastic load balancer. </p>');

Insert into portfolio_post.image(title, image_url) VALUES ('image6', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image6.png?raw=true"
                style="width: 390.00px; height: 426.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image9', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image9.png?raw=true"
                style="width: 624.00px; height: 321.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image1', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image1.png?raw=true"
                style="width: 437.00px; height: 253.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image15', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image15.png?raw=true"
                style="width: 624.00px; height: 345.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image3', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image3.png?raw=true"
                style="width: 566.00px; height: 478.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image7', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image7.png?raw=true"
                style="width: 474.00px; height: 283.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image8', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image8.png?raw=true"
                style="width: 624.00px; height: 326.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image14', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image14.png?raw=true"
                style="width: 624.00px; height: 640.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image13', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image13.png?raw=true"
                style="width: 432.00px; height: 112.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image10', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image10.png?raw=true"
                style="width: 624.00px; height: 260.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image5', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image5.png?raw=true"
                style="width: 624.00px; height: 480.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image4', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image4.png?raw=true"
                style="width: 624.00px; height: 173.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image11', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image11.png?raw=true"
                style="width: 624.00px; height: 13.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image12', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image12.png?raw=true"
                style="width: 624.00px; height: 13.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
                 translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');
Insert into portfolio_post.image(title, image_url) VALUES ('image2', '<img
                alt="" src="https://github.com/Rusty-Hermansen/Portfolio-full/blob/main/React/src/posts/Terraform/images/image2.png?raw=true"
                style="width: 624.00px; height: 10.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">');

INSERT INTO portfolio_post.post_position(post_text_id, post_image_id, post_position_id, portfolio_post_id) 
VALUES 
(113, null, 1, 14),
(null, 105, 2, 14), 
(114, null, 3, 14), 
(null, 106, 4, 14), 
(115, null, 5, 14),
(null, 107, 6, 14), 
(116, null, 7, 14),
(null, 108, 8, 14), 
(117, null, 9, 14), 
(null, 109, 10, 14), 
(118, null, 11, 14), 
(null, 110, 12, 14),  
(119, null, 13, 14),
(null, 111, 14, 14),
(120, null, 15, 14),
(null, 112, 16, 14), 
(121, null, 17, 14), 
(null, 113, 18, 14), 
(122, null, 19, 14),
(null, 114, 20, 14),
(123, null, 21, 14),
(null, 115, 22, 14),
(124, null, 23, 14),
(null, 116, 24, 14), 
(125, null, 25, 14), 
(null, 117, 26, 14), 
(126, null, 27, 14),
(null, 118, 28, 14),
(127, null, 29, 14),
(null, 119, 30, 14),
(128, null, 31, 14); 

insert into portfolio_post.post(title,post_img, post_date) 
VALUES ('Writing an API in Dotnet','https://www.ynvtechnologies.com/img/solutions/dotnet.png', '2021-11-21 10:23:54');

