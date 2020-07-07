CREATE DATABASE estacionamento;
USE estacionamento;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for estacionamento
-- ----------------------------
DROP TABLE IF EXISTS `estacionamento`;
CREATE TABLE `estacionamento`  (
  `Id` int NOT NULL AUTO_INCREMENT,
  `VeiculoId` int NOT NULL,
  `PrecoId` int NOT NULL,
  `DataEntrada` datetime(0) NULL DEFAULT NULL,
  `DataSaida` datetime(0) NULL DEFAULT NULL,
  `ValorPagar` double NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of estacionamento
-- ----------------------------
INSERT INTO `estacionamento` VALUES (38, 22, 5, '2020-07-06 22:56:16', '2020-07-06 22:56:30', 5);
INSERT INTO `estacionamento` VALUES (39, 23, 5, '2020-07-06 22:56:21', '0001-01-01 00:00:00', 0);

-- ----------------------------
-- Table structure for preco
-- ----------------------------
DROP TABLE IF EXISTS `preco`;
CREATE TABLE `preco`  (
  `Id` int NOT NULL AUTO_INCREMENT,
  `ValorInicial` double NOT NULL,
  `DataInicial` datetime(0) NOT NULL,
  `DataFinal` datetime(0) NOT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of preco
-- ----------------------------
INSERT INTO `preco` VALUES (5, 10, '2020-01-01 03:00:00', '2021-01-01 03:00:00');

-- ----------------------------
-- Table structure for veiculo
-- ----------------------------
DROP TABLE IF EXISTS `veiculo`;
CREATE TABLE `veiculo`  (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Placa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of veiculo
-- ----------------------------
INSERT INTO `veiculo` VALUES (22, 'AAAA-1111');
INSERT INTO `veiculo` VALUES (23, 'BBBB-2222');

SET FOREIGN_KEY_CHECKS = 1;
