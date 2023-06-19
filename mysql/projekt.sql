-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Czas generowania: 19 Cze 2023, 19:10
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `projekt`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `coverImageUrl` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `id_wydawcy` int(11) DEFAULT NULL,
  `id_gatunek` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `description`, `coverImageUrl`, `price`, `id_wydawcy`, `id_gatunek`) VALUES
(3, 'test2', 'teste', 'test', 'https://th.bing.com/th/id/R.ccb069b53a6952a64fbf0a534ac23cc1?rik=DefHNY1PmxaWyw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f24800000%2fHarry-Potter-harry-potter-24866757-850-1360.jpg&ehk=bWNxmHOZvyW%2bKg%2bUlSs47vbQnAxZpdUS%2f7NCzYHIMzk%3d&risl=&pid=ImgRaw&r=0', '1.00', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `gatuneks`
--

CREATE TABLE `gatuneks` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `gatuneks`
--

INSERT INTO `gatuneks` (`id`, `nazwa`) VALUES
(1, 'Fantastyka'),
(2, 'Romans');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `koszyks`
--

CREATE TABLE `koszyks` (
  `id_book` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(4, 'test3@gmail.com', '12345678');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wydawcy`
--

CREATE TABLE `wydawcy` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `wydawcy`
--

INSERT INTO `wydawcy` (`id`, `nazwa`) VALUES
(1, 'Wydawca 1'),
(2, 'Wydawca 2');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_books_wydawcy` (`id_wydawcy`),
  ADD KEY `fk_books_gatuneks` (`id_gatunek`);

--
-- Indeksy dla tabeli `gatuneks`
--
ALTER TABLE `gatuneks`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `koszyks`
--
ALTER TABLE `koszyks`
  ADD KEY `id_book` (`id_book`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `wydawcy`
--
ALTER TABLE `wydawcy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `fk_books_gatuneks` FOREIGN KEY (`id_gatunek`) REFERENCES `gatuneks` (`id`),
  ADD CONSTRAINT `fk_books_wydawcy` FOREIGN KEY (`id_wydawcy`) REFERENCES `wydawcy` (`id`);

--
-- Ograniczenia dla tabeli `koszyks`
--
ALTER TABLE `koszyks`
  ADD CONSTRAINT `koszyks_ibfk_2` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
