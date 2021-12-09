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
    res.json(await queries.getPostById(req.params.postid))
})

app.get('/api/posts', async (req, res)=>{
    res.json(await queries.getPosts())
})

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
});



