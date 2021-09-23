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
-- Table structure for table `athletes`
--

DROP TABLE IF EXISTS `athletes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `athletes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `sport` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `quantitydemand` int DEFAULT NULL,
  `percentage` int DEFAULT NULL,
  `limitdate` timestamp NULL DEFAULT NULL,
  `graphic` varchar(255) DEFAULT NULL,
  `followers` int DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `athletes`
--

LOCK TABLES `athletes` WRITE;
/*!40000 ALTER TABLE `athletes` DISABLE KEYS */;
INSERT INTO `athletes` VALUES (49,'Stephanittto','Vilardiu',53,'images/carolina-marin.jpeg','Golf','Andorra',470,53,NULL,NULL,NULL,1),(50,'Miryam','Bathilde',29,'images/carolina-marin.jpeg','Basket','France',700,30,'2021-10-08 22:00:00',NULL,NULL,1),(51,'Jesús','Denis ',36,'images/carolina-marin.jpeg','Handball','Spain',400,60,'2022-01-06 23:00:00',NULL,NULL,1),(52,'Sijjjka','Hernaiz',12,'images/carolina-marin.jpeg','Pádel','País Valencià',1000,100,'2019-02-01 23:00:00',NULL,9000,1),(53,'Isabel','Mato',19,'images/carolina-marin.jpeg','Golf','Belgium',637,36,'2021-09-30 22:00:00',NULL,NULL,1),(54,'Jesus','',22,'images/carolina-marin.jpeg','Backet','Spain',NULL,NULL,NULL,NULL,NULL,1),(56,'Rodrigo','Landete',42,'images/carolina-marin.jpeg','Paddle','Italy',100,90,'2021-12-07 23:00:00',NULL,NULL,0),(57,'María','Ballesteros',21,'images/carolina-marin.jpeg','Tennis','France',1000,0,'2021-10-23 22:00:00',NULL,NULL,1),(58,'Marco','Salas',42,'images/carolina-marin.jpeg','Athletism','USA',600,400,'2021-11-04 23:00:00',NULL,NULL,1),(59,'Belenchi','Iranzo',23,'images/carolina-marin.jpeg','Ski','France',NULL,NULL,'2020-10-03 22:00:00',NULL,NULL,1),(60,'Francis','Estevan Cervera',32,'images/carolina-marin.jpeg','Golf','Spain',300,100,'2021-11-06 23:00:00',NULL,10000,1),(61,'Fernanda','Suárez',28,'images/carolina-marin.jpeg','Golf','Spain',1000,100,NULL,NULL,NULL,1),(62,'Serena ','Williams',32,NULL,NULL,NULL,1000,100,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `athletes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-23 11:49:24
