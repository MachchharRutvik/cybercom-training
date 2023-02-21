-- Create a database structure for employee leave application. It 
-- should include all the employee's information as well as their 
-- leave information.

create database employee_leave_application;
use employee_leave_application;
create table Employee(
id int auto_increment primary key,
first_name varchar(32),
last_name varchar(32),
job_title varchar(32),
salary int
);
create table LeaveInformation(
id int primary key,
emp_id int,
reason_for_leave varchar(256)
);

alter table LeaveInformation
add foreign key(emp_id) references Employee(id);

