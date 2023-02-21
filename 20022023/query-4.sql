-- 4. Write an SQL query to delete all the duplicate emails, keeping 
-- only one unique email with the smallest id. Return the result 
-- table in any order

create database practice2_1_4;
use practice2_1_4;
CREATE TABLE Person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(40)
);
insert into Person (email) values 
("john@example.com"),
("bob@example.com"),
("john@example.com");

DELETE p1 
FROM person p1, person p2 
WHERE p1.email = p2.email 
AND p1.id > p2.id;

select * from person;



