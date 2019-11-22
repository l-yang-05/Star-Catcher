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

//GET run 
router.get('/', (req, res) => {
    connection.query('SELECT * FROM Run', (err, result) => {
        if(err) throw err
        res.send(result);
    })
})

//POST - create new run and categories that go with them
router.post('/', (req, res) => {
   
    connection.beginTransaction(function(err) {
        //insert into run
        if(err)throw err;
        connection.query('INSERT INTO Run SET ?', req.body, function(err, results, fields){
            if(err){
                connection.rollback(function(){
                    throw err;
                });
            }

        //categories
        const value = [[results.insertId], [results.insertId], [results.insertId], [results.insertId], [results.insertId], [results.insertId], [results.insertId], [results.insertId], [results.insertId], [results.insertId], [results.insertId], [results.insertId]];
        connection.query('INSERT INTO Category(category_type, tallies, run_id) VALUES("A", NULL, ? ), ("B", NULL, ?), ("C", NULL, ?), ("D", NULL, ? ), ("E", NULL, ? ), ("F", NULL, ? ), ("G", NULL, ? ), ("H", NULL, ? ), ("I", NULL, ?), ("J", NULL, ?), ("K", NULL, ?), ("L", NULL, ?)', value, (err, result) => {

           if(err){
                connection.rollback(function(){
                    throw err;
                })
            }
            connection.commit(function(err){
                if(err){
                    connection.rollback(function(){
                        throw err;
                    })
                }
                console.log('success!');
                res.send(result)
            })
        })
    })  
})
})


//GET runs and category by id
router.get('/:id', (req, res) => {
    connection.query('SELECT * FROM Run AS r INNER JOIN Category AS c ON r.run_id = c.run_id WHERE c.run_id = ?', [req.params.id], (err, result) => {
        if(err) throw err
        res.send(result);
    })
})

module.exports = router;