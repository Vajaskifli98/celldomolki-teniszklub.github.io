-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Máj 29. 11:07
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `tenisz klub`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `versenyek`
--

CREATE TABLE `versenyek` (
  `Meccsek` varchar(100) NOT NULL,
  `Eredmenyek` varchar(100) NOT NULL,
  `Datum` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `versenyek`
--

INSERT INTO `versenyek` (`Meccsek`, `Eredmenyek`, `Datum`) VALUES
('Kiss Béla-Nagy Zoltán', '87-78', '2026.04.06 16:00'),
('Nagy Dominik-Tamás Márk', '95-70', '2026.04.06 16:30'),
('Horváth Lilla-Kis Rozália', '80-74', '2026.04.06 17:00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `versenyzők`
--

CREATE TABLE `versenyzők` (
  `Helyezes` int(100) NOT NULL,
  `Nev` varchar(100) NOT NULL,
  `Versenyszam` varchar(100) NOT NULL,
  `Pontszam` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `versenyzők`
--

INSERT INTO `versenyzők` (`Helyezes`, `Nev`, `Versenyszam`, `Pontszam`) VALUES
(1, 'Nagy Dominik', 'Férfi egyes', '95'),
(2, 'Kiss Béla', 'Férfi egyes', '87'),
(3, 'Horváth Lilla', 'női egyes', '80'),
(4, 'Nagy Zoltán', 'Férfi egyes', '76'),
(5, 'Kis Rozália', 'női egyes', '74'),
(6, 'Tamás Márk', 'Férfi egyes', '70');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `versenyek`
--
ALTER TABLE `versenyek`
  ADD UNIQUE KEY `Datum` (`Datum`);

--
-- A tábla indexei `versenyzők`
--
ALTER TABLE `versenyzők`
  ADD PRIMARY KEY (`Helyezes`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
