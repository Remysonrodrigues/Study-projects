const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const myLogger = function(req, res, next) {
    console.log('LOGGER');
    next();
};

app.use(bodyParser.json());
app.use(myLogger);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));