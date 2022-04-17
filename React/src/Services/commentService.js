import axios from 'axios';

const url = '/api/comments/';

const getAllComments = async() => {
    const res = await axios.get(url);
    console.log("calling out to api");
    console.log(res.data)
    return res.data;
}

const getCommentsByUserId = async (user_id) => {
    const res = await axios.get(url + '/' + user_id);
    return res.data;
}

const addNewComment = async(comment) => {
    const res = await axios.post(url, {comment: comment})
    return res.status == 200
}

const commentService = {
    getAllComments,
    getCommentsByUserId,
    addNewComment
}

export default commentService;