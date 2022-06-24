var models = require('../models');

module.exports = {
  get: function (req, res) {

    models.messages.getAll((err, data) => {
      if (err) {
        res.writeHead(400);
        res.end('errored out');
      } else {
        res.writeHead(200);
        res.end(JSON.stringify(data));
      }
    });


  }, // a function which handles a get request for all messages



  post: function (req, res) {
    // let username = req.body.username;
    // let message = req.body.message;
    // let roomname = req.body.roomname;
    if (req.body.message) {
      models.messages.create(req.body, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(JSON.stringify(data));
        }
      });
    }
  } // a function which handles posting a message to the database
};
