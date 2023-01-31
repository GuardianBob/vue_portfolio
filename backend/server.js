var express = require("express");
require('dotenv').config();
var bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const host = process.env.DOMAIN;

// console.log('reached server.js')

var corsOptions = {
  exposedHeaders: ['refresh-token'],
  origin: '*',
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Access-Control',
    'Authorization',
    'Cache-Control',
    'Content-Language',
    'Expires',
    'Last-Modified',
    'Pragma',
    'x-Access-Token',
    'Access-Control-Allow-Origin',
  ],
  crossdomain: true,
  // methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  // credentials: true
};
// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/routes/user.routes')(app);

app.get('/', (req, res) => {
  res.send('Working');
  console.log('hit the server')
});


// app.post(
//     "/db/movie/test_add",
//     // [authJwt.verifyToken],
//     // console.log("made it to the routes file..."),
//     movie.test_add
// );
  
// app.post(
//     "/db/movie/test_connect",
//     // [authJwt.verifyToken],
//     // console.log("made it to the routes file..."),
//     movie.test_connect
//   );
let server = app.listen(port, () => console.log(`Express server listening at ${host} on port ${port}`));