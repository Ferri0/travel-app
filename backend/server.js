const path = require('path');
const express = require('express');
const countries = require('./data-of-countries/data-of-countries');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/countries', (req, res) => {
  res.send(JSON.stringify(countries));
});

app.get('/api/countries/england', (req, res) => {
  const england = countries.find((country) => country.england)
  res.send(JSON.stringify(england));
});

app.get('/api/countries/italy', (req, res) => {
  const england = countries.find((country) => country.italy)
  res.send(JSON.stringify(england));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
