const MINCHARS = 6; 
const MAXCHARS = 20;
const REGEX = new RegExp(/^[a-z0-9]+$/i);

export default class nameModel {
    name
   
    constructor(
        name
    ){
        if(name != null && this.validName(name) === true)
        {
            this.name=name;
        }
        else {
            throw new Error("Invalid username entry, username should be between " + MINCHARS + " and " + MAXCHARS + " characters and have a-z and 0-9 characters.")
        }
        
    }

    validName = (newName) => {
        return newName != null &&
        this.name.trim().length >= this.MINCHARS
        && this.name.trim().length <= this.MAXCHARS &&
        REGEX.test(newName);
    }
}