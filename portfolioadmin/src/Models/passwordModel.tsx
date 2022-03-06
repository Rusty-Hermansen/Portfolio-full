export default class passwordModel {
    password: string

    constructor(
        password: string,
    ){
        if(this.validPassword(password) === true)
        {
            this.password=password;
        }
        else {
            throw new Error("Invalid password entry")
        }
        
    }

    validPassword = (newPassword: string) => {
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/.test(newPassword) 
        && this.password.trim().length > 6
        && this.password.trim().length < 30;
    }
}