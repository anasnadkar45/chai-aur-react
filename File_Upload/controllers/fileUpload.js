const {File} = require('../models/File');
const cloudinary = require('cloudinary').v2;

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log('file' + file);

        let path = __dirname + '/files/' + Date.now() + '.' + `${file.name.split('.')[1]}`;
        console.log('path' + path);

        file.mv(path, (err) => {
            console.log(err);
        });

        res.json({
            success: true,
            message: 'local file uploaded successfully'
        });

    } catch (err) {

        console.log(err);
    }
};

function isFileTypeSupported(fileType, supportedTypes) {
    return supportedTypes.includes(fileType)
}

async function uploadFileToCloudinary(file, folder) {
    const options = { folder }
    return await cloudinary.uploader.upload(file.tempFilePath, options)
}
exports.imageUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile
        console.log(file);

        const supportedTypes = ["jpg", "png", "jpeg"];
        const fileNameParts = file.name.split('.');
        const fileType = fileNameParts[fileNameParts.length - 1].toLowerCase();

        console.log("file type :", fileType)

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File type not supported'
            })
        }

        const response = await uploadFileToCloudinary(file, "codehelp");
        console.log(response);

        //adding to the db
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success: true,
            imageUrl:response.secure_url,
            message: 'File successfully uploaded'
        })

    } catch (err) {
        console.error(err);
        res.status(400).json({
            success: false,
            message: "some error occurred while uploading"
        })
    }
}