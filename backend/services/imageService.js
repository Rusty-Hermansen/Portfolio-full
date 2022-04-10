require('dotenv').config();
const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})
//upload
function uploadImage(imageFile) {
    const fileStream = fs.createReadStream(imageFile.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise();
}
// exports.uploadImage = uploadImage;

//download

function downloadImage(fileKey){
    const downloadParams = { 
        Key: fileKey,
        Bucket: bucketName
    }

    const url= s3.getSignedUrl('getObject', downloadParams);
    return url;
}
// exports.downloadImage = downloadImage;
exports.imageService = {uploadImage, downloadImage}