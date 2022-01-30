const express = require('express');
const app = express();
const {peerService} = require("./peerService");



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('pages/addclient.html'))



app.post('/api/addconfig', async (req, res) => {
    try {
        peerService.addConfig(req.body);
        res.send(200);
    }
    catch (ex) {
        console.error(ex);
        res.send(500)
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

app.listen(process.env.API_PORT, () => {
    console.log("runnign at wireguard:3000")
})
//TODO
//get last config.name and return result.rows[0]
//wg set wgvpn.conf peer pulled.publickey allowed ips pulled.allowedips
//wg set wgvpn.conf peer --remove pulled.publickey allowed ips pulled.allowedips
//generate client config file for download
//vpn_ip = process.env.whatevs
//Handlebars.compile(template file)
//template({VPN_IP: procaess.whetevs})
// /peer.name/config
//res.sendfile(peer.name/config)