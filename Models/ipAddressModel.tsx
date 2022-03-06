export default class ipAddressModel {
    ipAddress: string

    constructor(
        ipAddress: string,
    ){
        if(this.validName(ipAddress) === true)
        {
            this.ipAddress=ipAddress;
        }
        else {
            throw new Error("Invalid ip address entry")
        }
        
    }

    validName = (newName: string) => {
        return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(newName);
    }
}