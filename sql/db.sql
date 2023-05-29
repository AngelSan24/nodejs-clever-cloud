CREATE DATABASE ejemplo;

USE ejemplo;

CREATE TABLE producto
(
    idProducto int not null AUTO_INCREMENT,
    nombre varchar(150) not null,
    precio real not null,
    primary key (idProducto)
);

INSERT INTO producto(nombre, precio) VALUES
('papa', 2.5), 
('apio', 0.8),
('zapallo', 1.1),
('yuca', 1.2),
('fideo spagheti', 4),
('queso entero', 10);