const dbConnect = require("./db/dbConnect");

const express = require("express");
var bodyParser = require('body-parser')
const app = express();

const User = require("./db/userModel");

dbConnect();

const jsonParser = bodyParser.json()

app.post("/users", jsonParser, (req, res) => {
  const user = new User({
    id:req.body.id,
    name:req.body.name,
    userName:req.body.userName,
    imgLink:req.body.imgLink
  });

  user
    .save()
    .then((result) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(201).send({
        message: "User Created Successfully",
        result,
      });
    })
    .catch((error) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(500).send({
        message: "Error creating user",
        error,
      });
    });
});

app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user.id] = user;
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).send({
        message: "All users",
        userMap,
      });
  });
});

module.exports = app;
