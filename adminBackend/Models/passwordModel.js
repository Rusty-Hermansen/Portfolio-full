const MINCHARS = 6; 
const MAXCHARS = 30;
const REGEX = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);

export default class passwordModel {
    password
    
    constructor(
        password
    ){
        if(password != null && this.validPassword(password) === true)
        {
            this.password=password;
        }
        else {
            throw new Error("Invalid password entry")
        }
        
    }

    validPassword = (newPassword) => {
        return newPassword != null &&
        this.password.trim().length > this.MINCHARS && 
        this.password.trim().length < this.MAXCHARS  &&
        REGEX.test(newPassword);
    }
}