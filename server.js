//import modules
const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan')
require('dotenv').config()

const app = express();
const port = 4000;
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//create connection 
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

//get default connection
let db = mongoose.connection;

//handles error and connections
db.on('err', console.error.bind(console, 'connection error: '))
db.once('open', () => console.log('connected to mongod database'))

//requires routes
const apiRoutes = require('./routes/apiRoutes.js')
app.use('/api', apiRoutes)

app.listen(port, console.log(`Server listening on port:${port}`))

module.exports = app;
