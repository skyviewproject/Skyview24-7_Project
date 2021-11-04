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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cardetails_info`
--

LOCK TABLES `cardetails_info` WRITE;
/*!40000 ALTER TABLE `cardetails_info` DISABLE KEYS */;
INSERT INTO `cardetails_info` VALUES (2,'WB-07 7654','2 wheelers',3,'honda'),(3,'WB-07 8654','4 wheelers',4,'BMW'),(5,'WB-07 5654','4 wheelers',4,'Maruti'),(8,'WB-04 9654','4 Wheeler',12,'Tata Yamaha'),(13,'WB-04 9654','3 Wheeler',2,'Honda'),(15,'WB-04 9654','2 Wheeler',17,'Yamaha');
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_info`
--

LOCK TABLES `chat_info` WRITE;
/*!40000 ALTER TABLE `chat_info` DISABLE KEYS */;
INSERT INTO `chat_info` VALUES (1,'Hello Vaibhab please take care of your Health','13:57:29 2021/08/28',NULL,'Sara Das'),(2,'Hello Vaibhab please take care of your Health','13:57:41 2021/08/28',NULL,'Sara Das'),(3,'Hello Abhishek please take care of your Health','14:02:19 2021/08/28',NULL,'Abhinav Roy'),(4,'Hello Anurag please take care of your Health','14:02:30 2021/08/28',NULL,'Abhinav Roy'),(5,'Hello Vaibhab please take care of your Health','14:03:49 2021/08/28','Hello Vaibhab please take care of your Health','Sara Das'),(6,'Hello Vaibhab please take care of your Health','14:04:53 2021/08/28','Hello Vaibhab please take care of your Health','Sara Das'),(7,'Hello Vaibhab please take care of your Health','14:04:59 2021/08/28','Hello Abhishek please take care of your Health','Sara Das'),(8,'Yes Vaibhab I, have taken the 1st dose of Vaccine','10:29:37 2021/09/13','Hello Vaibhab please take care of your Health','Sara Das'),(9,'Checking this at 16:49','16:49:21 2021/09/17','Hello Vaibhab please take care of your Health','Sara Das'),(10,'Sending chat at same time','16:49:47 2021/09/17','','Sara Das'),(11,'VSAP chat','18:50:51 2021/09/17','','Sara Das'),(12,'Replying with Chat','18:51:06 2021/09/17','VSAP chat','Sara Das'),(13,'Hello There','18:51:23 2021/09/17','Hello Vaibhab please take care of your Health','Sara Das'),(14,'Hi Sara','16:42:54 2021/09/18','Hello There','Arpan Mondal'),(15,'Hii Everyone','14:01:41 2021/09/27','','Ritika Banerjee'),(16,'Sorry Arpan Sara is not present at this time','14:02:11 2021/09/27','Hi Sara','Ritika Banerjee'),(17,'HelloEveryOne','19:36:33 2021/10/05','','Anindita Karmakar'),(18,'hi, I am Admin','19:36:58 2021/10/05','Hii Everyone','Anindita Karmakar'),(19,'Now in Meeting','18:36:32 2021/10/06','','Abhinav Roy'),(20,'Repling chat','18:36:49 2021/10/06','Sorry Arpan Sara is not present at this time','Abhinav Roy'),(21,'Hello everyone, Please clear the Room Rent for this month.','09:07:01 2021/10/22','','Anindita Karmakar'),(22,'Yes she left the flat yesterday','09:07:39 2021/10/22','Sorry Arpan Sara is not present at this time','Anindita Karmakar');
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dailyhelp_info`
--

LOCK TABLES `dailyhelp_info` WRITE;
/*!40000 ALTER TABLE `dailyhelp_info` DISABLE KEYS */;
INSERT INTO `dailyhelp_info` VALUES (1,'39','7541230964','FeMale','Desy Doe','Housemaid'),(6,'54','8965471123','Male','Ram Chandra','Driver'),(7,'30','6398741250','Female','Samira Rahaman','Electrician'),(9,'29','7541830964','Male','Sumon Karmakar','Cleaner'),(10,'31','9601245736','Female','Soumi Pal','Cook');
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family_info`
--

LOCK TABLES `family_info` WRITE;
/*!40000 ALTER TABLE `family_info` DISABLE KEYS */;
INSERT INTO `family_info` VALUES (3,'arun123@gamil.com','8103264579',12,'Husband',35,'Arun Biswas'),(8,'some@mail.com','8564120374',12,'Father',25,'Sumona Das'),(10,'dalia290@gmail.com','8564120374',17,'Mother',68,'Dalia Das');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `helpassosication_info`
--

