const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(
        console.log('connection successful')
    )
    .catch((err) =>{
        console.log('Error connecting');
        console.error(err);
        process.exit(1);
    })
}