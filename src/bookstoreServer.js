
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
let getAllStores = "";
pool.connect((err, client, done) => {
    getAllStores = () => {
        client.query("select * from bookstores")
            .then(response => {
                for (var i = 0; i < response.rowCount; i++) {
                    allEntries = "name: " + response.rows[i].name + " " + "address: " + response.rows[i].address /*+ " " + res.rows[i].imageurl */;
                    console.log(allEntries);
                }
                return allEntries
            })
            .then(allEntries => {
                render(allEntries);
            })

            .catch(err => { });
    }
    // const getAllStores = "select * from bookstores";
    // client.query(getAllStores)
    //     .then(response => {
    //         for (var i = 0; i < response.rowCount; i++) {
    //             allEntries = "name: " + response.rows[i].name + " " + "address: " + response.rows[i].address /*+ " " + res.rows[i].imageurl */;
    //             console.log(allEntries);
    //         }
    //     })
    //     .catch(err => { });

    // const addStore = {
    //     const {name, address, imageurl} = req.body;
    //     text: "insert into bookstores (name,address,imageurl) values ($1,$2,$3)",
    //     values: [name, address, imageurl]
    // }
    // client.query(addStore)
    //     .then(response => {
    //         console.log(response);
    //     })
})

function hello() {
    console.log("you and the people are all voting for the mayor");
}

app.use(cors());


app.get('/bookstores', (req, res) => {
    //getAllStores();

    hello();
    console.log("me me me me ")
    res.send(getAllStores());

});

app.post('/bookstores', (req, res) => {

});

pool.end();

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});