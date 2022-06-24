var db = require('../db');

//function that we created
var getUsers = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
//get info from databse
module.exports = {
  getAll: function (cb) {

    //this is from promise style
    return getUsers()
      .then(data => cb(data))
      .catch(err => console.error(err));
    //this is callback style
    // db.query('SELECT * FROM users', (err, data) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     cb(null, data);
    //   }
    // });
  },


  //old not working
  // create: function (user, cb) {
  //   console.log(user,'1111111');
  //   db.query(`INSERT INTO users (username) VALUES (${user});`, (err, data) => {
  //     if (err) {
  //       cb(err);
  //     } else {
  //       cb(null, data);
  //     }
  //   });
  // }
  //use ? to successfully post in database

  create: function (user, cb) {
    let str = ('SELECT * from USERS where username=?');
    db.query(str, [user], (err, data) => {
      //console.log(data);
      if (data.length > 0) {
        cb(new Error ('user already exists'));
      } else {
        let qStr = (`INSERT INTO users (username) VALUES (?);`);
        db.query(qStr, [user], (err, result) => {
          if (err) {
            cb(err);
          } else {
            cb(null, result);
          }
        });
      }
    });
  }
};


