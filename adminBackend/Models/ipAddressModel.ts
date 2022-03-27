
export default class ipAddressModel {
    readonly ipAddress: string
    private readonly IPLENGTH: number = 15
    private readonly REGEX: RegExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
    
    constructor(
        ipAddress: string,
    ){
        if(this.validIpAddress(ipAddress) === true)
        {
            this.ipAddress=ipAddress;
        }
        else {
            throw new Error("Invalid ip address entry")
        }
        
    }

    validIpAddress = (newIpAddress: string) => {
        return newIpAddress != null && this.ipAddress.trim().length <= this.IPLENGTH && this.REGEX.test(newIpAddress);
    }
}