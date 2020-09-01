const express = require('express');
const db = require('./db')
const Main = require('./controllers/main')

const app = express();

// mongo
const mongoUrl = "mongodb://localhost:27017";

app.get('/', Main.main);

db.connect( mongoUrl,(err) => {
  if (err) {
    return console.log(err)
  }

  app.listen(3333, () => {
    console.log('Server started!')
  })
});

