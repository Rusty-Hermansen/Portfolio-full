const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});


// const getPostById = async (Id) => {
//     const res = await pool.query(
//         `select p.title, concat(t.text_content, i.image_url) as post
//         from portfolio_post.post_position pp 
//     INNER JOIN portfolio_post.post p 
//         ON p.id = pp.portfolio_post_id 
//     INNER JOIN portfolio_post.position pos 
//         ON pos.id = pp.post_position_id 
//     LEFT JOIN portfolio_post.text t 
//         ON t.id=pp.post_text_id 
//     LEFT JOIN portfolio_post.image i 
//         ON i.id= pp.post_image_id
//         WHERE p.id = $1
//     ORDER BY pos.position asc;`, [Id])
//     return res.rows;
// }


const getPostById = async (Id) => {
    const res = await pool.query(
        `select p.title, p.post_content as post
        from portfolio_post.post p
        WHERE p.id = $1;`, [Id])
    return res.rows[0];
}

const getPosts = async () => {
    const res = await pool.query('select * from portfolio_post.post;')
    return res.rows

}

const addPost = (request, response) => {

}

const updatePost = (request, response) => {

}

const deletePost = (request, response) => {

}




const storeSession = async (session_id, user_id, session_expiration) => {
    const res = await pool.query(`
    INSERT INTO portfolio_post.session(session_id, user_id, session_expiration) VALUES ($1, $2, $3) returning user_id;`,
    [session_id, user_id, session_expiration])
}

const deleteSession = async (user_id) => {
    const res = await pool.query(`
    DELETE FROM portfolio_post.session WHERE user_id = $1;
    `,[user_id])
}

const getSession = async (user_id) => {
    const res = await pool.query(
        `SELECT * FROM portfolio_post.session WHERE user_id = $1;`,
        [user_id]
    )
}
module.exports.queries = { getPostById, getPosts, storeSession, deleteSession, getSession };