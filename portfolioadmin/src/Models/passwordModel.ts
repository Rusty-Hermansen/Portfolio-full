export default class passwordModel {
    password: string | null
    private readonly MINCHARS: number = 6; 
    private readonly MAXCHARS: number = 30;
    private consumed: boolean = false;
    private readonly REGEX: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/; 

    constructor(
        password: string,
    ){
        if(password != null && this.validPassword(password) === true)
        {
            this.password=password;
        }
        else {
            throw new Error("Invalid password entry, a password should be between " + this.MINCHARS + " and " + this.MAXCHARS + " characters")
        }
        
    }

    value = () => {
        if(this.consumed === false){
            const clonedPassword = this.password; 
            this.password = null; 
            return clonedPassword;
        }
        else {
            throw new Error("Password has already been consumed");
        }
    }

    validPassword = (newPassword: string) => {
        return this.password != null &&
        this.password.trim().length >= this.MINCHARS
        && this.password.trim().length <= this.MAXCHARS
        && this.REGEX.test(newPassword);
    }
}