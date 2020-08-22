var express = require("express");
const bodyParser = require('body-parser');
var app = express();
const mountRoutes = require('./routes')
var cors = require('cors')
// var fs = require("fs");
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

mountRoutes(app)

app.get("/", async function(req, res) {
  //    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
  //       console.log( data );
  //       res.end( data );
  //    });
  res.send("Hello World!");
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
