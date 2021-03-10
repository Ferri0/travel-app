const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
// const countries = require('./countries/data-of-countries');
const Country = require('./countries/country.schema');

const mongoURL = 'mongodb+srv://IgorAleks88:Veremiy1988@cluster0.abmvg.mongodb.net/travel-app?retryWrites=true&w=majority';

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

let countries = [];

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
    app.listen(PORT);
    Country.find({}).then(res => {
      countries = res;
      
    }

    )
    
  } 
  catch (e) {
    console.log(e);
  }
}

start();

// app.listen(PORT);

