const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'nodes-project',
    socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
    port : 8889
});

db.connect((error)=>{
    if (error) {
        console.error(error)

    }
    else{
        console.log('Mysql Connected...');
    }
});

const port = 4000;

app.get('/',(req,res) => {
    res.send('<h1>HOME PAGE</h1>')

});
app.listen(port,()=> {
    console.log(`Server started on port ${port}`)
});