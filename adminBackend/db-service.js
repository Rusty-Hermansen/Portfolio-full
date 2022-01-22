const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config()

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "wireguard_db",
    database: "postgres",
})

const addConfig = async () => {
    const res= await pool.query(
    `INSERT INTO wireguard.client (
        client_name, 
        client_ip_address, 
        client_allowed_ip_address_range, 
        client_public_key, 
        client_private_key
        client_date_added) VALUES ( $1, $2, $3, $4, $5, $6)
        RETURNTING *`,
        [config.name, config.ipAddress, config.allowedIpRange, config.publicKey, config.privateKey, confog.dateAdded]
    );
    return res.rows[0];
}
module.exports.dbService= {
    addConfig
}