const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres');

const Bookstores = sequelize.define('bookstores', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    imageurl: Sequelize.STRING
});


Bookstores.sync()
.then(() => {
    console.log("Bookstores is now ready to be used");
})
.catch(err => {
    console.log(err);
});

app.get('/bookstores', (req, res) => {
    Bookstores.findAll({
        attributes: ['id','name','address','imageurl'],
    });
    console.log("Here");
});

app.post('/bookstores', (req, res) => {
    Campus.create({
        name: req.body.name,
        address: req.body.address,
        imageurl: req.body.imageurl
    });
});