const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')

app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/post');

app.use('/posts', postRoute);

//routes
app.get('/', (req, res) => {
    res.send('Node is Working')
});


//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () =>
        console.log('db connected'));


//How to we leastning t the sserver
app.listen(3000, () => console.log('Server is started'));