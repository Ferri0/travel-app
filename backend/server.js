const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const countries = require('./countries/data-of-countries');

const mongoURL = 'mongodb+srv://IgorAleks88:Veremiy1988@cluster0.abmvg.mongodb.net/app?retryWrites=true&w=majority';

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

async function start() {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    // console.log('ololo');
    app.listen(PORT);
  } 
  catch (e) {
    console.log(e);
  }
}

start();

// app.listen(PORT);

