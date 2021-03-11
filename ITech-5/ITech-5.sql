-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 11 2021 г., 10:37
-- Версия сервера: 5.6.37
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ITech-5`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Department`
--

CREATE TABLE `Department` (
  `id_department` int(10) UNSIGNED NOT NULL,
  `cheif` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1250;

--
-- Дамп данных таблицы `Department`
--

INSERT INTO `Department` (`id_department`, `cheif`) VALUES
(1, 'Roger Porter'),
(2, 'Michael Williams'),
(3, 'Carl Davidson'),
(4, 'Margie Brown'),
(5, 'Jason Walker'),
(6, 'Mary Webster');

-- --------------------------------------------------------

--
-- Структура таблицы `Projects`
--

CREATE TABLE `Projects` (
  `id_projects` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `manger` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1250;

--
-- Дамп данных таблицы `Projects`
--

INSERT INTO `Projects` (`id_projects`, `name`, `manger`) VALUES
(1, 'Tilmark', 'Paul Thompson'),
(2, 'Watherswor', 'Henry Wood'),
(3, 'Xponth', 'Mary Morales'),
(4, 'Eherfix', 'Peter Beck'),
(5, 'Webwallpas', 'Sonia Rodriguez'),
(6, 'Pure Dynamics', 'Bryan Alexander'),
(7, 'Vanagic', 'Henry Wood');

-- --------------------------------------------------------

--
-- Структура таблицы `Work`
--

CREATE TABLE `Work` (
  `fid_worker` int(10) UNSIGNED NOT NULL,
  `fid_proects` int(10) UNSIGNED NOT NULL,
  `date` date DEFAULT NULL,
  `time_start` date DEFAULT NULL,
  `time_end` date DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1250;

--
-- Дамп данных таблицы `Work`
--

INSERT INTO `Work` (`fid_worker`, `fid_proects`, `date`, `time_start`, `time_end`, `description`) VALUES
(3, 2, '2020-10-25', '2020-10-14', '2021-12-04', 'Added description'),
(3, 1, '2021-01-25', '2021-01-21', '2021-02-04', 'Refactoring, new function GetClient'),
(4, 7, '2019-06-16', '2019-03-30', '2019-06-17', 'Ready to realese'),
(1, 5, '2020-04-23', '2020-04-13', '2021-09-27', 'Added new model');

-- --------------------------------------------------------

--
-- Структура таблицы `Worker`
--

CREATE TABLE `Worker` (
  `id_worker` int(10) UNSIGNED NOT NULL,
  `fid_department` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1250;

--
-- Дамп данных таблицы `Worker`
--

INSERT INTO `Worker` (`id_worker`, `fid_department`) VALUES
(2, 1),
(15, 1),
(17, 1),
(8, 2),
(10, 2),
(13, 2),
(3, 3),
(4, 3),
(11, 3),
(1, 4),
(5, 4),
(6, 4),
(7, 4),
(14, 5),
(16, 5),
(9, 6),
(12, 6);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Department`
--
ALTER TABLE `Department`
  ADD PRIMARY KEY (`id_department`);

--
-- Индексы таблицы `Projects`
--
ALTER TABLE `Projects`
  ADD PRIMARY KEY (`id_projects`);

--
-- Индексы таблицы `Work`
--
ALTER TABLE `Work`
  ADD KEY `fid_worker` (`fid_worker`),
  ADD KEY `fid_proects` (`fid_proects`);

--
-- Индексы таблицы `Worker`
--
ALTER TABLE `Worker`
  ADD PRIMARY KEY (`id_worker`),
  ADD KEY `fid_department` (`fid_department`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Department`
--
ALTER TABLE `Department`
  MODIFY `id_department` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `Projects`
--
ALTER TABLE `Projects`
  MODIFY `id_projects` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT для таблицы `Worker`
--
ALTER TABLE `Worker`
  MODIFY `id_worker` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Work`
--
ALTER TABLE `Work`
  ADD CONSTRAINT `work_ibfk_1` FOREIGN KEY (`fid_worker`) REFERENCES `Worker` (`id_worker`),
  ADD CONSTRAINT `work_ibfk_2` FOREIGN KEY (`fid_proects`) REFERENCES `Projects` (`id_projects`);

--
-- Ограничения внешнего ключа таблицы `Worker`
--
ALTER TABLE `Worker`
  ADD CONSTRAINT `worker_ibfk_1` FOREIGN KEY (`fid_department`) REFERENCES `Department` (`id_department`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
