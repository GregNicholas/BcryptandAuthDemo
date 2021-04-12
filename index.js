const express = require('express');
const app = express();
const User = require('./models/user');

const bcrypt = require('bcrypt');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/secret', (req, res) => {
    res.send('THIS IS SECRET! you cannot see me unless you are logget in')
})

app.listen(3000, () => {
    console.log("SERVING YOUR APP!")
})