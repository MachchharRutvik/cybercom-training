use practice3_4_2;
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  title VARCHAR(50),
  department VARCHAR(50),
  salary DECIMAL(10, 2),
  hire_date DATE
);
INSERT INTO employees (employee_id, first_name, last_name, title, department, salary, hire_date)
VALUES 
  (1, 'John', 'Doe', 'Manager', 'Sales', 60000, '2010-01-01'),
  (2, 'Jane', 'Smith', 'Sales Associate', 'Sales', 40000, '2015-01-01'),
  (3, 'Bob', 'Johnson', 'Manager', 'Finance', 80000, '2005-01-01'),
  (4, 'Sue', 'Davis', 'Finance Associate', 'Finance', 50000, '2010-01-01'),
  (5, 'Tom', 'Wilson', 'Manager', 'Marketing', 70000, '2013-01-01'),
  (6, 'Ann', 'Lee', 'Marketing Associate', 'Marketing', 45000, '2018-01-01'),
  (7, 'Joe', 'Brown', 'Manager', 'Operations', 90000, '2002-01-01'),
  (8, 'Mary', 'Jones', 'Operations Associate', 'Operations', 55000, '2007-01-01'),
  (9, 'David', 'Lee', 'Manager', 'IT', 100000, '2011-01-01'),
  (10, 'Karen', 'Kim', 'IT Associate', 'IT', 60000, '2016-01-01');

select * from employees;
-- 1. Write a query that returns the first and last name of all 
-- employees who have a title that contains the word 
-- "Manager".

select first_name,last_name 
from employees 
where title like "%Manager%";

-- 2. Write a query that returns the department name and the 
-- average salary of all employees in each department.
select department,avg(salary) as avg_salary
from employees
group by department;

-- 3. Write a query that returns the number of employees who were 
-- hired in each year, sorted by year.
select count(employee_id),year(hire_date) as year
from employees
group by year
order by year;

-- 4. Write a query that returns the first name, last name, and 
-- salary of the top 10 highest-paid employees.
select first_name,last_name,salary
from employees
order by salary desc
limit 10;

-- 5. Write a query that updates the salary of all employees in 
-- the "Sales" department to be 10% higher than their current 
-- salary.
set sql_safe_updates = 0;
update employees
set salary = salary + (salary*0.10)
where department = "sales";

-- 6. Write a query that deletes all employees who were hired 
-- before the year 2000.
delete from employees
where year(hire_date) < 2000;

-- 7. Write a query that creates a new table called 
-- "employee_stats" that contains the following columns: 
-- "department_name", "total_employees", and "average_salary". 
-- The table should include one row for each department.
create table employee_stats
(
department_name varchar(48),
total_employees int,
average_salary int
);
insert into employee_stats
(department_name,total_employees,average_salary)
select department,count(employee_id),avg(salary)
from employees
group by department;
select * from employee_stats;
-- 8. Write a query that returns the first and last name of all 
-- employees who have the same last name as their manager.
CREATE TABLE managers (
    manager_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    hire_date DATE
);
INSERT INTO managers (manager_id, first_name, last_name, email, hire_date)
VALUES (1, 'John', 'Smith', 'john.smith@email.com', '2022-01-01'),
       (2, 'Jane', 'Doe', 'jane.doe@email.com', '2022-02-01'),
		(3, 'David', 'Lee', 'david.lee@email.com', '2021-10-01'),
       (4, 'Maria', 'Garcia', 'maria.garcia@email.com', '2022-03-01');
alter table employees
add column manager_id int;
select * from employees;
update employees 
set manager_id =1 where employee_id =1;
update employees 
set manager_id =2 where employee_id =2;
update employees 
set manager_id =3 where employee_id =3;
update employees 
set manager_id =4 where employee_id =4;
update employees 
set manager_id =1 where employee_id =5;
update employees 
set manager_id =2 where employee_id =6;
update employees 
set manager_id =3 where employee_id =7;
update employees 
set manager_id =4 where employee_id =8;
update employees 
set manager_id =1 where employee_id =9;
update employees 
set manager_id =2 where employee_id =10;
alter table employees
add foreign key(manager_id)references managers(manager_id);

select e.first_name,e.last_name 
from employees e join managers m
on e.manager_id = m.manager_id
where e.last_name in (select last_name from managers);
-- 9. Write a query that returns the top 5 departments with the 
-- highest average salary.
select department_name,average_salary from employee_stats
order by average_salary desc 
limit 5;

-- 10. Write a query that returns the first and last name of 
-- all employees who have at least one dependent. Sort the 
-- results by last name.
       CREATE TABLE dependents (
  dependent_id INT PRIMARY KEY,
  emp_id INT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  relationship VARCHAR(50),
  FOREIGN KEY (emp_id) REFERENCES employees(employee_id)
);
INSERT INTO dependents (dependent_id, emp_id, first_name, last_name, relationship)
VALUES
  (1, 2, 'John', 'Smith', 'Spouse'),
  (2, 2, 'Emily', 'Smith', 'Child'),
  (3, 3, 'Amy', 'Johnson', 'Child'),
  (4, 5, 'Molly', 'Brown', 'Child');
  
SELECT e.first_name, e.last_name
FROM employees e
JOIN dependents d ON e.employee_id = d.emp_id
ORDER BY e.last_name;
