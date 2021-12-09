import axios from 'axios'

const url = '/api/posts'

const getPosts = async () => {
 const res = await axios.get(url);
 return res.data;
}

const getPostById = async (id) => {
    const res = await axios.get(url + '/'+ id);
    return res.data;
}

const apiService = { getPosts, getPostById };
export default apiService; 