var db = require('../db');

const allUsers = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users`, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = {
  getUsers: function (cb) {
    return allUsers()
      .then(data => cb(data))
    // db.query(`SELECT * FROM users`, (err, data) => {
    //   if (err) {
    //     throw (err)
    //   } else {
    //     cb(null, data)
    //   }
    // })
  },
  create: function (user, cb) {
    console.log(user)
    let str = `INSERT INTO users (username) VALUES (?)`
    db.query(str, [user], (err, data) => {
      if (err) {
        cb(err)
      } else {
        cb(null, data)
      }

    })
  }
};

