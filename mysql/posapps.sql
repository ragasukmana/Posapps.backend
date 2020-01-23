-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2020 at 02:19 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `posapps`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `name`, `username`, `password`, `create_date`, `update_date`) VALUES
(1, 'Raga Sukmana', 'raga76', 'raga76', '2020-01-20 14:04:50', '2020-01-20 14:04:50');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `dateadd` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateupdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `dateadd`, `dateupdate`) VALUES
(1, 'Food', '2020-01-18 08:24:01', '2020-01-18 08:24:01'),
(2, 'Drink', '2020-01-18 08:24:01', '2020-01-18 08:24:01'),
(3, 'Family Package', '2020-01-18 09:14:11', '2020-01-18 09:14:11'),
(4, 'Kid Meal', '2020-01-18 09:19:15', '2020-01-18 09:19:15');

-- --------------------------------------------------------

--
-- Table structure for table `details_order`
--

CREATE TABLE `details_order` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `quantity` int(255) NOT NULL,
  `price` int(255) NOT NULL,
  `payment` int(11) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `details_order`
--

INSERT INTO `details_order` (`id`, `id_product`, `order_id`, `quantity`, `price`, `payment`, `created_date`, `update_date`) VALUES
(361, 67, 314, 2, 12000, 1, '2020-01-23 00:11:27', '2020-01-23 00:11:27'),
(362, 67, 315, 3, 12000, 1, '2020-01-23 00:12:13', '2020-01-23 00:12:13'),
(363, 70, 315, 5, 5000, 1, '2020-01-23 00:12:14', '2020-01-23 00:12:14');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `dateadd` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateupdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `name`, `dateadd`, `dateupdate`) VALUES
(1, 'cash', '2020-01-22 00:10:10', '2020-01-22 00:10:10'),
(2, 'cash', '2020-01-22 00:10:15', '2020-01-22 00:10:15'),
(3, 'Bank MANDIRI', '2020-01-22 00:10:26', '2020-01-22 00:10:26'),
(4, 'Bank BTN', '2020-01-22 00:10:28', '2020-01-22 00:13:19'),
(5, 'Bank BCA', '2020-01-22 00:10:35', '2020-01-22 00:10:35'),
(6, 'Bank MEGA', '2020-01-22 00:10:37', '2020-01-22 00:13:48'),
(7, 'GoPay', '2020-01-22 00:10:46', '2020-01-22 00:10:46'),
(8, 'DANA', '2020-01-22 00:10:48', '2020-01-22 00:14:15'),
(9, 'OVO', '2020-01-22 00:10:54', '2020-01-22 00:14:22');

-- --------------------------------------------------------

--
-- Table structure for table `post_order`
--

CREATE TABLE `post_order` (
  `id` int(11) NOT NULL,
  `order_reff` varchar(255) NOT NULL,
  `cashier` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `add_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_order`
--

INSERT INTO `post_order` (`id`, `order_reff`, `cashier`, `total_price`, `add_date`, `update_date`) VALUES
(314, '420672', 1, 24000, '2020-01-23 00:11:27', '2020-01-23 00:11:27'),
(315, '749172', 1, 61000, '2020-01-23 00:12:13', '2020-01-23 00:12:14');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `category` int(11) NOT NULL,
  `price` int(255) NOT NULL,
  `dateadd` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateupdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `category`, `price`, `dateadd`, `dateupdate`) VALUES
(67, 'Hot choco', 'Coklat Enak dan asli terbuat dari bahan terbaik alami yang kami pilih sendiri', 'pictures\\1579519511221hot choco.jpg', 2, 12000, '2020-01-20 00:24:41', '2020-01-22 09:09:20'),
(68, 'AYAM RICA', 'Ayam Rica dengan bumbu rempah dan sambal rica rica khas resto kami yang enak', 'pictures\\1579479929787ayam rica.jpg', 1, 20000, '2020-01-20 00:25:29', '2020-01-20 16:07:28'),
(69, 'Lemon Tea', 'Lemon tea yang segar datang dari hati yang tenang ketika membuatnya', 'pictures\\1579479978030lemon tea.jpg', 2, 8000, '2020-01-20 00:26:18', '2020-01-20 16:07:28'),
(70, 'Ice Tea', 'Ice tea minuman sederhana tapi enak', 'pictures\\1579480008130ice tea.jpg', 2, 5000, '2020-01-20 00:26:48', '2020-01-20 16:07:28'),
(71, 'Expresso Latte', 'Expresso + susu yang segar ', 'pictures\\1579480050203expresso latte.jpg', 2, 10000, '2020-01-20 00:27:30', '2020-01-20 16:07:28'),
(72, 'Hot choco', 'Coklat Enak dan asli terbuat dari bahan terbaik alami yang kami pilih sendiri', 'pictures\\1579480180915hot choco.jpg', 2, 9000, '2020-01-20 00:28:50', '2020-01-20 16:07:28'),
(73, 'Gurame Terbang', 'Gurame goreng dengan sambal khas resto kami', 'pictures\\1579480229204gurame goreng.jpg', 1, 30000, '2020-01-20 00:30:29', '2020-01-20 16:07:28'),
(74, 'Ayam Goreng', 'Ayam goreng special pakai nasi + esteh', 'pictures\\1579520625314Resep-Ayam-goreng-tulang-lunak.jpg', 3, 16000, '2020-01-20 00:31:02', '2020-01-20 16:07:28'),
(75, 'Sate Lilit', 'Sate lilit rasa yang tidak berubah dengan bumbu khas bali yang kami racik sendiri dari ahlinya', 'pictures\\1579480317473sate lilit.jpg', 1, 18000, '2020-01-20 00:31:57', '2020-01-20 16:07:28'),
(76, 'Mojito', 'Air soda + lime dan lemon segar', 'pictures\\1579571930327mojito.jpg', 2, 9000, '2020-01-20 00:33:12', '2020-01-21 01:58:50'),
(78, 'Ikan Bakar', 'Ikan bakar dengan bumbu special dan sambal kecap', 'pictures\\1579571893275ikanbakar.jpg', 1, 25000, '2020-01-21 01:55:11', '2020-01-21 01:58:13'),
(82, 'Ikan Bakaran', 'Ikan bakar dengan bumbu special dan sambal kecap ', 'pictures\\1579716159345ikanbakar.jpg', 1, 35000, '2020-01-22 18:02:39', '2020-01-22 18:02:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `details_order`
--
ALTER TABLE `details_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_name` (`id_product`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `payment` (`payment`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_order`
--
ALTER TABLE `post_order`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_reff` (`order_reff`),
  ADD KEY `cashier` (`cashier`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `details_order`
--
ALTER TABLE `details_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=364;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `post_order`
--
ALTER TABLE `post_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=316;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `details_order`
--
ALTER TABLE `details_order`
  ADD CONSTRAINT `details_order_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `details_order_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `post_order` (`id`),
  ADD CONSTRAINT `details_order_ibfk_3` FOREIGN KEY (`payment`) REFERENCES `payment` (`id`);

--
-- Constraints for table `post_order`
--
ALTER TABLE `post_order`
  ADD CONSTRAINT `post_order_ibfk_5` FOREIGN KEY (`cashier`) REFERENCES `account` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
