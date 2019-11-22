const router = require('express').Router();
const dotenv = require("dotenv");
const mysql = require('mysql');

//creating connection to mysql database
const connection = mysql.createConnection({
    database: process.env.DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

//GET students
router.get('/', (req, res) => {
    connection.query('SELECT * FROM Student', (err, result) => {
        if(err) throw err
        res.send(result);
    })
})

//GET students by id
router.get('/:id', (req, res) => {
    connection.query('SELECT * FROM Student WHERE student_id = ?', [req.params.id], (err, result) => {
        if(err) throw err
        res.send(result);
    })
})

//POST - create new student
router.post('/', (req, res) => {
    connection.query('INSERT INTO Student SET ?', req.body, (err, result) => {
        if(err) throw err
        res.send(result);
    })
})


module.exports = router;