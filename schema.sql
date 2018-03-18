DROP DATABASE IF EXISTS lore_db2;

CREATE DATABASE lore_db2;

USE lore_db2;

CREATE TABLE characterInfo (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NULL,
  class VARCHAR(50) NULL,
  exp INT(100) NULL,
  level INT(5) NULL,
  PRIMARY KEY (id)
);