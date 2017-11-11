var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var user = [];
var waitlist = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  app.get("/api/table", function(req, res) {
    res.json(user);
  });
  app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
  });


app.post("/reservation", function(req, res) {
    var newReservation = req.body;
    
    res.json(newReservation);

    if (user.length < 5) {
        user.push(newReservation);
    } else {
      waitlist.push(newReservation);
    }

  });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


