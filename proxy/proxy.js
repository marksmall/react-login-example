const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

const userManagement = require('./api/user-management.js');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

// create our router
const router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  next();
});

/* API */
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// Register routes
router.route('/register').post(userManagement.register);
router.route('/login').post(userManagement.login);
router.route('/logout').post(userManagement.logout);

app.use('/api', router);

// Start the server
app.listen(port);
console.log(`API Proxy listening on: http://localhost:${port}/api`);
