import axios from 'axios'

const URL = '/api'

const uploadImage = async ({ image }) => {
    try {
        const formData = new FormData()
        formData.append('image', image)

        const result = await axios.post(URL+'/images/', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        return result.data;
    }
    catch (ex) {
        console.error("Error uploading image " + ex);
    }
}

const downloadImage = async imageKey => {
    const imageUrl = await axios.get(URL + '/images/' + imageKey)
    return imageUrl.data
}

const imageService = {
    uploadImage,
    downloadImage,
}

export default imageService