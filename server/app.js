const dbConnect = require("./db/dbConnect");

const express = require("express");
var bodyParser = require('body-parser')
const app = express();

const User = require("./db/userModel");
const News = require("./db/newsModel")

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
      res.status(200).send({
        status: 200,
        message: "User Created Successfully",
        result,
      });
    })
    .catch((error) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(500).send({
        status: 500,
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
        status: 200,
        message: "All users",
        userMap,
      });
  });
});



app.post("/news", jsonParser, (req, res) => {
  const news = new News({
    id:req.body.id,
    title:req.body.title,
    imgLink:req.body.imgLink,
    newsText:req.body.newsText,
    date:req.body.date
  });

  news
    .save()
    .then((result) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).send({
        status: 200,
        message: "News Created Successfully",
        result,
      });
    })
    .catch((error) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(500).send({
        status: 500,
        message: "Error creating news",
        error,
      });
    });
});

app.get('/news', function(req, res) {
  News.find({}, function(err, news) {
    var newsMap = {};

    news.forEach(function(n) {
      newsMap[n.id] = n;
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).send({
        status: 200,
        message: "All users",
        newsMap,
      });
  });
});

app.put("/news", jsonParser, (req, res) => {
  const filter = {id : req.body.id}
  const update = {
    title:req.body.title,
    imgLink:req.body.imgLink,
    newsText:req.body.newsText,
    date:req.body.date
  }

  News.findOneAndUpdate(filter, update, {
    new:true
  }).then((result) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).send({
        status: 200,
        message: "News Updated Successfully",
        result,
      });
    })
    .catch((error) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(500).send({
        status: 500,
        message: "Error updating news",
        error,
      });
    });
});

module.exports = app;
