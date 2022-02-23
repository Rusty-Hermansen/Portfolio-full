const {Pool} = require('pg');

const pool = new Pool({
    user: process.env.PF_USER,
    host: process.env.WG_DB_HOST,
    database: process.env.WG_DB,
    password: process.env.PF_PASSWORD,
    port: process.env.WG_DB_PORT
})

const getUser = async(username) => {
    const res = await pool.query(
            `select * from wireguard.user where user_username = $1;`,
            [username]
    )
    return res.rows[0];
}


module.exports.authDbService = {
    getUser
};