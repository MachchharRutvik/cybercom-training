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
