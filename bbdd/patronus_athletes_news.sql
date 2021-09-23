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
-- Table structure for table `athletes_news`
--

DROP TABLE IF EXISTS `athletes_news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `athletes_news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fk_athletes` int DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `athletes_news`
--

LOCK TABLES `athletes_news` WRITE;
/*!40000 ALTER TABLE `athletes_news` DISABLE KEYS */;
INSERT INTO `athletes_news` VALUES (14,51,'Yisuss','ESPAÑITA LO MEJOR','images/508acf2a83279dd84f650607b2954524.jpeg',NULL),(15,49,'Stephane','SÚPER STEPHANEEEEE','images/08ccf2834605078ddd1a5fb8b00ebebe.jpeg',NULL),(16,50,'Miryam','MUJER TRIUNFADORAA','images/66028a9baf334f34957ffa8611055753.jpeg',NULL),(17,60,'FRANCIS','Ganador torneo autonómico.','images/2be452e1355ad8820d16bad323c96b72.png',NULL),(18,60,'jask','jashkas','images/f88c2f03ce6dacc298c1407277a1f320.png',NULL),(19,60,'FRANCIS','jahskjhasd','images/13c94460a8ae14e69786e8810b49d5cc.png',NULL);
/*!40000 ALTER TABLE `athletes_news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-23 11:49:21
