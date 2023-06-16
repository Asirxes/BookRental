-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Czas generowania: 15 Cze 2023, 18:19
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
  `title` varchar(45) NOT NULL,
  `author` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `coverImageUrl` text NOT NULL,
  `price` double NOT NULL,
  `user_email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `description`, `coverImageUrl`, `price`, `user_email`) VALUES
(0, 'The Lord of the Rings', 'J.R.R. Tolkien', 'A legendary fantasy trilogy that chronicles the epic journey to destroy the One Ring and defeat the Dark Lord Sauron.', 'https://th.bing.com/th/id/OIP.40FIQUvmKRpPWXXMltt4FQHaLH?pid=ImgDet&rs=1', 15.99, NULL),
(1, 'To All the Boys I\'ve Loved Before', 'Jenny Han', 'A charming young adult romance novel about Lara Jean Covey, whose love life gets complicated when her secret love letters are mysteriously sent out.', 'https://www.sanity.com.au/media/Images/fullimage/487684/SDC_2404324_2018-06-12--11-23-17.jpg', 8.99, NULL),
(2, 'The Alchemist', 'Paulo Coelho', 'A philosophical novel following the journey of a young Andalusian shepherd named Santiago as he seeks his personal legend.', 'https://thebookcoverdesigner.com/wp-content/uploads/2018/02/thealchemist-copy.jpg', 9.99, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `isbns`
--

CREATE TABLE `isbns` (
  `ISBN` varchar(20) NOT NULL,
  `id_book` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `koszyks`
--

CREATE TABLE `koszyks` (
  `email` varchar(45) NOT NULL,
  `id_book` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`email`, `password`) VALUES
('jane.smith@example.com', 'secret321'),
('john.doe@example.com', 'pass123'),
('test@gmail.com', '12345678');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_email` (`user_email`);

--
-- Indeksy dla tabeli `isbns`
--
ALTER TABLE `isbns`
  ADD PRIMARY KEY (`ISBN`),
  ADD KEY `id_book` (`id_book`);

--
-- Indeksy dla tabeli `koszyks`
--
ALTER TABLE `koszyks`
  ADD KEY `fk_koszyks_books` (`id_book`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`user_email`) REFERENCES `users` (`email`);

--
-- Ograniczenia dla tabeli `isbns`
--
ALTER TABLE `isbns`
  ADD CONSTRAINT `isbns_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`);

--
-- Ograniczenia dla tabeli `koszyks`
--
ALTER TABLE `koszyks`
  ADD CONSTRAINT `fk_koszyks_books` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `fk_koszyks_users` FOREIGN KEY (`email`) REFERENCES `users` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
