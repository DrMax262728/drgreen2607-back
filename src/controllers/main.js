const Main = require('../models/main');

exports.main = (req, res) => {
  Main.main( (err, docs) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500);
    }

    res.send(docs)
  } )
}