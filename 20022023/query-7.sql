-- Create a database schema for student grade system. It contains 
-- student data and their grade of each subject based on the 
-- different semester.



create database practice2_1_7;
use practice2_1_7;
CREATE TABLE StudentDetails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(32),
    last_name VARCHAR(32),
    email VARCHAR(32),
    phone_number INT
);
CREATE TABLE Subject (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(16)
);

CREATE TABLE Semester (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(16)
);

CREATE TABLE Grade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject_id INT,
    semester_id INT,
    grade ENUM('A', 'B', 'C', 'D', 'F'),
    FOREIGN KEY (student_id)
        REFERENCES StudentDetails (id),
    FOREIGN KEY (subject_id)
        REFERENCES Subject (id),
    FOREIGN KEY (semester_id)
        REFERENCES Semester (id)
)
