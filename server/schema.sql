CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  user_id INT,
  roomname VARCHAR(255),
  msg VARCHAR(255),
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

