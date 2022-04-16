const express = require('express');
const { queries } = require('./queries');
const { userService } = require('./services/userService')
const dotenv = require('dotenv');
var bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');
const multer  = require('multer')
const { uploadImage, downloadImage, imageService } = require('./services/imageService')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');
const util = require('util');
const unlink = util.promisify(fs.unlink);
// const { authDbService } = require('./dbService/authDbService');
const authorizationCheck = require('./middleware/authorizationCheck')
const { v4 } = require('uuid');
const { logoutUser } = require('./services/userService')
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser());


app.get('/', async (req, res) => {
    res.send("hello!")
})
app.get('/api/posts/:postid', async (req, res) => {
    const response = await queries.getPostById(req.params.postid)
    res.json(response)

})

app.get('/api/posts', async (req, res) => {
    res.json(await queries.getPosts())
})

app.post('/api/auth/login', async (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;

    console.table(req.body);

    console.log("Hit endpoint");
    // const dbResult = await authDbService.getUser(username)
    if (dbResult === null) {
        res.sendStatus(403)
    }
    else {
        const hash = await bcrypt.hash(password, dbResult.user_salt)
        console.table(dbResult)
        console.log(hash)

        if (hash === dbResult.user_password) {
            const existing_session = await queries.getSession(dbResult.user_id);
            console.log("Got inside if")
            if (existing_session !== null) {
                console.log("deleting old session")
                await queries.deleteSession(existing_session.session_id);
            }
            console.log("creating new session")
            const session_id = v4();
            const time = new Date();
            time.setHours(time.getHours() + 2);
            await queries.storeSession(session_id, dbResult.user_id, time);
            res.cookie("session_id", session_id, { sameSite: 'strict', expires: time })
            res.send(200)
        }
        else {
            res.sendStatus(403)
        }
    }


})

app.get('/api/auth/secure', async (req, res) => {
    console.log("hit /secure")
    // console.table(req.cookies)
    // const dbSession = await queries.getSessionBySessionId(req.cookies.session_id);
    // console.table(dbSession)

    // const user = await userService.authenticateUser(req.header('authorization').substring(7));
    // const response = await userService.getUserInfoByEmail(user.email)
    // console.table(response)
    // res.send(response);


})

app.get('/api/auth/logout', async (req, res) => {
    //remove user and session id from db table
    const response = await queries.deleteSession(req.cookies.session_id)
    res.clearCookie("session_id")
    res.sendStatus(200)
})


app.get('/api/user/authenticate', async (req, res) => {
    try {
        console.log("Hit the authenticate endpoint")
        const response = await userService.authenticateUser(req.header('authorization').substring(7));
        console.log(response)
        res.send(response)
    }
    catch (error) {
        console.log("There was an error hitting the authenticate endpoint")
        console.error(error.stack)
        res.sendStatus(500)
    }

})

app.post('/api/user/create', authorizationCheck , async (req, res) => {
    try {
        console.log("Creating a new user " + req.body);
        console.table(req.body);
        console.log(res)
        const response = await userService.createUser(req.body.email, req.body.name, req.body.joke, req.body.iceCream, req.body.age, req.body.nickname);
        console.log("api response call for new user" + response)
        res.sendStatus(200)
    }
    catch (error) {
        console.error(error.stack)
        res.sendStatus(500)
    }
})

app.post('/api/user/logout', async (req, res) => {
    const response = await userService.logoutUser();
    res.sendStatus(200)
})

app.post('/api/images', upload.single('image'), async (req, res) =>{
    const file = req.file;

    const result = await imageService.uploadImage(file);
    await unlinkFile(file.path);
    console.log(result);
    res.send({imagePath: `/images/${result.Key}`}); //key is filename in s3
})

app.get('/api/images/:key', (req, res)=>{
    const key = req.params.key;
    const readStream = imageService.downloadImage(key);

    readStream.pipe(res)
})

app.get('/api/comments/', async (req, res) => {
    console.log("trying to get all comments")
    const comments = await queries.getAllComments();
    console.log(comments)
    res.json(comments)
})

app.get('/api/comments/:id', async (req, res) => {
    const response = await queries.getCommentsByUserId(req.params.userid);
    res.json(response)
}
)

app.post('/api/comments/', async (req, res) => {
    try{
      const response = await queries.addNewComment(req.body.comment)
    res.send(200)  
    }
    catch(error){
        console.error(error.stack)
    }
    
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
});





