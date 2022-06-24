var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (cb) {
    let str = 'select messages.msg, messages.roomname, users.username from messages left join users on users.id = messages.user_id;';
    db.query(str, (err, data) => {
      if (err) {
        throw err;
      } else {
        cb(null, data);
      }
    });
  },



  create: function (body, cb) {
    let username = body.username;
    let message = body.message;
    let roomname = body.roomname;
    let qStr = (`SELECT id FROM users WHERE username=?;`);
    db.query(qStr, [username], (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log(data);
        let id = data[0].id;
        let str = (`INSERT INTO messages (msg, roomname, user_id) VALUES (?, ?, ?);`);
        db.query(str, [message, roomname, id], (err, data) => {
          if (err) {
            cb(err);
          } else {
            cb(null, data);
          }
        });
      }
    });

  } // a function which can be used to insert a message into the database
};
