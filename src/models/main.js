const db = require('../db');

exports.main = (cb) => {
  db.get().collection('users').find().toArray( (err, docs) => cb(err, docs) )
}