const { exec, execSync, execFile} = require('child_process')
const {dbService} = require('./db-service');

const genConfig = async (body) => {
    execFile(`/home/rusty/actions-runner/_work/Portfolio-full/Portfolio-full/adminBackend/script.sh ${body.name}`)
   
    const config = {
        name: body.name,
        ipAddress: body.ipAddress,
        ipRange: body.ipRange,
        publicKey: getPublicKey(body.name),
        privateKey: getPrivateKey(body.name),
        dateAdded: new Date()
    }

     const clientConfig = await dbService.addConfig(config);
   
  
    clientConfig['vmIpAddress']= '45.33.5.185:51820'
    clientConfig['vmPublicKey']=getVmPublicKey();
    return clientConfig;

}
const getVmPublicKey = () =>{
return execSync(
        `cat /etc/wireguard/publickey`, {uid: 1000},
)}


const getPublicKey = (clientName) => {
     return execSync(`sudo cat /home/rusty/clients/${clientName}/publickey`, { uid: 1000 },
        )
}

const getPrivateKey = (clientName) => {
    return execSync(`sudo cat /home/rusty/clients/${clientName}/privatekey`, { uid: 1000 },
       )
}

const addConfig = async (body) => {
    const config = await genConfig(body);
    exec(
        `sudo wg set wgvpn peer ${config.publicKey} allowed-ips ${config.ipRange}`
    )
}

const removeConfig = async (body) => {
    exec(
        `sudo wg set wgvpn peer ${body.ipAddress} allowed-ips ${body.ipRange} remove`
    )
}

const getStatus = () => { 
    
     return execSync(
        'systemctl status wg-quick@wgvpn.service', { uid: 1000 },
       
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



module.exports.peerService = {
    getStatus,
    restartService,
    addConfig,
    removeConfig,
}