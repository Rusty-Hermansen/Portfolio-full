const express = require('express');
const app = express();
const {peerService} = require("./peerService");
const {userService} = require("./userService");



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('pages/addclient.html'))



app.post('/api/addconfig', async (req, res) => {
    try {
        const configPath = await peerService.addConfig(req.body);
        res.download(configPath);
        
    }
    catch (ex) {
        console.error(ex);
        res.send(500)
    }
})

app.post('/api/wgservice/removeconfig', async (req, res)=>{
    try{
        peerService.removeConfig(req.body.publicKey)
    }
    catch{
        res.sendStatus(500)
    }
})

app.get('/api/wgservice/status', async (req, res) => {
    try {
        res.send(peerService.getStatus());
    }
    catch (ex) {
        (
            res.send(500)
        )
    }
})


app.get('/api/wgservice/restart', async (req, res) => {
    try {
        peerService.restartService();
        res.send(200);
    }
    catch (ex) {
        console.error(ex);
        res.send(500);
    }
})

app.get('api/wgservice/peers', (req,res) => {
    try {
        res.send(peerService.getPeers());
    }
    catch{
        res.send(500)
    }
})

app.post('api/user/adduser', async (req, res) => {
    console.log("attempting to adduser");
    try {
        console.log(req.body);
        await userService.addUser(req.body.user)
    }
    catch(ex){
        res.sendStatus(500)
    }
})



app.listen(process.env.API_PORT, () => {
    console.log("runnign at wireguard:3000")
})
