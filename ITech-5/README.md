Внесене данных в таблицу Department

INSERT INTO `Department`(`id_department`, `cheif`) VALUES (1,'Roger Porter'),(2,'Michael Williams'),
(3,'Carl Davidson'),(4,'Margie Brown'),(5,'Jason Walker'),(6,'Mary Webster');

Внесене данных в таблицу Worker

INSERT INTO `Worker`(`id_worker`, `fid_department`) 
VALUES (1,4),(2,1),
(3,3),(4,3),(5,4),
(6,4),(7,4),(8,2),
(9,6),(10,2),(11,3),
(12,6),(13,2),(14,5),
(15,1),(16,5),(17,1);

Внесене данных в таблицу Projects

INSERT INTO `Projects`(`id_projects`, `name`, `manger`) VALUES (1,'Tilmark','Paul Thompson'),
(2,'Watherswor','Henry Wood'),(3,'Xponth','Mary Morales'),
(4,'Eherfix','Peter Beck'),(5,'Webwallpas','Sonia Rodriguez'),
(6,'Pure Dynamics','Bryan Alexander'),(7,'Vanagic','Henry Wood');

Внесене данных в таблицу Work

INSERT INTO `Work`(`fid_worker`, `fid_proects`, `date`, `time_start`, `time_end`, `description`) VALUES 
(3,2,'2020-10-25','2020-10-14','2021-12-04','Added description'), 
(3,1,'2021-01-25','2021-01-21','2021-02-04','Refactoring, new function GetClient'), 
(4,7,'2019-06-16','2019-03-30','2019-06-17','Ready to realese'),
(1,5,'2020-04-23','2020-04-13','2021-09-27','Added new model');
