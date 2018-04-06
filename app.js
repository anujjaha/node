const express   = require('express')
const app       = express();
const Sequelize = require('sequelize')
const port      = 3000
const routes    = require('./routes/router')
const bodyParser = require('body-parser');
const helpers   = require('./helpers');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.h = helpers;
    next();
});

app.use('/', routes)

app.listen(port, () => {
    console.log("NODE Running on " + port);
});