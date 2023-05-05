-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2023 at 09:58 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database`
--

-- --------------------------------------------------------

--
-- Table structure for table `coffeeshop`
--

CREATE TABLE `coffeeshop` (
  `id` int(4) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(150) NOT NULL,
  `type` varchar(20) NOT NULL,
  `lat` float(10,6) DEFAULT NULL,
  `lng` float(10,6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `coffeeshop`
--

INSERT INTO `coffeeshop` (`id`, `name`, `address`, `type`, `lat`, `lng`) VALUES
(1, 'ZALA Coffee', 'Jl. Pasar Cikarang No.46, Cikarang Kota, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17831', 'coffeeshop', -6.247203, 107.144463),
(2, 'Small\'s Cafe', 'Ruko Pavilion Shop No 9 Cikarang Baru Jababeka 2 Belakang RS Harapan Keluarga, Depan PT Daehwa, Mekarmukti, Cikarang Utara, Bekasi Regency, West Java ', 'coffeeshop', -6.294298, 107.159225),
(3, 'Daycoff', 'Cifest, Ruko Pasadena, Jl. Villa Mutiara Cikarang No.8E, Ciantra, Cikarang Selatan, Bekasi Regency, West Java 17530', 'coffeeshop', -6.334224, 107.136223),
(4, 'Kedai Kopi Bejo Cikarang', 'ruko restali arsi, Jl. KH. Fudholi .rt02, RW.06, Desa, Karangasih, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.244473, 107.182571),
(5, 'Thein Coffee', 'Ruko TRACE, Jl. Dr. Cipto Mangunkusumo Jl. Jababeka Raya No.39, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17550', 'coffeeshop', -6.273823, 107.162315),
(6, 'Starbucks Lippo Cikarang', 'M4CG+VVR, Jl. Kemang Raya, Sukaresmi, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.322963, 107.136566),
(7, 'Navigasi Coffee', 'Jl. Cikarang baru Raya, Sertajaya, Ruko Simprug Garden Blok A2 No 5, Sertajaya, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.305218, 107.186348),
(8, 'Kati Coffee', 'Jl. Dr. Cipto Mangunkusumo Trace 3 blok B19 No1, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.273140, 107.191498),
(9, 'Era Cafe', 'Jl. Grand Cikarang City Blk. F 1 AR No.10, Karangraharja, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.245156, 107.187378),
(10, 'Relakso Coffee and Roastery 2.0', 'Jl.Movieland Ruko Hollywood Boulevard Blok A5A No.19, Mekarmukti, Cikarang Utara, Bekasi Regency, West Java', 'coffeeshop', -6.289862, 107.185318),
(11, 'Kopi Analogi', 'Rukan Simprug Plaza, Blok B1 No. 23A Cikarang Baru Timur, Sertajaya, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17550', 'coffeeshop', -6.307266, 107.193901),
(12, 'Barista Coffee & Eatery', 'Ruko Fresno Blok D20 Jl.Ganesha Boulevard Blok D20 Deltamas, Hegarmukti, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.344022, 107.209953),
(13, 'Warunk Otw', 'Pasirgombong, Cikarang Utara, Bekasi Regency, West Java 17530', 'coffeeshop', -6.278258, 107.126823),
(14, 'Kopi Kenangan - BP Cikarang', 'BP Cikarang Sriwijaya, Jl. Sriwijaya No.22, Cibatu, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.313922, 107.067566),
(15, 'TakeOver Coffee', 'Ruko Hollywood Boulevard A5A No. 31, Mekarmukti, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.272971, 107.232361),
(16, 'Old Town White Coffee', 'Lippo Cikarang, Jl. MH. Thamrin, Cibatu, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.309827, 107.077179),
(17, 'Kopi Di Bawah Tangga Lippo Cikarang', 'Jl Mataram Ruko Podium, Cibatu, Kabupaten Bekasi, Jawa Barat 17550', 'coffeeshop', -6.367152, 107.123871),
(18, 'Rantau Coffee Bar', 'Jl. Dr. Cipto Mangunkusumo No.3, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.251130, 107.233734),
(19, 'Warkop Cinta Reborn', 'Jl. Simpangan Jl. Pamahan No.299, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.259320, 107.266693),
(20, 'Haly coffee', 'Ruko Trace, Jl. Dr. Cipto Mangunkusumo Jl. Jababeka Raya No.17, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.279423, 107.177475),
(21, 'NAKULA COFFEE', 'Jl. Tegal Danas No.1, Jayamukti, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.342255, 107.179779),
(22, 'Béka Coffee and Space', 'Ruko Citywalk, Jl. Ki Hajar Dewantara, Karangasih, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.280751, 107.173531),
(23, 'Hiiyra coffee', 'Jl. Cikarang Baru Raya No.30, Sertajaya, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.303017, 107.176071),
(24, 'Toko Kopi Tuan Sua', 'Jl. Tapir Raya No.2, Kota Jababeka, Central Cikarang, Bekasi Regency, West Java 17815', 'coffeeshop', -6.311608, 107.164589),
(25, 'Tiyasa koffie', 'Jl. Antilop V No.97, RT.6/RW.7, Jayamukti, Central Cikarang, Bekasi Regency, West Java 17530', 'coffeeshop', -6.314730, 107.160027),
(26, 'Neph Coffee & Eatery', 'Jl. Anggrek No.2/44, Mekarmukti, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.298995, 107.165535),
(27, 'GARFEE.ID', 'Perum Cikarang Baru Jl. Cilemahabang Raya No 36 Rt 01/11, Mekarmukti, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.300339, 107.165688),
(28, 'KILLA COFFEE', 'Jl. Beruang Raya No.2, Jayamukti, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.315037, 107.164185),
(29, 'ROMEZA COFFEE', 'Ruko Hollywood Boulevard Jababeka Blok A 5A No.37', 'coffeeshop', -6.297653, 107.166855),
(30, 'Seduh Space - Tea, Coffee & Gelato House', 'Jl. Movie Land No.08, Mekarmukti, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530', 'coffeeshop', -6.296736, 107.167091);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coffeeshop`
--
ALTER TABLE `coffeeshop`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coffeeshop`
--
ALTER TABLE `coffeeshop`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
