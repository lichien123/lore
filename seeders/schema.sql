DROP DATABASE IF EXISTS lore_db;

CREATE DATABASE lore_db;

USE lore_db;

CREATE TABLE UserInfos (
id INT NOT NULL AUTO_INCREMENT,
userName VARCHAR(45) NULL,
userPassword VARCHAR(45) NULL,
track VARCHAR(45) NULL,
exp INT NULL,
level INT NULL,
str INT NULL,
speed INT NULL,
stamina INT NULL,
PRIMARY KEY (id)
);

INSERT INTO UserInfos (userName, userPassword, track, exp, level, str, speed, stamina)
VALUES ("spongebob", "userPassword", "warrior", 60, 1, 15, 10, 10);
