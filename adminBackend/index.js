const express = require('express')
const app = express();
const path = require("path");
const { dbService } = require ("./db-service");
const exec = require('child_process').exec

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('pages/addclient.html'))

app.post('/api/addconfig', async(req, res) =>{
    const config = {
        name: req.body.name,
        ipAddress: req.body.ipAddress,
        ipRange: req.body.ipRange,
        publicKey: req.body.publicKey,
        privateKey : req.body.privateKey,
        dateAdded : new Date()
    }
    try{
        await dbService.addConfig(config);
        res.send(200);
    }
    catch (ex) {
        console.log(ex);
    }
    
})
app.listen(process.env.API_PORT, () =>{
    console.log("runnign at wireguard:3000")
})
app.get('/api/wgservice/status', async(req,res)=>{
    exec(
        'systemctl status wg-quick@wgvpn.service', {uid: 1000}, 
       (error, stdout, stderr)=>{
            res.send(stdout)
        }
    )
})

app.get('/api/wgservice/restart', async(req,res)=>{
    exec(
        'sudo systemctl restart wg-quick@wgvpn.service', {uid: 1000}, (error, stdout, stderr)=>{
            if(error)res.sendStatus(500)
            else if (stderr) res.send(stderr)
            else res.sendStatus(200)
        }
    )
})