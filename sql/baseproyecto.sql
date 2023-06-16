-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2023 at 05:57 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baseproyecto`
--

-- --------------------------------------------------------

--
-- Table structure for table `tablacomentarios`
--

CREATE TABLE `tablacomentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `productos_id` int(10) UNSIGNED NOT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tablacomentarios`
--

INSERT INTO `tablacomentarios` (`id`, `usuario_id`, `productos_id`, `comentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'Me encanta', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(2, 2, 2, 'Muy bueno!', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(3, 3, 3, 'Excelente', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(4, 4, 4, 'Muy recomendable', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tablaproductos`
--

CREATE TABLE `tablaproductos` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `nombreProducto` varchar(100) DEFAULT NULL,
  `descripcionProducto` varchar(300) DEFAULT NULL,
  `fechaCarga` int(11) DEFAULT NULL,
  `comentarios` int(11) DEFAULT NULL,
  `imagenProducto` varchar(280) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tablaproductos`
--

INSERT INTO `tablaproductos` (`id`, `usuario_id`, `nombreProducto`, `descripcionProducto`, `fechaCarga`, `comentarios`, `imagenProducto`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 'Queen - Greatest Hits', 'Greatest Hits es el primer álbum compilatorio de la banda de rock Queen, aparecido en 1981. En él se reúnen los éxitos de la banda entre 1974 y 1980. Esta lista corresponde a la edición en el Reino Unido. En otros países tuvo diferentes canciones.', 1981, 2, 'https://http2.mlstatic.com/D_NQ_NP_641907-MLA53909728503_022023-O.webp', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(2, 2, 'Red hot chili peppers - Blood sugar sex magik', 'Blood Sugar Sex Magik es el quinto álbum de estudio de la banda estadounidense de funk rock Red Hot Chili Peppers, lanzado el 24 de septiembre de 1991. Producido por Rick Rubin, fue la primera grabación de la banda lanzada por Warner Bros. Records.', 1991, 8, 'https://http2.mlstatic.com/D_NQ_NP_865409-MLA52758364533_122022-O.webp', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(3, 3, 'Led Zeppelin - Physical graffiti', 'Physical Graffiti es el nombre del sexto álbum de estudio de la banda británica Led Zeppelin. Fue publicado el 24 de febrero de 1975, siendo la primera publicación del grupo con su propio sello, denominado Swan Song Records.', 1975, 16, 'https://http2.mlstatic.com/D_NQ_NP_2X_992241-MLA43798960617_102020-F.webp', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(4, 4, 'Dua lipa - Dua lipa', 'Dua Lipa es una cantante, compositora, modelo y actriz británica de origen albanokosovar. Después de trabajar como modelo, firmó con Warner Bros. Records en 2014 y lanzó su álbum debut homónimo en 2017.', 2017, 7, 'https://http2.mlstatic.com/D_NQ_NP_647807-MLA52206063602_102022-O.webp', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(5, 5, 'Led Zeppelin - Houses of the Holy', 'Houses of the Holy es el quinto álbum de la banda británica Led Zeppelin. Rompe con la tradición de los discos anteriores al tener un título no homónimo.', 1973, 4, 'https://http2.mlstatic.com/D_NQ_NP_2X_992241-MLA43798960617_102020-F.webp', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(6, 1, 'Madonna - True Blue', 'True Blue es el tercer álbum de estudio de la cantante estadounidense Madonna, publicado el 30 de junio de 1986 por la compañía discográfica Sire Records.', 1986, 19, 'https://http2.mlstatic.com/D_NQ_NP_699940-MLA53053871416_122022-O.webp', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(7, 2, 'Bruno Ms - Unorthodox Jukebox', 'Unorthodox Jukebox —en español: Rocola no convencional— es el segundo álbum de estudio del cantante estadounidense Bruno Mars, lanzado el 6 de diciembre de 2012 por Atlantic Records. El 4 de diciembre de 2012, el álbum estaba disponible para escucharse completo una semana antes de su lanzamiento.', 2012, 7, 'https://http2.mlstatic.com/D_NQ_NP_741856-MLA51460797562_092022-O.webp', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(8, 3, 'Fito páez - Circo Beat', 'Circo Beat es el octavo álbum de estudio del músico argentino Fito Páez, lanzado en 1994. Los cortes de difusión: «Mariposa tecknicolor» y «Tema de Piluso» tuvieron muchísima difusión en las radios', 1994, 6, 'https://http2.mlstatic.com/D_NQ_NP_941013-MLA69353431967_052023-O.webp', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(9, 4, 'Tom Petty and the heartbreakers - You are gonna get it', 'Tom Perty and the Heartbreakers - You Are Gonna Get It', 1978, 14, 'https://catalogos.libooks.com/9789878968391_lg.jpg', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(10, 5, 'Ed sheeran - X', 'Ed Sheeran - X LPX2', 2012, 11, 'https://http2.mlstatic.com/D_NQ_NP_667444-MLA52758275026_122022-O.webp', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tablausuarios`
--

CREATE TABLE `tablausuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(200) NOT NULL,
  `usuario` varchar(150) DEFAULT NULL,
  `contrasena` varchar(100) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `dni` int(10) UNSIGNED NOT NULL,
  `imagenPerfil` varchar(280) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tablausuarios`
--

INSERT INTO `tablausuarios` (`id`, `email`, `usuario`, `contrasena`, `fechaNacimiento`, `dni`, `imagenPerfil`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'juanperez@gmail.com', 'juanperez1', 'JPerez2023', '2003-03-03', 45730733, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(2, 'lolamartinez@gmail.com', 'lolamartinez', 'LMartinez2023', '2003-04-04', 45730734, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(3, 'pepitagonzales@gmail.com', 'pepitagonzales', 'PGonzales2023', '2003-05-05', 45730735, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(4, 'beludominguez@gmail.com', 'beludominguez', 'BDominguez2023', '2003-06-06', 45730736, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL),
(5, 'sererusso@gmail.com', 'sererusso', 'SRusso2023', '2003-07-07', 45730737, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-16 03:26:59', '2023-06-16 03:26:59', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tablacomentarios`
--
ALTER TABLE `tablacomentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productos_id` (`productos_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indexes for table `tablaproductos`
--
ALTER TABLE `tablaproductos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indexes for table `tablausuarios`
--
ALTER TABLE `tablausuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tablacomentarios`
--
ALTER TABLE `tablacomentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tablaproductos`
--
ALTER TABLE `tablaproductos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tablausuarios`
--
ALTER TABLE `tablausuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tablacomentarios`
--
ALTER TABLE `tablacomentarios`
  ADD CONSTRAINT `tablacomentarios_ibfk_1` FOREIGN KEY (`productos_id`) REFERENCES `tablaproductos` (`id`),
  ADD CONSTRAINT `tablacomentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `tablausuarios` (`id`);

--
-- Constraints for table `tablaproductos`
--
ALTER TABLE `tablaproductos`
  ADD CONSTRAINT `tablaproductos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `tablausuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
