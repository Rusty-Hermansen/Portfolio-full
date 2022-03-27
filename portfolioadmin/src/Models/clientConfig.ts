import ipAddressModel from "./ipAddressModel";
import nameModel from "./nameModel";


export default class ClientConfig {
    readonly name: nameModel;
    readonly ipAddress: ipAddressModel;
    readonly dateAdded: Date;

    constructor(
        name: nameModel,
        ipAddress: ipAddressModel, 
        dateAdded: Date,
    ){
        if( name != null && ipAddress != null && dateAdded != null)
        {
            this.name=name;
            this.ipAddress=ipAddress;
            this.dateAdded=dateAdded; 
        }
        else {
            throw new Error("Invalid name, ip address or date");
        }
        
    }
}