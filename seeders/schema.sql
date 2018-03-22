DROP DATABASE IF EXISTS lore_db;

CREATE DATABASE lore_db;

USE lore_db;

CREATE TABLE infos (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NULL,
  class VARCHAR(45) NULL,
  exp INT NULL,
  level INT NULL,
  hp INT NULL,
  str INT NULL,
  speed INT NULL,
  stamina INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO infos (username, class, exp, level, hp, str, speed, stamina)
VALUES ("spongebob", "warrior", 60, 1, 20, 15, 10, 10);