LOCK TABLES `helpassosication_info` WRITE;
/*!40000 ALTER TABLE `helpassosication_info` DISABLE KEYS */;
INSERT INTO `helpassosication_info` VALUES (6,1,4),(9,4,12),(12,7,2);
/*!40000 ALTER TABLE `helpassosication_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `income_info`
--

DROP TABLE IF EXISTS `income_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `income_info` (
  `income_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `income_amount` int(11) DEFAULT NULL,
  `income_month` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`income_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `income_info`
--

LOCK TABLES `income_info` WRITE;
/*!40000 ALTER TABLE `income_info` DISABLE KEYS */;
INSERT INTO `income_info` VALUES (1,12000,'0'),(2,10000,'1'),(3,15000,'2'),(4,14000,'3'),(5,17000,'4'),(6,15000,'5'),(7,16000,'6'),(8,12000,'7'),(9,10000,'8'),(10,10000,'9'),(11,0,'10'),(12,0,'11');
/*!40000 ALTER TABLE `income_info` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_info`
--

LOCK TABLES `invoice_info` WRITE;
/*!40000 ALTER TABLE `invoice_info` DISABLE KEYS */;
INSERT INTO `invoice_info` VALUES (5,'2021-09-27',4,8000,'Salary For Cook'),(8,'2021-10-22',17,9000,'Room Rent');
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mail_info`
--

LOCK TABLES `mail_info` WRITE;
/*!40000 ALTER TABLE `mail_info` DISABLE KEYS */;
INSERT INTO `mail_info` VALUES (1,'skyviewproject247@gmail.com','Hi Bihan,\n Please cleare the rent for this month as well as the payments of the maids within this week \n Thanking you, \n Admin, \n SkyView24*7','Reminder about Payment for August','java.text.SimpleDateFormat@115a0f60'),(2,'skyviewproject247@gmail.com','Hi Abhishek,\n Please cleare the rent for this month as well as the payments of the maids within this week \n Thanking you, \n Admin, \n SkyView24*7','Reminder about Payment for August','java.text.SimpleDateFormat@115a0f60'),(3,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 09:29:58 2021/09/13 on Electricity Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:14:27 2021/09/14'),(4,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 09:32:43 2021/09/13 on Water Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:19:45 2021/09/14'),(5,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 20:13:53 2021/09/13 on Payment Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:20:06 2021/09/14'),(6,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 09:14:42 2021/09/14 on Others has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:20:29 2021/09/14'),(7,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 09:14:42 2021/09/14 on Others has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','12:22:20 2021/09/14'),(8,'skyviewproject247@gmail.com','Medicine Representitve','Test From Frontend','12:31:07 2021/09/14'),(9,'skyviewproject247@gmail.com','This is the Mail Body','Test From Frontend','14:31:19 2021/09/18'),(10,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 16:42:11 2021/09/17 on Payment Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','16:42:30 2021/09/18'),(11,'skyviewproject247@gmail.com','This is the Mail Body','From Now','18:43:52 2021/10/06'),(12,'skyviewproject247@gmail.com','Hi Sara Das Please note that Ticket rised at 17:57:51 2021/09/18 on Payment Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','18:47:16 2021/10/06'),(13,'skyviewproject247@gmail.com','Hi Abhinav Roy Please note that Ticket rised at 18:35:49 2021/10/06 on Payment Problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','18:47:32 2021/10/06'),(14,'skyviewproject247@gmail.com','Hi Rita Das Please note that Ticket rised at 09:13:40 2021/10/22 on water problem has been Resloved. Happy to Help \\n Thanking you, \\n SuperVisior Team, \\n SkyView24*7','Ticket Solved Confirmation','09:47:28 2021/10/22');
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
  `otp_generatetime` datetime DEFAULT NULL,
  `otp_value` varchar(255) DEFAULT NULL,
  `otp_generatedfor` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`otp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payhistory_info`
--

LOCK TABLES `payhistory_info` WRITE;
/*!40000 ALTER TABLE `payhistory_info` DISABLE KEYS */;
INSERT INTO `payhistory_info` VALUES (2,'18:39:38 2021/10/06','UPI PAYMENT',8,'VERIFIED','admin@okhdfc',5000,2,'18:46:15 2021/10/06'),(3,'09:20:59 2021/10/22','UPI PAYMENT',8,'VERIFIED','admin@okaxis',8000,17,'09:33:50 2021/10/22');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymethod_info`
--

