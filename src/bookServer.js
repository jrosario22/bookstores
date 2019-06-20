
var pg = require('pg');
const express = require("express");
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

let options = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432
}

var pool = new pg.Pool(options);

// Opens access to database
pool.connect()
.then( res => {
    pool.query('create table if not exist books (id serial primary key, ibsn text, title text, author text, category, imageurl text)')
    .then( res => { 
        console.log('done');
    })
    .catch( err => console.log(err));
})
.catch( err => console.log(err));

app.use(cors());            // Allows us to use http
app.use(bodyParser.json()); // Parse data
app.use(express.json());    // Parse data

// Get bookstores from database
app.get('/books', (req, res) => {
    pool.query("select * from books")
        .then(response => {
            res.send(response.rows);
        })
        .catch(err => { console.log(err) });
});

// Post data that is collected from the form
app.post('/books', (req, res) => {
    console.log(req.body)
    let ibsn = req.body.ibsn;
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let imageurl = req.body.imageurl;
    let text = "insert into books (ibsn,title, author, category,imageurl) values ($1,$2,$3,$4,$5)";
    let values = [ibsn, title, author, category, imageurl];

    pool.query(text, values)
        .then(response => {
            console.log(response);
            res.send('its good');
        })
        .catch(err => {
            console.log(err);
            res.send('not good')
        })
});

app.delete('/books', (req, res) => {
    let text = "delete from books where (id) = ($1)";
    let id = [id];

    pool.query(text, id)
    .then(response => {
        console.log(response);
        res.send('deleted');
    })
    .catch(err => console.log(err))
})

//pool.end();

// Opens port
app.listen(3002, function () {
    console.log('App listening on port 3002!');
});