During the final semester of my pursuit of a bachelors degree in software engineering, my cohort and I were challenged
with the opportunity of having a capstone project. This capstone project is a big project done with a team that is
meant to be completed in about four weeks less than a full semester. For my capstone project I paired with two others
from my cohort and we built recipe website that we called Project Bakersman. We, of course, started this project with
planning and creating diagrams. We first got together and broke down the requirements and made an overall plan that
we could use to guide us through the process of creating our application. When we broke down the requirements for our
application we also assessed the risk of the tasks so that we could prioritize what our group worked on based upon risk,
working from the riskiest items to the less risky items until the application is complete. To aid in the process of breaking
down our application we made a use-case diagram so that we could nail down the functionality
that we wanted for our minimum viable product. This use-case diagram indicates the things that authenticated and
unauthenticated users can do.

![singlepost](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/capstone/images/usecasediagram.png)

With that use-case diagram we could then more readily break down our application into features and subtasks and ended up with the
breakdown below.

![breakdown](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/capstone/images/breakdown.png)

With our new breakdown of tasks, we needed to make some more diagrams and determine which tech stack that we wanted to use for
for this project. Since we had been working with React recently, we opted to stick with it, and use a PERN stack (Postgres, Express, React, Node).
Next, we figured a good logical place to go from our breakdown was to move on to making an ERD for our database. We broke our database down into
the tables below, in order to capture all of the functionality that we desired.

![erd](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/capstone/images/erd.png)

Once our ERD was completed we then moved on to making the wireframe for our frontend to get a feel for what we wanted it to look like.
One of our team members was the product owner on this project so we had the opportunity to discuss what his vision was for this  
application and we made our wireframe of the landing page to encapsulate that vision. That vision had an old feeling of looking
at recipes on 3x5 cards, which is why each recipe card in the wireframe has the lined 3x5 background. We also initially wanted
it to have tabs, like 3x5 manilla folders. We also wanted a featured recipe, or recipe of the day that could be showcased at the top
of the page.

![wireframe](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/capstone/images/wireframe.png)

Now that we had the basic diagrams and a task breakdown it was time to lay the groundwork so we could start building and tackling
risk. We began by standing up a basic React frontend using create-react-app, a node/express api, and a postgres database. We decided
to containerize our application using docker in our initial planning, and since we wanted to orchestrate our containers we ended up using
docker-compose to do that orchestration for us to stand up our respective docker containers and handle container networking. Our
docker-compose file was a simple one that stands up the frontend, api, and database locally. Note the commented out swag container,
that will be used later for a TLS cert so HTTPS can be used. Also note the last line in this docker-compose, this is to set up our database
so that an init script can be used to set up all of our tables when all of the containers are spun-up using docker-compose.

```
version: "3.8"
services:
  # swag:
  #   image: ghcr.io/linuxserver/swag
  #   container_name: swag
  #   cap_add:
  #     - NET_ADMIN
  #   environment:
  #     - PUID=1000
  #     - PGID=1000
  #     - TZ=America/Denver
  #     - URL=therecipesbox.com
  #     - STAGING=false
  #     - SUBDOMAINS=www
  #     - VALIDATION=http
  #   volumes:
  #     - /swag:/config
  #     - ./nginx/default.conf:/config/nginx/site-confs/default #This will require us to have an NGINX folder that contains the default.conf file
  #   ports:
  #     - 443:443
  #     - 80:80
  #   restart: unless-stopped
  #   extra_hosts:
  #     - host.docker.internal:host-gateway

  frontend:
    container_name: bakersman_frontend
    build: ./projectbakersman_client
    stdin_open: true
    ports:
      - 3000:80
    depends_on:
      - api-server
    volumes: 
      - ./projectbakersman_client/default.conf:/etc/nginx/conf.d/default.conf 
    
  api-server:                           
    container_name: bakersman_api
    build: ./projectbakersman_api
    environment: 
      projectbakersman_POSTGRES_USER: secrets.postgres_user 
      projectbakersman_POSTGRES_HOST: secrets.postgres_database
      projectbakersman_POSTGRES_PASSWORD: secrets.postgres_password
      projectbakersman_POSTGRES_DB: secrets.postgres_db
      CLIENT_ID: 78428063066-jsagb8bqu200595msq4t1cttds61ojcj.apps.googleusercontent.com
    ports:
      - 3500:3500
    depends_on: 
      - db
  db:
    container_name: bakersman_database
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: secrets.postres_user
      POSTGRES_PASSWORD: secrets.postgres_password
    volumes:
      - ./Postgres/init.sql:/docker-entrypoint-initdb.d/init.sql
```

With docker-compose set up to stand up our entire application, it was now time to get the API up and running.
Our API started looking like a pretty standard node/express api but ended up evolving later on in the development
process to utilize dependency inversion. If you would like to see more about how our api evolved and was later
changed to use dependency inversion in order to promote testability and loose coupling you can visit 
[this post](https://rustyhermansensoftwareengineer.link/singlepost/19).
