const dotenv = require("dotenv")
const S3 = require("aws-sdk/clients/s3")
const fs = require("fs")

dotenv.config()

const bucketName = process.env.AWS_BUCKET
const bucketRegion = process.env.AWS_BUCKET_REGION
const bucketAccessKey = process.env.AWS_ACCESS_KEY_ID
const bucketSecretKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3({
  bucketRegion,
  bucketAccessKey,
  bucketSecretKey,
})

//uploads a file to s3
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  }
  return s3.upload(uploadParams).promise()
}

// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  }

  return s3.getObject(downloadParams).createReadStream()
}

module.exports = { uploadFile, getFileStream }
