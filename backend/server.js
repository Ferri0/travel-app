const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
let countries = [];
const Country = require('./countries/countries.schema');

const mongoURL = 'mongodb+srv://IgorAleks88:Veremiy1988@cluster0.abmvg.mongodb.net/travel-app?retryWrites=true&w=majority';

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/countries', (req, res) => {
  res.send(JSON.stringify(countries));
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
