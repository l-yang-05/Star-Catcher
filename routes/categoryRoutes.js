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


//get students by run and categories
router.get('/:studentid/:run/:category', (req, res) => {
    let studentID = req.params.studentid
    let run = req.params.run;
    let category = req.params.category;
    //transaction or join
   
    connection.query('SELECT * FROM Student AS s INNER JOIN Run AS r ON s.student_id = r.student_id INNER JOIN Category AS c ON r.run_id = c.run_id WHERE s.student_id = ? && r.run_number = ? && c.category_type = ?', [studentID, run, category], (err, result) => {
        if(err) throw err;
        res.send(result);
    })
})

//get students by run only
router.get('/:studentid/:run', (req, res) => {
        let studentID = req.params.studentid
        let run = req.params.run;

        connection.query('SELECT * FROM Student INNER JOIN Run ON Student.student_id = Run.student_id WHERE Student.student_id = ?' , [studentID], (err, result) => {

        // connection.query('SELECT * FROM Student AS s INNER JOIN Run AS r ON s.student_id = r.student_id WHERE s.student_id = ? && r.run_number = ? ', [studentID, run], (err, result) => {
            if(err) throw err;
            res.send(result);
        })
    })

//update run categories
router.put('/:studentid/:run/:category', (req, res) => {
    let run = req.params.run;
    let category = req.params.category;

    connection.query('UPDATE Category SET ? WHERE run_id = ? && category_type = ?', [req.body, run, category], (err, result) => {
        if(err) throw err;
        res.send(result);
      })
})

module.exports = router;