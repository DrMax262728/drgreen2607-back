const express = require('express');
const app = express();
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
require('dotenv/config');

app.use(BodyParser.json())

// import routesvar
const users = require('./routes/users');

app.use('/users', users);

// routes
app.get('/', (req, res) => {
  res.send('We are on home');
});


// start server
app.listen(3131, () => {
  mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true } , (err) => {
    if (err) {
      console.log(err);
      return
    }
    console.log('connected to db!')
  })


  console.log('server is started...')
});