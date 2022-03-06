import ipAddressModel from "./ipAddressModel";
import nameModel from "./nameModel";


export default class ClientConfig {
    name: nameModel;
    ipAddress: ipAddressModel;
    dateAdded: Date;

    constructor(
        name: nameModel,
        ipAddress: ipAddressModel, 
        dateAdded: Date,
    ){
        this.name=name;
        this.ipAddress=ipAddress;
        this.dateAdded=dateAdded; 
    }
}