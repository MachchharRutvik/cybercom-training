-- Case 4
-- Consider a table called "orders" with the following columns: 
-- "id", "customer_id", "order_date", "total_amount". Write a SQL 
-- query to calculate the total amount of orders for each customer, 
-- sorted in descending order by total amount

create database practice3_2_4;
use practice3_2_4;
create table Orders(
id int primary key,
customer_id int,
order_date date,
total_amount int);

INSERT INTO Orders (id, customer_id, order_date, total_amount)
VALUES
    (1, 1, '2022-01-01', 100.00),
    (2, 1, '2022-02-01', 200.00),
    (3, 2, '2022-01-15', 150.00),
    (4, 2, '2022-02-15', 250.00),
    (5, 3, '2022-01-31', 300.00);

select customer_id,sum(total_amount) as total_amount 
from Orders
group by customer_id
order by total_amount desc;