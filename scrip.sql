USE FABLAB;
DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(
CI_USERS VARCHAR(10) PRIMARY KEY NOT NULL,
NAME_USERS VARCHAR(50) NOT NULL,
EMAIL_USERS VARCHAR(80) NOT NULL,
PHONE_USERS VARCHAR(13) NOT NULL,
PASSWORD_USERS VARCHAR(255) NOT NULL,
TYPE_USERS ENUM("GP","UE", "OE") NOT NULL DEFAULT "GP",
ROL_USERS ENUM("ADMIN", "USER") NOT NULL DEFAULT "USER"
);

DROP TABLE IF EXISTS MATERIAL;
CREATE TABLE MATERIAL(
ID_MATERIAL INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
TYPE_MATERIAL VARCHAR(20) NOT NULL,
NAME_MATERIAL VARCHAR(50) NOT NULL,
PRICE_MATERIAL float NOT NULL,
DESCRIPTION_MATERIAL VARCHAR(100) NOT NULL,
STOCK_MATERIAL INT DEFAULT 0
);

DROP TABLE IF EXISTS EQUIPMENT;
CREATE TABLE EQUIPMENT(
ID_EQUIPMENT INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
NAME_EQUIPMENT VARCHAR(50) NOT NULL,
BUILDINGSIZE_EQUIPMENT VARCHAR(80) NOT NULL,
TYPE_EQUIPMENT VARCHAR(4) NOT NULL,
PRICE_EQUIPMENT VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS MATERIAL_EQUIPMENT;
CREATE TABLE MATERIAL_EQUIPMENT(
ID_MATERIAL_EQUIPMENT INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
ID_MATERIAL INT,
ID_EQUIPMENT INT,
FOREIGN KEY (ID_MATERIAL) REFERENCES MATERIAL(ID_MATERIAL),
FOREIGN KEY (ID_EQUIPMENT) REFERENCES EQUIPMENT(ID_EQUIPMENT)
);

DROP TABLE IF EXISTS AGENDA;
CREATE TABLE AGENDA(
ID_AGENDA INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
CI_USERS VARCHAR(10),
ID_EQUIPMENT INT,
STARTINGDATE_AGENDA DATETIME NOT NULL,
ENDINGDATE_AGENDA DATETIME NOT NULL,
STATE_AGENDA ENUM("ACTIVE","INACTIVE"),
FOREIGN KEY (CI_USERS) REFERENCES USERS(CI_USERS),
FOREIGN KEY (ID_EQUIPMENT) REFERENCES EQUIPMENT(ID_EQUIPMENT)
);
