


export default class nameModel {
    readonly name: string
    private readonly MINCHARS: number = 6; 
    private readonly MAXCHARS: number = 20;
    private readonly REGEX: RegExp = /^[a-z0-9]+$/i
  
    constructor(
        name: string,
    ){
        if(name != null && this.validName(name) === true)
        {
            this.name=name;
        }
        else {
            throw new Error("Invalid username entry, a username should be between "+ this.MINCHARS + " and " + this.MAXCHARS + " characters long and only use a-z and 0-9.")
        }
        
    }

    validName = (newName: string) => {
        const trimmedName = newName.trim();
        return trimmedName.length >= this.MINCHARS && trimmedName.length <= this.MAXCHARS && this.REGEX.test(newName);
    }
}