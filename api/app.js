const express = require('express')
const app = express();
const mongoose = require('mongoose');
const userRoute  = require('./routes/user');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
require('dotenv').config();



//  mongoose.connect(process.env.MONGODB_URI)
//  .then(() => {
//     console.log('Connected to MongoDB');
//  })
//     .catch(err => {
//             console.error('MongoDB connection error:', err);
//     });
const connectWithDatabase = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
connectWithDatabase();

app.use(bodyParser.json());


app.use(fileupload({
    useTempFiles: true,
    // tempFileDir: '/tmp/'
}));

app.use('/user',userRoute)

module.exports = app;
