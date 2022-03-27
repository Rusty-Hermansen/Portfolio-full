import ipAddressModel from "./ipAddressModel"
import nameModel from './nameModel'
import keyModel from './keyModel'

class Config {
    public name: nameModel;
    public ipAddress: ipAddressModel;
    public allowedIpRange: ipAddressModel;
    public publicKey: keyModel;
    public privatekey: keyModel;
    public dateAdded: Date;
    public vmIpAddress:ipAddressModel;
    public vmPublicKey: keyModel;
    public originIp: ipAddressModel;

    constructor(
        name: string,
        ipAddress: string, 
        allowedIpRange: string, 
        publicKey: string,
        privateKey: string,
        dateAdded: Date,
        vmIpAddress: string,
        vmPublicKey: string,
        originIp: string
    ){
        if(!(dateAdded instanceof Date)){
            throw new Error("Invalid Date")
        }
        if(this.isOriginValid(new ipAddressModel(originIp))){
            throw new Error("Origin IP is invalid")
        }
        this.name=new nameModel(name);
        this.ipAddress = new ipAddressModel(ipAddress)
        this.allowedIpRange = new ipAddressModel(allowedIpRange)
        this.publicKey = new keyModel(publicKey)
        this.privatekey= new keyModel(privateKey)
        this.vmIpAddress = new ipAddressModel(vmIpAddress)
        this.vmPublicKey = new keyModel(vmPublicKey)
    }
    
    private isOriginValid =(ip: ipAddressModel): boolean => {
        return /^10.200.10.30"$/.test(ip.toString())
    }
}