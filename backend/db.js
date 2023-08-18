const express = require('express');
const api = express();
const { 
    createPool
} = require('mysql2');

const pool = createPool({
    host:"localhost",
    user:"root",
    password: "root222",
    database: "orion",
    connectionLimit: 10
})

pool.query('select * from students', (err, res, fields) =>{
    if (err) return console.log(err);
    return console.log(res)
} )