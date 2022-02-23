const express = require('express')
const { queries } = require('./queries')
const dotenv = require('dotenv')
var bcrypt = require('bcrypt')
var cookieParser = require('cookie-parser')
var session = require('express-session')
const { authDbService } = require('./authDbService')

dotenv.config()
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser());
var current_session = {
    secret: 'howmuchwoodwouldawoodchuckchuck',
    proxy: true,
    saveUninitialized: true,
    session_id: null,
    cookie: { secure: true,
        sameSite: 'strict',
        httpOnly: true

    }
}


app.get('/', async (req, res) => {
    res.send("hello!")
})
app.get('/api/posts/:postid', async (req, res) => {
    console.log(req.params.postid);
    const response = await queries.getPostById(req.params.postid)
    console.log(response)
    res.json(response)

})

app.get('/api/posts', async (req, res) => {
    res.json(await queries.getPosts())
})

app.post('/api/auth/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    var sid = req.sessionID;
    var user_id = req.body.user_id;

    const dbResult = await authDbService.getUser(username)

    const isVerified = bcrypt.compare(password, dbResult.password)
    if (isVerified) {
        const session_user = await queries.storeSession(sid, user_id);
        current_session.secret = sid;
        app.use(session(current_session))
        res.username = session_user
        ///more session stuff
        res.send(200)

    }
    else {
        res.sendStatus(403)
    }

})

app.get('/api/auth/secure', async (req, res) => {
    const dbSession = queries.getSession(req.user_id)
    if (dbSession.session_id === req.cookies.session_id) {
        res.user_username
    }
    else {
        res.sendStatus(301);
    }


    res.username = dbUser.user_username;
})

app.get('/api/auth/logout', async (req, res) => {
    //remove user and session id from db table
    const response = await queries.deleteSession(req.body.user_id)
    res.clearCookie('')
})



app.listen(5000, () => {
    console.log("Listening on port 5000")
});





