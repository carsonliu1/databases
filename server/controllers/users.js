var models = require('../models');


//take info from models and send them to client
module.exports = {
  //apps.get
  get: function (req, res) {
    // models.users.getAll((err, data) => {
    //   if (err) {
    //     res.writeHead(400);
    //     res.end('errored out');
    //   } else {
    //     res.writeHead(200);
    //     res.end(JSON.stringify(data));
    //   }
    // });


    models.users.getAll(result => {
      res.writeHead(200);
      res.end(JSON.stringify(result));
    });
  },

  // post: function (req, res) {
  //   let user = req.body.username;

  //   models.users.create(user, (err, data) => {
  //     if (err) {
  //       res.writeHead(400);
  //       res.end('err');
  //     } else {
  //       res.writeHead(201);
  //       res.end(JSON.stringify(data));
  //     }
  //   });
  // }

  post: function (req, res) {
    let user = req.body.username;
    if (user) {
      models.users.create(user, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
    }
  }
};
