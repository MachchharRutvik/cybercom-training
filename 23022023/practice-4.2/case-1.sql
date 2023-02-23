-- Assume you are working with a company that has a database 
-- containing information about employees and their departments. 
-- The database has three tables:
-- Employees table, which includes columns for employee ID, name, 
-- department ID, and salary.
-- Departments table, which includes columns for department ID and 
-- department name.
-- Salaries table, which includes columns for employee ID, salary, 
-- and date.
create database practice4_2_1;
use practice4_2_1;
CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(32),
    department_id INT,
    salary INT
);
alter table Employees
add foreign key (department_id)references departments(id);
CREATE TABLE Departments (
    id INT PRIMARY KEY,
    name VARCHAR(32)
);
create table salaries(
emp_id int,
salary int,
date date);

-- Employees table
INSERT INTO Employees (id, name, department_id, salary) VALUES
(1, 'Alice', 1, 50000),
(2, 'Bob', 2, 60000),
(3, 'Charlie', 1, 55000),
(4, 'Dave', 3, 70000),
(5, 'Eve', 1, 45000),
(6, 'Frank', 2, 65000);

-- Departments table
INSERT INTO Departments (id, name) VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Marketing');

-- salaries table
INSERT INTO salaries(emp_id, salary, date) VALUES
(1, 50000, '2022-01-01'),
(1, 55000, '2022-02-01'),
(2, 60000, '2022-01-01'),
(2, 62000, '2022-02-01'),
(3, 55000, '2022-01-01'),
(3, 57000, '2022-02-01'),
(4, 70000, '2022-01-01'),
(4, 72000, '2022-02-01'),
(5, 45000, '2022-01-01'),
(5, 46000, '2022-02-01'),
(6, 65000, '2022-01-01'),
(6, 67000, '2022-02-01');


-- 1. Write a query to return the names of all employees who work 
-- in the 'Sales' department.
select e.name 
from employees e 
join departments d on e.department_id = d.id
where d.name = 'sales';

-- 2. Write a query to return the total number of employees in 
-- each department, ordered by department name
select d.name,count(*) as num_emp 
from employees e
join departments d on e.department_id = d.id
group by d.id
order by d.name;

-- 3. Write a query to return the average salary for each 
-- department, ordered by department name.
select d.name,avg(e.salary)as avg_salary 
from employees e
join departments d on e.department_id = d.id
group by d.id
order by d.name;

-- 4. Write a query to return the top 10% of highest paid 
-- employees, ordered by salary.
SELECT EmployeeID, Salary
FROM Employees
ORDER BY Salary DESC
LIMIT ;

-- 5. Write a query to return the salary of each employee for 
-- their latest salary entry
SELECT 
    e.name, s.salary
FROM
    salaries s
        JOIN
    employees e ON s.emp_id = e.id
        JOIN
    (SELECT 
        emp_id, MAX(date) AS latest_dates
    FROM
        salaries
    GROUP BY emp_id) AS se ON s.emp_id = se.emp_id
        AND s.date = se.latest_dates;


