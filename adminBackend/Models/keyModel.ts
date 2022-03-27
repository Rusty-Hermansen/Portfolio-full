

export default class keyModel {
    readonly key: string
    private readonly LENGTH: number = 44;
    private readonly REGEX: RegExp = /^[a-z0-9]+$/i

    constructor(
        key: string,
    ){
        if(this.validKey(key) === true)
        {
            this.key=key;
        }
        else {
            throw new Error("Invalid key entry")
        }
        
    }

    validKey = (newKey: string) => {
        return newKey != null && 
        this.key.trim().length === this.LENGTH && 
        this.REGEX.test(newKey);
    }
}