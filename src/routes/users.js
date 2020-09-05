const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/',  (req, res) => {
  res.send('this is users page');
})

router.post('/', (req, res) => {
  const user = new User({
    name: req.body.name,
    description: req.body.description
  });

  user.save().then( data => {
    res.json(data)
  }).catch(err => {
    res.json({message: err})
  })
})

module.exports = router;