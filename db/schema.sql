CREATE DATABASE burgers_db;

USE burger_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);