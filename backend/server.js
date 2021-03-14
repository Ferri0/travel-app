const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

let countries = [];
const Country = require('./countries/countries.schema');
const Users = require('./users/users-schema');
const mongoURL = 'mongodb+srv://IgorAleks88:Veremiy1988@cluster0.abmvg.mongodb.net/travel-app?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '../dist')));


app.get('/api/countries', (req, res) => {
  res.send(JSON.stringify(countries));
});

app.post('/api/login', async (req, res) => {
  const userArray = await Users.find({});
  const currentUser = userArray.find((user) => user.name === req.body.name);
  let result = "wrongUser"
  if (currentUser) {
    if (currentUser.pass !== req.body.pass) {
      result = "wrongPassword"
    } else {
    result = "ok";
    }
  }
  res.send(result);
});

app.post('/api/register', async (req, res) => {
  const userArray = await Users.find({});
  const currentUser = userArray.find((user) => user.name === req.body.name);
  let result = "ok"
  if (currentUser) {
    result = "userExists"   
  } else {
    Users.create({name:req.body.name, pass: req.body.pass});
  }
  res.send(result);
});

const PORT = process.env.PORT || 3000;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  app.listen(PORT);
  Country.find({}).then(res => {
    countries = res;
  });
})
