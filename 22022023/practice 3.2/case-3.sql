-- Case 3
-- Consider a table called "employees" with the following columns: 
-- "id", "name", "department", "salary". Write a SQL query to 
-- retrieve the names and salaries of all employees in the "sales" 
-- department who earn more than $50,000 per year.

create database practice3_2_3;
use practice3_2_3;
create table Employees(
id int primary key,
name varchar(256),
department varchar(256),
salary int);

INSERT INTO employees (id, name, department, salary)
VALUES
    (1, 'John Doe', 'sales', 60000),
    (2, 'Jane Smith', 'marketing', 55000),
    (3, 'Bob Johnson', 'sales', 65000),
    (4, 'Sarah Lee', 'engineering', 70000),
    (5, 'Tom Wilson', 'sales', 50000);

select name,salary
from Employees
where salary > 50000 and department = "sales";