const express = require('express');
const router = require('./routes/routes');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

dotenv.config();

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.use(router);
server.engine('html', mustacheExpress());
server.set('view engine', 'html');
server.set('views', __dirname + '/views');

server.listen(process.env.PORT || 3001, () => console.log('Server is running on port 3001'));