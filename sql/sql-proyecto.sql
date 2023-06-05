CREATE SCHEMA baseProyecto;
USE baseProyecto;


CREATE TABLE tablaUsuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR (200) NOT NULL,
    usuario VARCHAR (150),
    contrasena VARCHAR(100) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    dni INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

CREATE TABLE tablaProductos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	usuario_id INT UNSIGNED NOT NULL, 
    nombreProducto VARCHAR (100),
    descripcionProducto VARCHAR (300),
    fechaCarga INT,
    comentarios INT,
    FOREIGN KEY (usuario_id) REFERENCES tablaUsuarios (id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);
    
CREATE TABLE tablaComentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNSIGNED NOT NULL, 
    productos_id INT UNSIGNED NOT NULL,
    comentario VARCHAR (500),
    FOREIGN KEY (productos_id) REFERENCES tablaProductos (id),
    FOREIGN KEY (usuario_id) REFERENCES tablaUsuarios (id),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

INSERT INTO tablaUsuarios (id, email, usuario, contrasena, fechaNacimiento, dni)
VALUES (DEFAULT, 'juanperez@gmail.com', 'juanperez1', 'JPerez2023', '2003-03-03', 45730733),
(DEFAULT, 'lolamartinez@gmail.com', 'lolamartinez', 'LMartinez2023', '2003-04-04', 45730734),
(DEFAULT, 'pepitagonzales@gmail.com', 'pepitagonzales', 'PGonzales2023', '2003-05-05', 45730735),
( DEFAULT, 'beludominguez@gmail.com', 'beludominguez', 'BDominguez2023', '2003-06-06', 45730736),
( DEFAULT, 'sererusso@gmail.com', 'sererusso', 'SRusso023', '2003-07-07', 45730737);
--
INSERT INTO tablaProductos (id, usuario_id, nombreProducto, descripcionProducto, fechaCarga, comentarios)
VALUES (DEFAULT, 1, 'Queen - Greatest Hits', 'Greatest Hits es el primer álbum compilatorio de la banda de rock Queen, aparecido en 1981. En él se reúnen los éxitos de la banda entre 1974 y 1980. Esta lista corresponde a la edición en el Reino Unido. En otros países tuvo diferentes canciones.',1981,2),
(DEFAULT,2, 'Red hot chili peppers - Blood sugar sex magik', 'Blood Sugar Sex Magik es el quinto álbum de estudio de la banda estadounidense de funk rock Red Hot Chili Peppers, lanzado el 24 de septiembre de 1991. Producido por Rick Rubin, fue la primera grabación de la banda lanzada por Warner Bros. Records.',1991,8),
(DEFAULT,3, 'Led Zeppelin - Physical graffiti', 'Physical Graffiti es el nombre del sexto álbum de estudio de la banda británica Led Zeppelin. Fue publicado el 24 de febrero de 1975, siendo la primera publicación del grupo con su propio sello, denominado Swan Song Records.',1975,16),
(DEFAULT,4, 'Dua lipa - Dua lipa', 'Dua Lipa es una cantante, compositora, modelo y actriz británica de origen albanokosovar. Después de trabajar como modelo, firmó con Warner Bros. Records en 2014 y lanzó su álbum debut homónimo en 2017.',2017,7),
(DEFAULT,5, 'Led Zeppelin - Houses of the Holy', 'Houses of the Holy es el quinto álbum de la banda británica Led Zeppelin. Rompe con la tradición de los discos anteriores al tener un título no homónimo.',1973,4),
(DEFAULT,1, 'Madonna - True Blue', 'True Blue es el tercer álbum de estudio de la cantante estadounidense Madonna, publicado el 30 de junio de 1986 por la compañía discográfica Sire Records.',1986,19),
(DEFAULT,2, 'Bruno Ms - Unorthodox Jukebox', 'Unorthodox Jukebox —en español: Rocola no convencional— es el segundo álbum de estudio del cantante estadounidense Bruno Mars, lanzado el 6 de diciembre de 2012 por Atlantic Records. El 4 de diciembre de 2012, el álbum estaba disponible para escucharse completo una semana antes de su lanzamiento.',2012,7),
(DEFAULT,3, 'Fito páez - Circo Beat', 'Circo Beat es el octavo álbum de estudio del músico argentino Fito Páez, lanzado en 1994. Los cortes de difusión: «Mariposa tecknicolor» y «Tema de Piluso» tuvieron muchísima difusión en las radios',1994,6),
(DEFAULT,4, 'Tom Petty and the heartbreakers - You are gonna get it', 'Tom Perty and the Heartbreakers - You Are Gonna Get It',1978,14),
(DEFAULT,5, 'Ed sheeran - X', 'Ed Sheeran - X LPX2',2012,11);
--
INSERT INTO tablaComentarios (id, usuario_id, productos_id, comentario)
VALUES (DEFAULT,1,1, 'Me encanta'),
(DEFAULT,2,2, 'Muy bueno!'),
(DEFAULT,3,3, 'Excelente'),
(DEFAULT,4,4, 'Muy recomendable');
