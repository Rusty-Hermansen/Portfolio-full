const express = require('express')
const {queries} = require('./queries')
const dotenv = require('dotenv')
dotenv.config()
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/' , async (req, res) => {
    res.send("hello!")
})
app.get('/api/posts/:postid', async (req, res)=>{
    console.log(req.params.postid);
    const response= await queries.getPostById(req.params.postid)
    console.log(response)
    res.json(response)
    
})

app.get('/api/posts', async (req, res)=>{
    res.json(await queries.getPosts())
})

app.post('/api/auth/login', async(req, res) => {
    res.cookie("auth", "test", {sameSite: 'strict', httpOnly: true})
    res.sendStatus(200);
  

})

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
});





