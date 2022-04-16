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

const deleteSession = async (session_id) => {
    const res = await pool.query(`
    DELETE FROM portfolio_post.session WHERE session_id = $1;
    `,[session_id])
}

const getSession = async (user_id) => {
    const res = await pool.query(
        `SELECT * FROM portfolio_post.session WHERE user_id = $1;`,
        [user_id]
    )
    if(res.rowCount > 0){
        return res.rows[0]
    }
    else {
        return null
    }
}

const getSessionBySessionId = async (session_id) => {
    const res = await pool.query(
        `SELECT * FROM portfolio_post.session WHERE session_id = $1;`,
        [session_id]
    )
    if(res.rowCount > 0){
        return res.rows[0]
    }
    else {
        return null
    }
}

const getAllComments = async () => {
    const res = await pool.query(
        'SELECT * FROM portfolio_post.comment;'
    )
    console.log(res.comment)
    if(res.rowCount > 0){
        return res.rows
    }
    else {
        return null
    }
}

const getCommentsByUserId = async (id) => {
    const res = await pool.query(
        `SELECT portfolio_post.user.email, portfolio_post.user.fullname, portfolio_post.comment.comment FROM portfolio_post.user_comment
        INNER JOIN portfolio_post.user ON portfolio_post.user_comment.user_id = portfolio_post.user.id
        INNER JOIN portfolio_post.comment ON portfolio_post.user_comment.id = portfolio_post.comment.id where portfolio_post.user.id = $1;`,
        [id]
    )
    if(res.rowCount > 0){
        return res.rows[0]
    }
    else {
        return null
    }
    
}

const addNewComment = async (comment) => {
    const res = await pool.query(
        `INSERT INTO portfolio_post.comment VALUES($1);`,
        [comment]
    )
    res.send(200);
}

// !!!This is for when authetication actually works!!!
// const addNewComment = async (comment, user_id ) => {
//      const res = await pool.query(
//     `INSERT INTO portfolio_post.comment VALUES($1) returning id;`
//     [comment]
//  )
//  const res2 = await pool.query(
//      `INSERT INTO portfolio_post.user_comment VALUES ($1, $2);`
//      [user_id, res2.id]
//  )
//  res.send(200)
// }


module.exports.queries = {
     getPostById, 
     getPosts, 
     storeSession, 
     deleteSession, 
     getSession,
     getSessionBySessionId,
     getAllComments,
     getCommentsByUserId,
     addNewComment
     };