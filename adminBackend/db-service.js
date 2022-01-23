const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

const addConfig = async (config) => {
    const res= await pool.query(
    `INSERT INTO wireguard.client (
        client_name, 
        client_ip_address, 
        client_allowed_ip_address_range, 
        client_public_key, 
        client_private_key
        client_date_added) VALUES ( $1, $2, $3, $4, $5, $6)
        RETURNTING *`,
        [config.name, config.ipAddress, config.allowedIpRange, config.publicKey, config.privateKey, config.dateAdded]
    );
    return res.rows[0];
}
module.exports.dbService= {
    addConfig
}