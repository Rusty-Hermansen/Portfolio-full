const { exec, execSync, execFile} = require('child_process')
const {dbService} = require('./db-service');

const genConfig = async (body) => {
    execSync(`/home/rusty/actions-runner/_work/Portfolio-full/Portfolio-full/adminBackend/clientssh.bash ${body.name}`, {uid: 1000})
   
    const config = {
        name: body.name.trim(),
        ipAddress: body.ipAddress.trim(),
        ipRange: body.ipRange.trim(),
        publicKey: getPublicKey(body.name).toString().trim(),
        privateKey: getPrivateKey(body.name).toString().trim(),
        dateAdded: new Date()
    }

     const clientConfig = await dbService.addConfig(config);
   
  
    clientConfig['vmIpAddress']= '45.33.5.185:51820'
    clientConfig['vmPublicKey']=getVmPublicKey().toString().trim();
    return clientConfig;

}
const getVmPublicKey = () =>{
return execSync(
        `sudo cat /etc/wireguard/publickey`, {uid: 1000},
)}


const getPublicKey = (clientName) => {
     return execSync(`cat /home/rusty/clients/${clientName}/publickey`, { uid: 1000 }
        )
}

const getPrivateKey = (clientName) => {
    return execSync(`cat /home/rusty/clients/${clientName}/privatekey`, { uid: 1000 }
       )
}

const addConfig = async (body) => {
    const config = await genConfig(body);
    console.log(config)
    exec(
        `sudo wg set wgvpn peer ${config.publicKey} allowed-ips ${config.ipRange}`, {uid: 1000}
    )
    return genConfigFile(config);
}

const removeConfig = async (publicKey) => {
    exec(
        `sudo wg set wgvpn peer ${publicKey.trim()} remove`,{uid: 1000}
    )
    await dbService.removeConfig(publicKey)
}

const getStatus = () => { 
    
     return execSync(
        'systemctl status wg-quick@wgvpn.service', { uid: 1000 }
       
    )
 
}

const restartService = () => {
    exec(
        'sudo systemctl restart wg-quick@wgvpn.service', { uid: 1000 }, (error, stdout, stderr) => {
            if (error) res.sendStatus(500)
            else if (stderr) res.send(stderr)
            else res.sendStatus(200)
        }
    )
}

const getPeers = () => {
    const cmd = `sudo wg show | grep peer`;
    const peers = execSync(cmd, {uid:1000})
}

const genConfigFile = (config) => {
    const path = `/home/rusty/clients/${config.name}/vpnconfig.conf`;
    const cmd =  `echo "[Interface]
    PrivateKey = ${config.privateKey}
    Address = ${config.ipRange}/24
    DNS = 8.8.8.8
    
    [Peer]
    PublicKey = ${config.vmPublicKey}
    AllowedIPs = ${config.ipAddress}/0
    Endpoint = 45.33.5.185:51820" > /home/rusty/clients/${config.name}/vpnconfig.conf`

    execSync(
        cmd, {uid: 1000 }
    )
    return path;
}




module.exports.peerService = {
    getStatus,
    restartService,
    addConfig,
    removeConfig,
}