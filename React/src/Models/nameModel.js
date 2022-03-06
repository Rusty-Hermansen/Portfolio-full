
export default class nameModel {
    name

    constructor(
        name
    ){
        if(this.validName(name) === true)
        {
            this.name=name;
        }
        else {
            throw new Error("Invalid username entry")
        }
        
    }

    validName = (newName) => {
        return /^[a-z0-9]+$/i.test(newName) && this.name.trim().length > 6;
    }
}