
export default class keyModel {
    key: string

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
        return /^[a-z0-9\/\+]+=$/i.test(newKey) && this.key.trim().length === 44;
    }
}