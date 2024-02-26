const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

//middleware adding
app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload());

// db connection
const db = require('./config/database');
db.connect();

// cloudinary connection
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

// api route mount
const Upload = require('./routes/FileUpload');
app.use('/api/v1/upload', Upload);

//activate server
app.listen(PORT , ()=>{
    console.log('server listening on port '+PORT);
})