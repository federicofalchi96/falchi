// var http = require("http");

// //create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Hello mauro");
});

app.listen(3000);
