
export default class nameModel {
    name: string

    constructor(
        name: string,
    ){
        if(this.validName(name) === true)
        {
            this.name=name;
        }
        else {
            throw new Error("Invalid username entry")
        }
        
    }

    validName = (newName: string) => {
        return /^[a-z0-9]+$/i.test(newName) && this.name.trim().length > 6 && this.name.trim().length < 20;
    }
}