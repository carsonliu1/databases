CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT,
  user_id INT,
  message TEXT,
  roomname VARCHAR(50),
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

