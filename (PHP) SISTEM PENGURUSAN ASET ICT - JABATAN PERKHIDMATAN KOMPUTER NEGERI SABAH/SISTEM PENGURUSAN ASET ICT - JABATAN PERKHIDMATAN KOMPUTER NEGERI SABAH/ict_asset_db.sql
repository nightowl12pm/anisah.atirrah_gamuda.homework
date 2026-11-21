-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 18, 2026 at 04:04 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ict_asset_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `id` int NOT NULL,
  `asset_no` varchar(50) NOT NULL,
  `asset_name` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `date_registered` date NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  `description` text,
  `image_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `asset_no`, `asset_name`, `category`, `date_registered`, `price`, `status`, `description`, `image_path`, `created_at`) VALUES
(1, 'ICT-2025-001', 'HP ProDesk 400', 'Komputer: Desktop', '2025-01-12', 2500.00, 'Perlu Dinaik Taraf', 'Storan hampir penuh (HDD)', 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=150&q=80', '2026-03-18 14:15:08'),
(2, 'ICT-2025-002', 'Canon LBP6030', 'Pencetak', '2025-01-10', 450.00, 'Baik', 'Kegunaan Pejabat Am', 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=150&q=80', '2026-03-18 14:15:08'),
(3, 'ICT-2025-003', 'Dell PowerEdge T40', 'Server', '2024-11-05', 4200.00, 'Baik', 'Server Aplikasi Dalaman', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=150&q=80', '2026-03-18 14:15:08'),
(11, 'ICT-2345', 'ASUS 2345', 'Komputer: All-In-One', '2026-03-18', 1500.00, 'Perlu Dinaik Taraf', 'NULL', 'uploads/1773847211_images (1).jpg', '2026-03-18 15:20:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) DEFAULT 'IT_Officer',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `employee_id`, `email`, `phone`, `password`, `role`, `created_at`) VALUES
(1, 'Nur Anisah', 'IT-1234', 'user1@jpknemail.com', '0118976512', '$2y$10$wA4YSwkk3WpvhG/lbtCLr.LIPuCaTA49piiUj9Zlf3qGa41ecIV3y', 'IT_Officer', '2026-03-16 18:00:44'),
(2, 'John Doe', 'IT-2026', 'user1@gmail.com', '012345678', '$2y$10$6JGmmpsDAggCWw3elr3kN.fUGWJ6huisTWvx6kbzMlcZIbIdxIl.K', 'IT_Officer', '2026-03-18 13:33:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `asset_no` (`asset_no`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employee_id` (`employee_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
