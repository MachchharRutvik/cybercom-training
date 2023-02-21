-- Write an SQL query to report all the classes that have at least 
-- five students. Return the result table in any order.

create database practice2_2_2;
use practice2_2_2;
create table Courses(
student varchar(32),
class varchar(32),
primary key(student,class)
);
insert into Courses
values('A','Math'),
('B','English'),
('C','Math'),
('D','Biology'),
('E','Math'),
('F','Computer'),
('G','Math'),
('H','Math'),
('I','Math');

select class 
from courses
group by class
having count(student)>=5;
