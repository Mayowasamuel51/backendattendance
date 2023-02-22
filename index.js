const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const cors = require('cors');

const simpleroutes = require('./routes/simpleroutes')

// database connect...............................
const dotenv = require('dotenv')
const dotenvb = require('dotenv').config();
mongoose.connect(process.env.MYDATABASE).then((data) => {
    console.log('DATABASE IS WORKING.........')
}).catch((err) => {
    console.log(err)
})
/// database connect ends here ......................
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())



app.use('/api', simpleroutes)

app.listen(8080, function () {
    console.log('server is runnning ')
})