DROP DATABASE IF EXISTS lore_db;

CREATE DATABASE lore_db;

USE lore_db;

CREATE TABLE test (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NULL,
  password VARCHAR(45) NULL,
  class VARCHAR(45) NULL,
  track VARCHAR(45) NULL,
  exp INT NULL,
  level INT NULL,
  hp INT NULL,
  str INT NULL,
  speed INT NULL,
  stamina INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO Userinfos (userName, userPassword, class, track, exp, level, hp, str, speed, stamina)
VALUES ("spongebob", "patty", "titan", "titan", 60, 1, 20, 15, 10, 10);
