CREATE TABLE Colleges (
  college_id INT AUTO_INCREMENT PRIMARY KEY,
  college_name VARCHAR(50)
);


CREATE TABLE Students (
  student_id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(50),
  student_email VARCHAR(50),
  college_id INT,
  FOREIGN KEY (college_id) REFERENCES Colleges(college_id)
);

INSERT INTO Colleges (college_id, college_name) VALUES (1, 'MarwadiUniversity');
INSERT INTO Colleges (college_id, college_name) VALUES (2, 'GEC Bhavnagar');

INSERT INTO Students (student_name, student_email, college_id) 
VALUES ('tejas faldu', 'john.smith@example.com', 1);

INSERT INTO Students (student_name, student_email, college_id) 
VALUES ('Rutvik ', 'rutvik@example.com', 2);
INSERT INTO Students (student_name, student_email, college_id) 
VALUES ('Rutvik ', 'rutvik@example.com', 1);
INSERT INTO Students (student_name, student_email, college_id) 
VALUES ('yug', 'yug@example.com', 2);

SELECT s.student_name, c.college_name
FROM Students s
JOIN Colleges c ON s.college_id = c.college_id;




