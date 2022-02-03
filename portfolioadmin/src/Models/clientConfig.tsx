

export default class ClientConfig {
    name: string;
    ipAddress: string;
    dateAdded: Date;
    ipRange: string;

    constructor(
        name: string,
        ipAddress: string, 
        dateAdded: Date,
        ipRange: string, 
    ){
        this.name=name;
        this.ipAddress=ipAddress;
        this.dateAdded=dateAdded;
        this.ipRange=ipRange;
    }
}