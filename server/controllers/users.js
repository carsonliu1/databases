var models = require('../models');

module.exports = {
  get: function (req, res) {
    //send the request to db models with get action to messages table
    models.users.getUsers(data => {
        res.writeHead(200);
        res.end(JSON.stringify(data));
    });
  },
  post: function (req, res) {
    let user = req.body.username
    models.users.create(user, (err, data) => {
      if (err) {
        res.sendStatus(400)
      } else [
        res.end(JSON.stringify(data.insertId))
      ]
    })
  }
};
