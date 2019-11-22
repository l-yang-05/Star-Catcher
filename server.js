require('dotenv').config(); //.env to keep variables private
const express = require('express'); //node web framework
const morgan = require('morgan'); //to check api endpoints
const path = require('path');//node module which lets us access file system
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));//url encoding parsing middleware
app.use(express.json());//json parsing middleware

app.use(morgan('dev'));//lets you test your endpoints in your console

//serves up static sites when in production environment
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//connects api routes
const studentRoutes = require('./routes/studentRoutes');
const runRoutes = require('./routes/runRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
app.use('/category', categoryRoutes);
app.use('/students', studentRoutes);
app.use('/runs', runRoutes);

//sends files to the react app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//console logs when server is up and running
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
