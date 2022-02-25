const express = require('express');
const { queries } = require('./queries');
const dotenv = require('dotenv');
var bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const { authDbService } = require('./authDbService');
const { uuid } = require('uuidv4');
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
    const username = req.body.username;
    const password = req.body.password;

    const dbResult = await authDbService.getUser(username)
    const hash = await bcrypt.hash(password, dbResult.user_salt)

    if (hash === dbResult.user_password) {
        const existing_session = await queries.getSession(dbResult.user_id);
        if (existing_session) {
            await deleteSession(dbSession.user_id);
        }
        const session_id = uuid()
        const time = new Date();
        time.setHours( time.getHours() + 2 );
        await queries.storeSession(session_id, dbResult.user_id, time);
        res.cookie("session_id", session_id, { sameSite: 'strict', httpOnly: true })
        res.send(200)
    }
    else {
        res.sendStatus(403)
    }

})

app.get('/api/auth/secure', async (req, res) => {
    const dbSession = queries.getSessionBySessionId(req.cookies.session_id);
    if (!dbSession) {
        res.sendStatus(301);
    }
    if((new Date(dbSession.session_expiration)).getTime() < (new Date()).getTime()){
        return res.sendStatus(301)
    }
    else{
        const response = authDbService.getUserById(dbSession.user_id);
        res.send(response.user_username);
    }
})

app.get('/api/auth/logout', async (req, res) => {
    //remove user and session id from db table
    const response = await queries.deleteSession(req.cookies.session_id)
    res.cookie("session_id", "", { sameSite: 'strict', httpOnly: true })
    res.sendStatus(200)
})



app.listen(5000, () => {
    console.log("Listening on port 5000")
});





