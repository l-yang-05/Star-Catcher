CREATE TABLE Student(
	student_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    full_name VARCHAR(45),
    previous_rank VARCHAR(45)
);

INSERT INTO Student(full_name, previous_rank)
VALUES ('Floss Poolton', 'PVT'),
('Cherise Praten', 'PVT'), 
('Betteann Symcock', 'PFC'),
('Valentijn Gonnet', 'PFC'),
('Corinne Milton-White', 'PVT'),
('Clara Gounin', 'PFC'),
('Emera Dobbie', 'PFC'),
('Ophelia Rolfini', 'PVT');

CREATE TABLE Run(
	-- a 'run' number, date, 
	run_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    location VARCHAR(45),
    time_recorded DATETIME,
    run_number INT,
    notes VARCHAR(300),
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES Student(student_id) ON DELETE CASCADE
);

SELECT * FROM Student LIMIT 1;

INSERT INTO Run(location, time_recorded, run_number, notes, student_id)
VALUES ( 'Football Field', '2019-11-02', 1, 'good job', 1),
( 'Football Field', '2019-11-02', 1, 'needs improvement', 2);

CREATE TABLE Category(
	category_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    category_type VARCHAR(2),
    tallies INT,
    run_id INT,
    FOREIGN KEY (run_id) REFERENCES Run(run_id) ON DELETE CASCADE
);

INSERT INTO Category(category_type, tallies, run_id)
VALUES('A', 2, 1), ('B', 0, 1), ('C', 5, 1), ('D', 0, 1), ('E', 1, 1), ('F', 2, 1), ('G', 2, 1),('H', 2, 1),('I', 2, 1),('J', 2, 1),('K', 2, 1),('L', 2, 1),
('A', 2, 2), ('B', 0, 2), ('C', 5, 2), ('D', 0, 2), ('E', 1, 2), ('F', 2, 2), ('G', 2, 2),('H', 2, 2),('I', 2, 2),('J', 2, 2),('K', 2, 2),('L', 2, 2);

CREATE TABLE Teacher(
	teacher_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    teacher_username VARCHAR(45),
    teacher_password VARCHAR(45),
    full_name VARCHAR(100)
);

INSERT INTO Teacher(teacher_username, teacher_password, full_name)
VALUES ('jcondell0', 'k6lk8cfI', 'Jennine Condell'),
('wmeneghelli1', 'Li6GCKy', 'Wilden Meneghelli'),
('vdilks2', 'H4nXL1A', 'Viki Dilks');