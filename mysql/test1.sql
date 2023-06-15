-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Cze 2023, 17:40
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `test1`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `test1`
--

 CREATE USER 'user1'@'%' IDENTIFIED BY 'pass';
 CREATE USER 'user2'@'%' IDENTIFIED BY 'pass';
 GRANT ALL PRIVILEGES ON test1.* TO 'user1'@'%';
 GRANT ALL PRIVILEGES ON test1.* TO 'user2'@'%';



CREATE TABLE `test1` (
  `id` int(6) UNSIGNED NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `text1` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `test1`
--

INSERT INTO `test1` (`id`, `email`, `password`,`text1`) VALUES
(1, 'John@gmail.com', 'Doe', 'Moje ulubione ksiazki'),
(2, 'Rafal@gmail.com', 'Doew', 'najlepsza strona'),
(3, 'Marcin@gmail.com', 'WW', 'usubiony sklep');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `test1`
--
ALTER TABLE `test1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `test1`
--
ALTER TABLE `test1`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
