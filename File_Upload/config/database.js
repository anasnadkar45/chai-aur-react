const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(
        console.log('Connection successful')
    )
    .catch((err) =>{
        console.log('Error connecting');
        console.error(err);
        process.exit(1);
    });
}