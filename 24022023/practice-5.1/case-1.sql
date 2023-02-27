-- 1. Write a SQL query to retrieve the top 10 customers who have made 
-- the most orders in the "orders" table, along with the total 
-- number of orders they have made.

select c.name,count(o.customer_id) as num_orders
from customers c join orders o
on c.id = o.customer_id
group by c.id
order by num_orders desc
limit 10;

-- 2. Write a SQL query to retrieve the names of all employees who have 
-- sold more than $100,000 worth of products in the "order_details" 
-- table, sorted by the amount sold in descending order.
select e.name
from employees e 
join order_details o on e.id = o.emp_id
where sum(o.amount)>100000
group by o.emp_id
order by sum(o.amount) desc;

-- 3. Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, along with the total amount 
-- they have spent on all orders and the total amount they have 
-- spent on orders made in the last 30 days.
select c.name, sum(o.amount)as total_amount, sum(case when date_sub(current_date(),interval 30 day)then o.amount else 0 end)
from customers c 
join orders o on c.id = o.customer_id
group by o.customer_id;

-- 4. Write a SQL query to retrieve the names and salaries of all 
-- employees who have a salary greater than the average salary of 
-- all employees in the "employees" table, sorted by salary in 
-- descending order.
select name,salary
from employees
where salary > (select avg(salary)from employees)
order by salary desc;

-- 5. Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, but have not made any orders 
-- in the last 90 days.
select c.name 
from customers c join orders o on c.id = o.customer_id
where created_at not in (case when date_sub(current_date,interval 90 day)then created_at end);





/* Write a SQL query to retrieve the top 10 customers who have made 
the most orders in the "orders" table, along with the total 
number of orders they have made.*/

create database practice5;
use practice5;

CREATE TABLE employees (
  EmployeeID int NOT NULL,
  Name varchar(50) DEFAULT NULL,
  DepartmentID int DEFAULT NULL,
  Salary decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (EmployeeID)
);

INSERT INTO employees (EmployeeID, Name, DepartmentID, Salary) VALUES
(1, 'John Smith', 1, 50000.00),
(2, 'Jane Doe', 2, 60000.00),
(3, 'Bob Johnson', 1, 55000.00),
(4, 'Mary Jones', 3, 65000.00),
(5, 'Tom Davis', 1, 45000.00);

CREATE TABLE departments (
  DepartmentID int NOT NULL,
  DepartmentName varchar(50) DEFAULT NULL,
  PRIMARY KEY (DepartmentID)
); 

INSERT INTO departments (DepartmentID, DepartmentName) VALUES
(1, 'Sales'),
(2, 'Marketing'),
(3, 'Finance');

CREATE TABLE salaries (
  EmployeeID int DEFAULT NULL,
  Salary decimal(10,2) DEFAULT NULL,
  Date date DEFAULT NULL
);
INSERT INTO salaries (EmployeeID, Salary, Date) VALUES
(1, 50000.00, '2022-01-01'),
(2, 60000.00, '2022-01-01'),
(3, 55000.00, '2022-01-01'),
(4, 65000.00, '2022-01-01'),
(5, 45000.00, '2022-01-01');


/*Write a SQL query to retrieve the top 10 customers who have made 
the most orders in the "orders" table, along with the total 
number of orders they have made.*/
use sales;
select * from customers;
select * from orders;

select c.first_name, count(o.customer_id) 
from customers c join orders o 
using (customer_id) 
group by c.customer_id 
order by count(o.customer_id)
desc limit 10;

/* Write a SQL query to retrieve the names of all employees who have 
sold more than $100,000 worth of products in the "order_details" 
table, sorted by the amount sold in descending order.*/

select e.name from employees e 
join order_details od 
using(emp_id) 
where sum(od.amount)>100000 
group by od.emp_id 
order by sum(od.amount) desc; 


-- Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, along with the total amount 
-- they have spent on all orders and the total amount they have 
-- spent on orders made in the last 30 days.

select c.name, sum(o.amount), 
sum(case when date_sub(current_date,interval 30 day)
		 then o.amount else 0 end) as total_spent_in_30_day
from customers c join orders o 
using(customer_id)
group by o.customer_id;

-- Write a SQL query to retrieve the names and salaries of all 
-- employees who have a salary greater than the average salary of 
-- all employees in the "employees" table, sorted by salary in 
-- descending order.
use practice5;
select name , salary from employees 
where salary > (select avg(salary) from employees) 
order by salary desc;

--  Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, but have not made any orders 
-- in the last 90 days.

select c.name from customers c 
join orders o using(customer_id) 
where o.customer_id 
not in (case when date_sub(current_Date(), interval 90 day) 
then customer_id end)
group by o.customer_id; 

--  Write a SQL query to retrieve the names and salaries of all 
-- employees who have a salary greater than the minimum salary of 
-- their department in the "employees" table, sorted by department 
-- ID and then by salary in descending order.

select e.name, e.salary from employees e join department d using(dept_id) 
where e.salary > (select min(salary) from department where d.dept_id = e.dept_id )
group by e.dept_id;

-- Write a SQL query to retrieve the names and salaries of the five 
-- highest paid employees in each department of the "employees" 
-- table, sorted by department ID and then by salary in descending 
-- order.

select name , salary, departmentID 
from employees e1
where (select count from employees e2 where e2.departmentID = e1.departmentID and e2.salary>e1.salary )<=5
order by departmentID, salary desc;

--  Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, but have not made any orders 
-- for products in the "products" table with a price greater than 
-- $100.

select name from customers 
where 
customer_id 
in (select distinct customer_id from orders) 
and 
customer_id 
not in (select distinct customer_id from products where price >100);

-- Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, along with the total amount 
-- they have spent on all orders and the average amount they have 
-- spent per order.

select c.name, sum(o.amount) as total_amount, avg(o.amount) as amount_per_order
from customers c 
join orders o using(customer_id)
group by c.name;

-- Write a SQL query to retrieve the names of all products in 
-- the "products" table that have been ordered by customers in more 
-- than one country, along with the names of the countries where the 
-- products have been ordered

	select p.name , group_concat(distinct p.country) 
    from customers c 
    join products p using(customer_id)
    join orders o using(product_id)
    group by product_id
    having count(distinct p.city)>1 ; 
