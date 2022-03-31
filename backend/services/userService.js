const { Pool } = require('pg')
const dotenv = require('dotenv')
const { OAuth2Client} = require('google-auth-library');

dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const clientId = '517884522717-4i5ciriig1fm3uondq2ch65brkgrjs92.apps.googleusercontent.com'
const getUserInfoByEmail = async (email) => {
    const res = await pool.query(
        `SELECT * FROM portfolio_post.user WHERE email = $1;`, 
    [email])
    if(res.rowCount > 0){
        return res.rows[0];
    }
    else {
        return null
    }
}

const createUser = async (email, fullName, joke, iceCream, age, nickname) =>{
    console.log("Create user method email and fullname: " + email +" " + fullName);
    const res = await pool.query(
        `INSERT INTO portfolio_post.user(email, fullName, joke, iceCream, age, nickname)
         VALUES($1, $2, $3, $4, $5, $6);`,
         [email, fullName, joke, iceCream, age, nickname]
    )}

const authenticateUser = async(token) =>{
    console.log("This is the token in the service " + token)
    const client = new OAuth2Client(clientId)
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientId
    })

    const payload = ticket.getPayload();
    console.log( `User ${payload.name} verified`);

    const {sub, email, name, picture} = payload;
    const userId = sub;
    return { userId, email, fullName: name, photoUrl: picture};
}   

const logoutUser = async(token) => {
    console.log("revoking token " + token)
    const result = await OAuth2Client.revokeToken(token);

}

    module.exports.userService = {
        getUserInfoByEmail,
        createUser, 
        authenticateUser,
        logoutUser
    }