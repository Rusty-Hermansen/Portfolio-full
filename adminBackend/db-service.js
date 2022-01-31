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
        client_private_key,
        client_date_added) VALUES ( $1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [config.name, config.ipAddress, config.ipRange, config.publicKey, config.privateKey, config.dateAdded]
    );
    const data =  res.rows[0];
    return {
        name: data.name,
        ipAddress: data.ipAddress,
        ipRange: data.ipRange,
        publicKey: data.publicKey,
        privateKey: data.privateKey,
        date: data.date
    }
}

const getConfigByName = async(name) => {
    const res = await pool.query(
        `select * from wireguard.client where name=$1;`,
        [config.name]
    )
    return res.rows;
}
const removeConfig = async = (publicKey) =>{
    const res = await pool.query(`
    DELETE FROM wireguard.client 
    WHERE client_public_key= $1` , [publicKey])
}


module.exports.dbService= {
    addConfig, getConfigByName
}