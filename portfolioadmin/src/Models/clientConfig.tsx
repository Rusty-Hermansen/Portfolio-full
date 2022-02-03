

export default class ClientConfig {
    name: string;
    ipAddress: string;
    dateAdded: Date;

    constructor(
        name: string,
        ipAddress: string, 
        dateAdded: Date,
    ){
        this.name=name;
        this.ipAddress=ipAddress;
        this.dateAdded=dateAdded; 
    }
}