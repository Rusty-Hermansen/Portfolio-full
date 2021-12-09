FROM node:13-alpine
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["App.js"]