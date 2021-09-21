-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: skyview_database
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cardetails_info`
--

DROP TABLE IF EXISTS `cardetails_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cardetails_info` (
  `car_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `car_no` varchar(255) DEFAULT NULL,
  `car_type` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `car_brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cardetails_info`
--

LOCK TABLES `cardetails_info` WRITE;
/*!40000 ALTER TABLE `cardetails_info` DISABLE KEYS */;
INSERT INTO `cardetails_info` VALUES (1,'WB-07 7854','2 wheelers',2,'Yamaha'),(2,'WB-07 7654','2 wheelers',3,'honda'),(3,'WB-07 8654','4 wheelers',4,'BMW'),(5,'WB-07 5654','4 wheelers',4,'Maruti'),(8,'WB-04 9654','4 Wheeler',12,'Tata Yamaha'),(10,'WB-04 8651','3 Wheeler',1,'Honda'),(12,'WB-04 9654','4 Wheeler',1,'Maruti');
/*!40000 ALTER TABLE `cardetails_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_info`
--

DROP TABLE IF EXISTS `chat_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_info` (
  `chat_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `chat_data` varchar(255) DEFAULT NULL,
  `chat_time` varchar(255) DEFAULT NULL,
  `chat_ref` varchar(255) DEFAULT NULL,
  `chat_username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`chat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_info`
--

LOCK TABLES `chat_info` WRITE;
/*!40000 ALTER TABLE `chat_info` DISABLE KEYS */;
INSERT INTO `chat_info` VALUES (1,'Hello Vaibhab please take care of your Health','13:57:29 2021/08/28',NULL,'Sara Das'),(2,'Hello Vaibhab please take care of your Health','13:57:41 2021/08/28',NULL,'Sara Das'),(3,'Hello Abhishek please take care of your Health','14:02:19 2021/08/28',NULL,'Abhinav Roy'),(4,'Hello Anurag please take care of your Health','14:02:30 2021/08/28',NULL,'Abhinav Roy'),(5,'Hello Vaibhab please take care of your Health','14:03:49 2021/08/28','Hello Vaibhab please take care of your Health','Sara Das'),(6,'Hello Vaibhab please take care of your Health','14:04:53 2021/08/28','Hello Vaibhab please take care of your Health','Sara Das'),(7,'Hello Vaibhab please take care of your Health','14:04:59 2021/08/28','Hello Abhishek please take care of your Health','Sara Das'),(8,'Yes Vaibhab I, have taken the 1st dose of Vaccine','10:29:37 2021/09/13','Hello Vaibhab please take care of your Health','Sara Das'),(9,'Checking this at 16:49','16:49:21 2021/09/17','Hello Vaibhab please take care of your Health','Sara Das'),(10,'Sending chat at same time','16:49:47 2021/09/17','','Sara Das'),(11,'VSAP chat','18:50:51 2021/09/17','','Sara Das'),(12,'Replying with Chat','18:51:06 2021/09/17','VSAP chat','Sara Das'),(13,'Hello There','18:51:23 2021/09/17','Hello Vaibhab please take care of your Health','Sara Das'),(14,'Hi Sara','16:42:54 2021/09/18','Hello There','Arpan Mondal');
/*!40000 ALTER TABLE `chat_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dailyhelp_info`
--

DROP TABLE IF EXISTS `dailyhelp_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dailyhelp_info` (
  `help_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `help_age` varchar(255) DEFAULT NULL,
  `help_contact` varchar(255) DEFAULT NULL,
  `help_gender` varchar(255) DEFAULT NULL,
  `help_name` varchar(255) DEFAULT NULL,
  `help_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`help_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dailyhelp_info`
--

LOCK TABLES `dailyhelp_info` WRITE;
/*!40000 ALTER TABLE `dailyhelp_info` DISABLE KEYS */;
INSERT INTO `dailyhelp_info` VALUES (1,'39','7541230964','FeMale','Desy Doe','Housemaid'),(4,'69','7541830964','FeMale','Kanta Mitra','HouseMaid'),(6,'54','8965471123','Male','Ram Chandra','Driver'),(7,'29','6398741250','Male','Samir Rahaman','Electrician'),(8,'35','7845632120','Female','Somutree Barik','Cook');
/*!40000 ALTER TABLE `dailyhelp_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family_info`
--

DROP TABLE IF EXISTS `family_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `family_info` (
  `member_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_email` varchar(255) DEFAULT NULL,
  `member_contact` varchar(255) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `member_relation` varchar(255) DEFAULT NULL,
  `member_age` int(11) DEFAULT NULL,
  `member_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family_info`
--

LOCK TABLES `family_info` WRITE;
/*!40000 ALTER TABLE `family_info` DISABLE KEYS */;
INSERT INTO `family_info` VALUES (1,'sumnoa143@gmail.com','9684520314',1,'Mother-In-Law',40,'Sumona Das'),(3,'arun123@gamil.com','8103264579',12,'Husband',35,'Arun Biswas'),(7,'hdcfh@mail.com','9684520314',1,'Husband',25,'Updated Name'),(8,'some@mail.com','8564120374',12,'Father',25,'Sumona Das');
/*!40000 ALTER TABLE `family_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `helpassosication_info`
--

DROP TABLE IF EXISTS `helpassosication_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `helpassosication_info` (
  `helpassosication_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `helper_id` bigint(20) DEFAULT NULL,
  `resident_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`helpassosication_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `helpassosication_info`
--

LOCK TABLES `helpassosication_info` WRITE;
/*!40000 ALTER TABLE `helpassosication_info` DISABLE KEYS */;
INSERT INTO `helpassosication_info` VALUES (2,1,2),(3,4,3),(5,2,5),(6,1,4),(7,1,1),(9,4,12),(11,8,1);
/*!40000 ALTER TABLE `helpassosication_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_info`
--

DROP TABLE IF EXISTS `invoice_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_info` (
  `invoice_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `invoice_duedate` varchar(255) DEFAULT NULL,
  `invoice_ownerid` bigint(20) DEFAULT NULL,
  `invoice_amount_rupees` int(11) DEFAULT NULL,
  `invoice_reason` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`invoice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_info`
--

LOCK TABLES `invoice_info` WRITE;
/*!40000 ALTER TABLE `invoice_info` DISABLE KEYS */;
INSERT INTO `invoice_info` VALUES (1,'15/09/21',1,8000,'Salary For Cook'),(2,'15/09/21',1,5000,'Room Rent'),(5,'15/05/21',4,5000,'Salary For Maid');
/*!40000 ALTER TABLE `invoice_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mail_info`
--

DROP TABLE IF EXISTS `mail_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mail_info` (
  `mail_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `mail_address` varchar(255) DEFAULT NULL,
  `mail_body` varchar(255) DEFAULT NULL,
  `mail_header` varchar(255) DEFAULT NULL,
  `mail_sendingtime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mail_info`
--

LOCK TABLES `mail_info` WRITE;
/*!40000 ALTER TABLE `mail_info` DISABLE KEYS */;
INSERT INTO `mail_info` VALUES (1,'skyviewproject247@gmail.com','Hi Bihan,\n Please cleare the rent for this month as well as the payments of the maids within this week \n Thanking you, \n Admin, \n SkyView24*7','Reminder about Payment for August','java.text.SimpleDateFormat@115a0f60'),(2,'skyviewproject247@gmail.com','Hi Abhishek,\n Please cleare the rent for this month as well as the payments of the maids within this week \n Thanking you, \n Admin, \n SkyView24*7','Reminder about Payment for August','java.text.SimpleDateFormat@115a0f60'),(3,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 09:29:58 2021/09/13 on Electricity Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:14:27 2021/09/14'),(4,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 09:32:43 2021/09/13 on Water Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:19:45 2021/09/14'),(5,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 20:13:53 2021/09/13 on Payment Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:20:06 2021/09/14'),(6,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 09:14:42 2021/09/14 on Others has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:20:29 2021/09/14'),(7,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 09:14:42 2021/09/14 on Others has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:22:20 2021/09/14'),(8,'skyviewproject247@gmail.com','Medicine Representitve','Test From Frontend','12:31:07 2021/09/14'),(9,'skyviewproject247@gmail.com','This is the Mail Body','Test From Frontend','14:31:19 2021/09/18'),(10,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 16:42:11 2021/09/17 on Payment Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','16:42:30 2021/09/18');
/*!40000 ALTER TABLE `mail_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otp_info`
--

DROP TABLE IF EXISTS `otp_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otp_info` (
  `otp_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `otp_generatedfor` bigint(20) DEFAULT NULL,
  `otp_generatetime` datetime DEFAULT NULL,
  `otp_value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`otp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otp_info`
--

LOCK TABLES `otp_info` WRITE;
/*!40000 ALTER TABLE `otp_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `otp_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payhistory_info`
--

DROP TABLE IF EXISTS `payhistory_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payhistory_info` (
  `payment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `payment_doneon` varchar(255) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `payment_refid` bigint(20) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `recipant_details` varchar(255) DEFAULT NULL,
  `paid_amount_rupees` int(11) DEFAULT NULL,
  `payment_userid` bigint(20) DEFAULT NULL,
  `payment_verifiedon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payhistory_info`
--

LOCK TABLES `payhistory_info` WRITE;
/*!40000 ALTER TABLE `payhistory_info` DISABLE KEYS */;
INSERT INTO `payhistory_info` VALUES (1,'11:30:10 2021/09/21','UPI PAYMENT',1,'NOT_VERIFIED','admin@okaxis',5000,1,NULL);
/*!40000 ALTER TABLE `payhistory_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymethod_info`
--

DROP TABLE IF EXISTS `paymethod_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymethod_info` (
  `method_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `method_details` varchar(255) DEFAULT NULL,
  `method_name` varchar(255) DEFAULT NULL,
  `payment_userid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymethod_info`
--

LOCK TABLES `paymethod_info` WRITE;
/*!40000 ALTER TABLE `paymethod_info` DISABLE KEYS */;
INSERT INTO `paymethod_info` VALUES (1,'saradas@okhdfc','UPI PAYMENT',1),(5,'2034 6598 1204 3654: 339','DEBIT CARD',1);
/*!40000 ALTER TABLE `paymethod_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_info`
--

DROP TABLE IF EXISTS `ticket_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_info` (
  `ticket_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ticket_riserflatno` varchar(255) DEFAULT NULL,
  `ticket_risername` varchar(255) DEFAULT NULL,
  `ticket_details` varchar(255) DEFAULT NULL,
  `ticket_issuedate` varchar(255) DEFAULT NULL,
  `ticket_solvedate` varchar(255) DEFAULT NULL,
  `ticket_status` varchar(255) DEFAULT NULL,
  `ticket_topic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_info`
--

LOCK TABLES `ticket_info` WRITE;
/*!40000 ALTER TABLE `ticket_info` DISABLE KEYS */;
INSERT INTO `ticket_info` VALUES (1,'2A','Sara Das','Have done Payment but not verified till Now','16:42:11 2021/09/17','16:42:24 2021/09/18','SOLVED','Payment Problem'),(2,'2A','Sara Das','Have done Payment but not verified till Now','17:57:51 2021/09/18',NULL,'PENDING','Payment Problem');
/*!40000 ALTER TABLE `ticket_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_block_no` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_isactive` bit(1) DEFAULT NULL,
  `user_isverified` bit(1) DEFAULT NULL,
  `user_no` bigint(20) DEFAULT NULL,
  `user_age` int(11) DEFAULT NULL,
  `user_flatno` varchar(255) DEFAULT NULL,
  `user_gender` varchar(255) DEFAULT NULL,
  `user_occupation` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,'12P','sara475@gmail.com','Sara Das',_binary '',_binary '',6321452039,48,'2A','Female','Doctor','$2a$10$2NK4rVPBBKJEVGzhicjbGuDnJzvGHjeYUWDIsVRDt8tdzZVnv44zG','ROLE_RESIDENT'),(2,'2A','roy123@gmail.com','Abhinav Roy',_binary '',_binary '',7845963219,28,'1C','Male','Engineer','$2a$12$b61NeHRDqoL5oWCMe7uxRu1dKk08scEgwh9c5q.IJf.tRkCn67JV.','ROLE_RESIDENT'),(4,'8A','chaterjee710@gmail.com','Udita Chaterjee',_binary '',_binary '',8845963214,24,'4B','Female','Doctor','$2a$10$zFGyk.R09WXof5ifwx1Bku3wZ2GU0Pq65ZbS47WuDs46wNoTCrzDS','ROLE_SUPERVISIOR'),(5,'3B','patra263@gmail.com','Abhishek Patra',_binary '',_binary '',8545963214,24,'5C','Male','Engineer','$2a$10$.bIuO.N.YW.EElbOAFGzo.hRuRuT/AQmjDnB6kiJSFdFKwGfMapvq','ROLE_SUPERVISIOR'),(7,'30A','kar123@gmail.com','Anindita Karmakar',_binary '',_binary '',8595923214,39,'9W','Female','Architect','$2a$10$EuE/rl9Rk4J/BqMXqU9dcOTJg/H7RXwdOi71b1H8QUeUlTT.ioeeS','ROLE_ADMIN'),(8,'3L','banerjee503@gmail.com','Ritika Banerjee',_binary '',_binary '',8592923214,24,'30B','Female','Teacher','$2a$10$nkTCiMGIRsF3e6G9ScwMzeGnTGuXNtqRIKY3p5LplbsRHDdu0infO','ROLE_ADMIN'),(10,'85R','layek123@gmail.com','koushik Layek',_binary '',_binary '',9592993314,29,'5L','Male','Engineer','$2a$10$p6RlHVfhTT5gx9mCSQGngO5/uHpY7aJ73ay3SMizFKFjr3yonrzt6','ROLE_RESIDENT'),(12,'6Y','baruna384@gmail.com','Baruna Biswas',_binary '',_binary '',8012365740,39,'15A','Female','Doctor','$2a$10$oBzP6ndY6Gjj4f/CEM4MeOWoORtRIGXIZqYwxAWjIlHxoIrZuS13S','ROLE_RESIDENT'),(15,'2U','infoarpan803@gmail.com','Arpan Mondal',_binary '',_binary '',9601245736,32,'6P','Male','Manager at Infoware','$2a$10$Vj7GmesoYAMaGDaPTV0.Au17F6wVaOxar9pko7W7ec3c4LNhN5ABW','ROLE_SUPERVISIOR');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-21 11:31:49
