export default class passwordModel {
    password

    constructor(
        password
    ){
        if(this.validPassword(password) === true)
        {
            this.password=password;
        }
        else {
            throw new Error("Invalid password entry")
        }
        
    }

    validPassword = (newPassword) => {
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/.test(newPassword) 
        && this.password.trim().length > 6;
    }
}