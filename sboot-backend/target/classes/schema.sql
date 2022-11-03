DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `f1_teams`;
CREATE TABLE `f1_teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(255) DEFAULT NULL,
  `num_of_world_championships` int DEFAULT NULL,
  `entry_fee_paid` tinyint DEFAULT NULL,
  `year_of_establishment` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
