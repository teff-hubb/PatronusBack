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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `email` varchar(45) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fk_athlete` int DEFAULT NULL,
  `fk_sponsor` int DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('','$2a$10$HaXwFEIUvk65zUbhdrhtQeOS1uX4Pj9k6QCi0tqoF/AuYRovN4I5K',NULL,53,'S'),('adidas@gmail.com','$2a$10$qROogbA3P38N6Ki1IrQhIuJ5wceudV6XjtdnBJQonpaU.kCqfkk5m',NULL,46,'S'),('babolat@gmail.com','$2a$10$jA9PqjMULr04zukqYTYq3enR4GPxyNSowk9VyMUHo3nu6rmzfB4Gm',NULL,48,'S'),('belenchi@gmail.com','$2a$10$T6arS66996HZrOSsZEUdte1A4l9gsqowQGezomVAc1Gaxu9dHDCHS',59,NULL,'A'),('billabong@gmail.com','$2a$10$xgnaD04jXIgbOQWx4xjdfeO6Zx.HtliTzcFFsjnu4nsVRiLPdVxwK',NULL,47,'S'),('boomerang@gmail.com','$2a$10$C2Rz0/idzZDUExqurGmcyuiulIcOG4G4nz4J9FuUE5TggjnsN18vK',NULL,43,'S'),('elena@gmail.com','$2a$10$mpK4y81Z9bCIzx./5Pu8G.nKCFYNdQOgzLWO638Na4V9ShWP9Lbxe',54,NULL,'A'),('fernanda@gmail.com','$2a$10$gtnGly3aUvvgIf0XYWeSeug6eRKTbQcQLkLc.BVrAoJBfZgS8XpIS',61,NULL,'A'),('fila@gmail.com','$2a$10$zOkQNUrACia40ahK9LTSxeWK/npsjoyzyStsSNTrNacEFiFfVrsja',NULL,54,'S'),('franciss@gmail.com','$2a$10$N3LhMtF.VGQ0prE1Ghp6zeMo8HOSCciwKgabIuEAMv91tS9BHw8s2',60,NULL,'A'),('isabel@gmail.com','$2a$10$pQ7PcZrTYpYN6r4M.MTbc.mp7y4Nu2SgDywyIRWsOKRIkNWt.vd8y',53,NULL,'A'),('jesus@gmail.com','$2a$10$2/kg1WSmz8f3TBLkoyGPUOmBR0GLuCweJZzkdrmtQ0iPjtBMBO7iG',51,NULL,'A'),('kappa@gmail.com','$2a$10$E7J7w2J9L3pSL1XfbvlMyu8L0kZrLwvksGW5ncTOzduEUZtFpKGwu',NULL,51,'S'),('marco@gmail.com','$2a$10$QjP9s6PRSyU.zmuXmyt4k.R9UwDJd8DZrVxi9rT84h3Puut6tf8Hm',58,NULL,'A'),('mariab@gmail.com','$2a$10$YNejJIsZEGvklv9MCsrsduYKD/YKzUC/Z52AkVOJGlLNrF1eDXGSm',57,NULL,'A'),('miryam@gmail.com','$2a$10$XROqxja3Tg1pRbf8vR/Kkuf4YP8QlhcxlLCY21/LQlfBk2JNlYod6',50,NULL,'A'),('naikita@gmail.com','$2a$10$YJfEVPe4u0ZXxZzW1PTtBOPHgCNOHxdDTsS4uVEUbYNChmvreocZS',NULL,49,'S'),('nike@gmail.com','$2a$10$bYHHr/fKNAVGuQGfWXxGK.89R3xnTHSPduUpXuKXADVj/yF/8CXI.',NULL,40,'S'),('nike2@gmail.com','$2a$10$KYlwJBkU.TCgn5zVfef2EOCtLaZ5RZkCiS3wPH9Szai.DgV9pfJta',NULL,41,'S'),('nike3@gmail.com','$2a$10$F/nEBGaWVTUI0BbRidK4I.N4VvQYsWKw.PJzYPtNpYMGjDEW/JFOG',NULL,42,'S'),('pablo@gmail.com','$2a$10$WNoK83iNFs1IaMORgdqqiOTB0uANHQynclmSkB5ZfpEVNLDrRiwhu',55,NULL,'A'),('puma@gmail.com','$2a$10$LpXL81rCRF7BaASmgiXB/uYEwF.JwhjYnouiA8n64ggBctxroCQkG',NULL,44,'S'),('reebok@gmail.com','$2a$10$Mkzxm/akCYe7dv.dY7Pcge5NhAsFwvwv9wh3gIZ7HwiWFV3hAP9ki',NULL,50,'S'),('rodrigo@gmail.com','$2a$10$3QSyZk/yvIpnHq2ln00rPuQCHjBvK2rOKD6U7wWeZo.hdvXWLD6Bm',56,NULL,'A'),('rsica@gmail.com','$2a$10$wD8s9pD6kSnZkDrFMBvF5u6o3kJVSWSCUm7CZvAgOlE8cps/fWaxO',52,NULL,'A'),('serena@gmail.com','$2a$10$tAb39VdFg0TBtKOuVtDEluocQ3xCjZwNH9fhPz3sSXrNq4/VCiPe2',62,NULL,'A'),('tipitents@gmail.com','$2a$10$huA8aGF7Mc5uzBjN9JpKTOPW7YRWuA8L0TIzJCq8pvc8bC/KhxbC2',NULL,45,'S'),('undefined','$2a$10$DP.nB6mesQYq.6whf5iU7up0nj6GLM6D1/ZvDj/e4lRoKOcG.hqmW',NULL,52,'S'),('vilardiu@gmail.com','$2a$10$6/gnHJVdv246EGUUWahpJuvnNNEtBVm/XFaT9Od3O4kJyUOOUIV..',49,NULL,'A');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-23 11:49:25
