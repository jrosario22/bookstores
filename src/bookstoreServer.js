
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
    pool.query('create table if not exists bookstores (id serial primary key, name text, address text, imageurl text)')
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
app.get('/bookstores', (req, res) => {
    pool.query("select * from bookstores")
        .then(response => {
            res.send(response.rows);
        })
        .catch(err => { console.log(err) });
});

// Post data that is collected from the form
app.post('/bookstores', (req, res) => {
    console.log(req.body)
    let name = req.body.name;
    let address = req.body.address;
    let imageurl = req.body.imageurl;
    let text = "insert into bookstores (name,address,imageurl) values ($1,$2,$3)";
    let values = [name, address, imageurl];

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

// Delete store from Database
app.delete('/bookstores/:id', (req, res) => {
    let id = req.params.id;
    let text = "delete from bookstores where (id) = ($1)";
    let values = [id];

    pool.query(text, values)
    .then(response => {
        console.log(response);
        res.send('deleted');
    })
    .catch(err => console.log(err))
})

//pool.end();

// Opens port
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});