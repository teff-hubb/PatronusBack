CREATE DATABASE  IF NOT EXISTS `patronus` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `patronus`;
-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: localhost    Database: patronus
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sponsors`
--

DROP TABLE IF EXISTS `sponsors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sponsors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(45) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `postalcode` int DEFAULT NULL,
  `aboutme` varchar(255) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sponsors`
--

LOCK TABLES `sponsors` WRITE;
/*!40000 ALTER TABLE `sponsors` DISABLE KEYS */;
INSERT INTO `sponsors` VALUES (42,'NAIK','images/9bb763dae7d2363eb2a6baa0399346f7.png',NULL,NULL,NULL,NULL,NULL,1),(43,'BOOMERANG','images/9bb763dae7d2363eb2a6baa0399346f7.png',NULL,NULL,NULL,NULL,NULL,1),(44,'PUMA','images/9bb763dae7d2363eb2a6baa0399346f7.png',NULL,NULL,NULL,NULL,NULL,1),(45,'TIPITENTSSSSSSS','images/9bb763dae7d2363eb2a6baa0399346f7.png',NULL,NULL,NULL,NULL,NULL,1),(46,'ADIDAS','images/9bb763dae7d2363eb2a6baa0399346f7.png','MEJOR CALLE','VILLAR DEL ARZOBISPO','VALESSSIA',1231,'asjhakdhaukshdas',1),(47,'BILLABONG','images/9bb763dae7d2363eb2a6baa0399346f7.png','Avenida Dali','Villar del Arzobispo','EL MEJOR',4610,'Empresa dedicada a asistir a jovenes desarrolladores',1),(48,'BABOLAT','images/9bb763dae7d2363eb2a6baa0399346f7.png',NULL,NULL,NULL,NULL,NULL,1),(49,'NAIKITA','images/9bb763dae7d2363eb2a6baa0399346f7.png',NULL,NULL,NULL,NULL,NULL,1),(50,'REEBOK','images/9bb763dae7d2363eb2a6baa0399346f7.png',NULL,NULL,NULL,NULL,NULL,1),(51,'NAIK','images/9bb763dae7d2363eb2a6baa0399346f7.png',NULL,NULL,NULL,NULL,NULL,1),(52,'FILA','images/9bb763dae7d2363eb2a6baa0399346f7.png','Posadas, 1','Villar del Arzobispo, Valencia','Spain',46170,'Empresa dedicada a la agricultura ecológica',1),(53,'HERETICS','images/9bb763dae7d2363eb2a6baa0399346f7.png',NULL,NULL,NULL,NULL,NULL,0),(54,'FILA2','images/9bb763dae7d2363eb2a6baa0399346f7.png','Guillem de Castro','Valencia','España',46170,'Hola que tal',1);
/*!40000 ALTER TABLE `sponsors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-23 11:49:22