LOCK TABLES `paymethod_info` WRITE;
/*!40000 ALTER TABLE `paymethod_info` DISABLE KEYS */;
INSERT INTO `paymethod_info` VALUES (6,'name@oksbi','UPI PAYMENT',2),(7,'ritadas450@okaxis','UPI PAYMENT',17);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_info`
--

LOCK TABLES `ticket_info` WRITE;
/*!40000 ALTER TABLE `ticket_info` DISABLE KEYS */;
INSERT INTO `ticket_info` VALUES (1,'2A','Sara Das','Have done Payment but not verified till Now','16:42:11 2021/09/17','16:42:24 2021/09/18','SOLVED','Payment Problem'),(2,'2A','Sara Das','Have done Payment but not verified till Now','17:57:51 2021/09/18','18:47:12 2021/10/06','SOLVED','Payment Problem'),(3,'1C','Abhinav Roy','Have done Payment but not verified till Now','18:35:49 2021/10/06','18:47:28 2021/10/06','SOLVED','Payment Problem'),(4,'30B','Rita Das','Water Not Coming for 3 days','09:13:40 2021/10/22','09:47:22 2021/10/22','SOLVED','water problem');
/*!40000 ALTER TABLE `ticket_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todo_info`
--

DROP TABLE IF EXISTS `todo_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todo_info` (
  `todo_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `todo_name` varchar(255) DEFAULT NULL,
  `todo_status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`todo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todo_info`
--

LOCK TABLES `todo_info` WRITE;
/*!40000 ALTER TABLE `todo_info` DISABLE KEYS */;
INSERT INTO `todo_info` VALUES (9,'Flat 6D Clean',_binary ''),(10,'Change Light 7C',_binary ''),(11,'New Plants for Roof-Top',_binary '\0'),(12,'Clean Floor of P4',_binary '\0');
/*!40000 ALTER TABLE `todo_info` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (2,'2A','roy123@gmail.com','Abhinav Roy',_binary '\0',_binary '\0',7845963219,50,'1C','Male','Engineer','$2a$10$Ux120vulVw9CqOJKmPay6egWr/temCTqo/E5RneDoQrkgVGpoMDmO','ROLE_RESIDENT'),(4,'8A','chaterjee710@gmail.com','Udita Chaterjee',_binary '',_binary '',8845963214,24,'4B','Female','Doctor','$2a$10$zFGyk.R09WXof5ifwx1Bku3wZ2GU0Pq65ZbS47WuDs46wNoTCrzDS','ROLE_SUPERVISIOR'),(7,'30A','kar123@gmail.com','Anindita Karmakar',_binary '',_binary '',8595923214,23,'9W','Female','Architect','$2a$10$lG8WfwMvKClRGWxouB2l5OUcJxyvHK24BT73zxMwGiqeuaVx.sil.','ROLE_ADMIN'),(10,'85R','layek123@gmail.com','koushik Layek',_binary '',_binary '',9592993314,29,'5L','Male','Engineer','$2a$10$p6RlHVfhTT5gx9mCSQGngO5/uHpY7aJ73ay3SMizFKFjr3yonrzt6','ROLE_RESIDENT'),(12,'6Y','baruna384@gmail.com','Baruna Biswas',_binary '',_binary '',8012365740,39,'15A','Male','Doctor','$2a$10$A9FKhRFLEj.vFpvYLkqjTuMy7QW4Vz9YeefrK4aemkxrj6U9LAreK','ROLE_RESIDENT'),(15,'2U','infoarpan803@gmail.com','Arpan Mondal',_binary '',_binary '',9601245736,32,'6P','Male','Manager at Infoware','$2a$10$hJFtZpeWVbI9tui.ni6yveOdkZ6Uu2JQOD.CrXPAsjJPpVw1vs9Jy','ROLE_SUPERVISIOR'),(16,'9P','joyee520@gmail.com','Joyee Das',_binary '\0',_binary '\0',9864751202,29,'7Y','Female','Doctor','$2a$10$K.qsw4T4Pi1FPXh6PiYdqehVtMA6DqOMPzwaBYyswMiZE29G0c7rO','ROLE_RESIDENT'),(17,'2U','rita450@gmail.com','Rita Das',_binary '',_binary '',7452361024,26,'3B','Female','Teacher','$2a$10$9ohDW.erFu42SJiDWniQSeoT2BA22lTPI6FnXLKEqPBxJqjNrABd2','ROLE_RESIDENT');
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

-- Dump completed on 2021-10-31 19:53:46
