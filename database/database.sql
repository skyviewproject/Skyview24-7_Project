-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: skyview_database
-- ------------------------------------------------------
-- Server version	8.0.25

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
  `car_id` bigint NOT NULL AUTO_INCREMENT,
  `car_no` varchar(255) DEFAULT NULL,
  `car_type` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `car_brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cardetails_info`
--

LOCK TABLES `cardetails_info` WRITE;
/*!40000 ALTER TABLE `cardetails_info` DISABLE KEYS */;
INSERT INTO `cardetails_info` VALUES (1,'WB-07 7854','2 wheelers',2,'Yamaha'),(2,'WB-07 7654','2 wheelers',3,'honda'),(3,'WB-07 8654','4 wheelers',4,'BMW'),(5,'WB-07 5654','4 wheelers',4,'Maruti');
/*!40000 ALTER TABLE `cardetails_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_info`
--

DROP TABLE IF EXISTS `chat_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_info` (
  `chat_id` bigint NOT NULL AUTO_INCREMENT,
  `chat_data` varchar(255) DEFAULT NULL,
  `chat_time` varchar(255) DEFAULT NULL,
  `chat_ref` varchar(255) DEFAULT NULL,
  `chat_username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`chat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_info`
--

LOCK TABLES `chat_info` WRITE;
/*!40000 ALTER TABLE `chat_info` DISABLE KEYS */;
INSERT INTO `chat_info` VALUES (1,'Hello Vaibhab please take care of your Health','13:57:29 2021/08/28',NULL,'Sara Das'),(2,'Hello Vaibhab please take care of your Health','13:57:41 2021/08/28',NULL,'Sara Das'),(3,'Hello Abhishek please take care of your Health','14:02:19 2021/08/28',NULL,'Abhinav Roy'),(4,'Hello Anurag please take care of your Health','14:02:30 2021/08/28',NULL,'Abhinav Roy'),(5,'Hello Vaibhab please take care of your Health','14:03:49 2021/08/28','Hello Vaibhab please take care of your Health','Sara Das'),(6,'Hello Vaibhab please take care of your Health','14:04:53 2021/08/28','Hello Vaibhab please take care of your Health','Sara Das'),(7,'Hello Vaibhab please take care of your Health','14:04:59 2021/08/28','Hello Abhishek please take care of your Health','Sara Das');
/*!40000 ALTER TABLE `chat_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dailyhelp_info`
--

DROP TABLE IF EXISTS `dailyhelp_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dailyhelp_info` (
  `help_id` bigint NOT NULL AUTO_INCREMENT,
  `help_age` varchar(255) DEFAULT NULL,
  `help_contact` varchar(255) DEFAULT NULL,
  `help_gender` varchar(255) DEFAULT NULL,
  `help_name` varchar(255) DEFAULT NULL,
  `help_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`help_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dailyhelp_info`
--

LOCK TABLES `dailyhelp_info` WRITE;
/*!40000 ALTER TABLE `dailyhelp_info` DISABLE KEYS */;
INSERT INTO `dailyhelp_info` VALUES (1,'39','7541230964','FeMale','desy Doe','housemaid'),(2,'69','7541830964','Male','John cena','Driver'),(4,'69','7541830964','FeMale','kanta bai','HouseMaid');
/*!40000 ALTER TABLE `dailyhelp_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family_info`
--

DROP TABLE IF EXISTS `family_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `family_info` (
  `member_id` bigint NOT NULL AUTO_INCREMENT,
  `member_email` varchar(255) DEFAULT NULL,
  `member_contact` varchar(255) DEFAULT NULL,
  `owner_id` bigint DEFAULT NULL,
  `member_relation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family_info`
--

LOCK TABLES `family_info` WRITE;
/*!40000 ALTER TABLE `family_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `family_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `helpassosication_info`
--

DROP TABLE IF EXISTS `helpassosication_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `helpassosication_info` (
  `helpassosication_id` bigint NOT NULL AUTO_INCREMENT,
  `helper_id` bigint DEFAULT NULL,
  `resident_id` bigint DEFAULT NULL,
  PRIMARY KEY (`helpassosication_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `helpassosication_info`
--

LOCK TABLES `helpassosication_info` WRITE;
/*!40000 ALTER TABLE `helpassosication_info` DISABLE KEYS */;
INSERT INTO `helpassosication_info` VALUES (2,1,2),(3,4,3),(5,2,5),(6,1,4);
/*!40000 ALTER TABLE `helpassosication_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_info`
--

DROP TABLE IF EXISTS `invoice_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_info` (
  `invoice_id` bigint NOT NULL AUTO_INCREMENT,
  `invoice_duedate` varchar(255) DEFAULT NULL,
  `invoice_ownerid` bigint DEFAULT NULL,
  `invoice_amount_rupees` int DEFAULT NULL,
  PRIMARY KEY (`invoice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_info`
--

LOCK TABLES `invoice_info` WRITE;
/*!40000 ALTER TABLE `invoice_info` DISABLE KEYS */;
INSERT INTO `invoice_info` VALUES (1,'15/09/21',2,8000),(2,'15/09/21',5,20000),(5,'16/09/21',4,5000);
/*!40000 ALTER TABLE `invoice_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mail_info`
--

DROP TABLE IF EXISTS `mail_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mail_info` (
  `mail_id` bigint NOT NULL AUTO_INCREMENT,
  `mail_address` varchar(255) DEFAULT NULL,
  `mail_body` varchar(255) DEFAULT NULL,
  `mail_header` varchar(255) DEFAULT NULL,
  `mail_sendingtime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mail_info`
--

LOCK TABLES `mail_info` WRITE;
/*!40000 ALTER TABLE `mail_info` DISABLE KEYS */;
INSERT INTO `mail_info` VALUES (1,'skyviewproject247@gmail.com','Hi Bihan,\n Please cleare the rent for this month as well as the payments of the maids within this week \n Thanking you, \n Admin, \n SkyView24*7','Reminder about Payment for August','java.text.SimpleDateFormat@115a0f60'),(2,'skyviewproject247@gmail.com','Hi Abhishek,\n Please cleare the rent for this month as well as the payments of the maids within this week \n Thanking you, \n Admin, \n SkyView24*7','Reminder about Payment for August','java.text.SimpleDateFormat@115a0f60');
/*!40000 ALTER TABLE `mail_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payhistory_info`
--

DROP TABLE IF EXISTS `payhistory_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payhistory_info` (
  `payment_id` bigint NOT NULL AUTO_INCREMENT,
  `payment_doneon` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `paid_amount_rupees` int DEFAULT NULL,
  `payment_userid` bigint DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `recipant_details` varchar(255) DEFAULT NULL,
  `payment_verifiedon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payhistory_info`
--

LOCK TABLES `payhistory_info` WRITE;
/*!40000 ALTER TABLE `payhistory_info` DISABLE KEYS */;
INSERT INTO `payhistory_info` VALUES (1,'java.text.SimpleDateFormat@115a0f60','VERIFIED',5000,1,NULL,NULL,NULL),(2,'java.text.SimpleDateFormat@115a0f60','VERIFIED',6000,2,NULL,NULL,NULL),(3,'java.text.SimpleDateFormat@115a0f60','NOT_VERIFIED',7000,3,NULL,NULL,NULL),(4,'java.text.SimpleDateFormat@115a0f60','NOT_VERIFIED',7000,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `payhistory_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymethod_info`
--

DROP TABLE IF EXISTS `paymethod_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymethod_info` (
  `method_id` bigint NOT NULL AUTO_INCREMENT,
  `method_details` varchar(255) DEFAULT NULL,
  `method_name` varchar(255) DEFAULT NULL,
  `payment_userid` bigint DEFAULT NULL,
  PRIMARY KEY (`method_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymethod_info`
--

LOCK TABLES `paymethod_info` WRITE;
/*!40000 ALTER TABLE `paymethod_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymethod_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_info`
--

DROP TABLE IF EXISTS `ticket_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_info` (
  `ticket_id` bigint NOT NULL AUTO_INCREMENT,
  `ticket_riserflatno` varchar(255) DEFAULT NULL,
  `ticket_risername` varchar(255) DEFAULT NULL,
  `ticket_details` varchar(255) DEFAULT NULL,
  `ticket_issuedate` varchar(255) DEFAULT NULL,
  `ticket_solvedate` varchar(255) DEFAULT NULL,
  `ticket_status` varchar(255) DEFAULT NULL,
  `ticket_topic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_info`
--

LOCK TABLES `ticket_info` WRITE;
/*!40000 ALTER TABLE `ticket_info` DISABLE KEYS */;
INSERT INTO `ticket_info` VALUES (1,'2A','Sara Das','Facing Electricity Fault in our block for last 2 days','23:40:00 2021/08/28',NULL,'PENDING','Electricity Problem');
/*!40000 ALTER TABLE `ticket_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `user_block_no` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_isactive` bit(1) DEFAULT NULL,
  `user_isverified` bit(1) DEFAULT NULL,
  `user_no` bigint DEFAULT NULL,
  `user_age` int DEFAULT NULL,
  `user_flatno` varchar(255) DEFAULT NULL,
  `user_gender` varchar(255) DEFAULT NULL,
  `user_occupation` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,'10C','sara475@gmail.com','Sara Das',_binary '',_binary '',7845963210,27,'2A','Female','Teacher','$2a$10$0ndUZuzxg3TwPJNQQAdOpOzK7U0lyAxYIGatyRF8uZx1w0LYHAgWi','ROLE_USER,ROLE_SUPERVISIOR'),(2,'2A','roy123@gmail.com','Abhinav Roy',_binary '\0',_binary '\0',7845963219,28,'1C','male','Engineer','$2a$12$b61NeHRDqoL5oWCMe7uxRu1dKk08scEgwh9c5q.IJf.tRkCn67JV.','ROLE_USER'),(3,NULL,'majhi123@gmail.com','Barun majhi',_binary '\0',_binary '\0',7845963214,24,NULL,'male','Engineer','$2a$12$iBGPt3FG5gnQiiD8.s9m6OZuI.RNtc1uLXjYePJx/hReQDnqHI5q6','ROLE_USER'),(4,'8A','chaterjee123@gmail.com','udita chaterjee',_binary '\0',_binary '\0',8845963214,24,'4B','Female','Doctor','$2a$12$yVs2Ec0QIStmDLO6778AsuLHoNNPtHfsVCOXiJvLyhjWZ246QGJhi','ROLE_USER'),(5,'3B','chattaraj123@gmail.com','Abhishek Chattaraj',_binary '\0',_binary '\0',8545963214,24,'5C','male','Engineer','$2a$12$yVs2Ec0QIStmDLO6778AsuLHoNNPtHfsVCOXiJvLyhjWZ246QGJhi','ROLE_USER'),(7,NULL,'Kar123@gmail.com','Anindita Kar',_binary '\0',_binary '\0',8595923214,24,NULL,'Female','Architect','$2a$12$WtLm/oDzsDyxuZOth6purOCS.Luh6u6yviUdZy3pxjLWH73C9p8By','ROLE_USER'),(8,NULL,'Banerjee123@gmail.com','Ritika Banerjee',_binary '\0',_binary '\0',8592923214,24,NULL,'Female','Teacher','$2a$12$.wZboyZp1hm42myo3MSHCezVa/wwhpE5UilXw.r88GnjlfzPdTKC2','ROLE_USER'),(9,NULL,'mondol123@gmail.com','Sarthak mondol',_binary '\0',_binary '\0',8592993214,29,NULL,'male','Engineer','$2a$12$m1kGpzlPjSz.JTNiI0alwOfEB5RDlq6Sm2NP15iP84tDTR9m4aD0G','ROLE_USER'),(10,NULL,'layek123@gmail.com','koushik Layek',_binary '\0',_binary '\0',9592993314,29,NULL,'male','Engineer','$2a$12$9cnNDzka0STRtkahLo4i4.Ol7.wtPnkqMWBIvb00AKaMdPh5G64ni','ROLE_USER');
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

-- Dump completed on 2021-09-01 20:14:35
