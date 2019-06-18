
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



pool.connect((err, client, done) => { });



// function hello() {
//     console.log("you and the people are all voting for the mayor");
// }

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/bookstores', (req, res) => {

    pool.query("select * from bookstores")
        .then(response => {
            // for (var i = 0; i < response.rowCount; i++) {
            //     allEntries = "name: " + response.rows[i].name + " " + "address: " + response.rows[i].address /*+ " " + res.rows[i].imageurl */;
            //     console.log(allEntries);

            res.send(response.rows);
        })
        .catch(err => { console.log(err) });
    // .catch(err => { res.send([]);});

    // res.send(getAllStores());

});




app.post('/bookstores', (req, res) => {
    console.log(req.body)
    let name = req.body.name;
    let address = req.body.address;
    let imageurl = req.body.imageurl;
    const text = "insert into bookstores (name,address,imageurl) values ($1,$2,$3)"
    const values = [name, address, imageurl]

    
    pool.query(text, values)
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err))
});

//pool.end();

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});