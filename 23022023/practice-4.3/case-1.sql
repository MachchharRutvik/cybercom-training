-- Assume you are given access to a database with two tables: users 
-- and orders. The users table contains the following columns:
-- id (integer)
-- name (text)
-- email (text)
-- password (text)
-- created_at (timestamp)
-- updated_at (timestamp)
-- The orders table contains the following columns:
-- id (integer)
-- user_id (integer)
-- amount (float)
-- created_at (timestamp)
-- updated_at (timestamp)

create database practice4_3_1;
use practice4_3_1;
create table Users(
id int primary key,
name text,
email text,
password text,
created_at timestamp,
updated_at timestamp
);
create table Orders(
id int primary key,
user_id int,
amount float,
created_at timestamp,
updated_at timestamp
);
INSERT INTO users (id, name, email, password, created_at, updated_at)
VALUES (2, 'John Smith', 'john.smith@example.com', 'password1', '2022-01-01 10:00:00', '2022-01-01 10:00:00'),
       (3, 'Jane Doe', 'jane.doe@example.com', 'password2', '2022-01-02 11:00:00', '2022-01-02 11:00:00'),
       (4, 'Bob Smith', 'bob.smith@example.com', 'password3', '2022-01-03 12:00:00', '2022-01-03 12:00:00'),
       (5, 'Alice Lee', 'alice.lee@example.com', 'password4', '2022-01-04 13:00:00', '2022-01-04 13:00:00');


INSERT INTO orders (id, user_id, amount, created_at, updated_at)
VALUES (1, 1, 100.00, '2022-01-01 10:00:00', '2022-01-01 10:00:00'),
       (2, 1, 50.00, '2022-01-01 11:00:00', '2022-01-01 11:00:00'),
       (3, 2, 75.00, '2022-01-02 12:00:00', '2022-01-02 12:00:00'),
       (4, 3, 200.00, '2022-01-03 13:00:00', '2022-01-03 13:00:00'),
       (5, 4, 150.00, '2022-01-04 14:00:00', '2022-01-04 14:00:00');
-- 1. Create a new user with the following information:
-- name: John Doe
-- email: john.doe@example.com
-- password: 123456
-- created_at: current timestamp
-- updated_at: current timestamp

insert into Users
 values(1,'John Doe','john.doe@example.com','123456',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

--  2. Retrieve the names and email addresses of all users who 
-- have placed at least one order.
select u.name,u.email
from users u 
join Orders o on u.id = o.user_id group by o.user_id;

-- 3. Retrieve the total amount of orders placed by each user, 
-- sorted in descending order of total amount.
select u.name, sum(o.amount) as total_amount
from users u join orders o
on u.id = o.user_id
group by u.id
order by total_amount desc;

-- 4. Retrieve the email address of the user who has placed the 
-- most orders.
select u.email
from users u 
join orders o on u.id = o.user_id
group by u.id
having count(o.user_id)
order by count(o.user_id) desc
limit 1;

-- 5. Retrieve the user IDs and the total amount of orders placed 
-- by users who have placed at least one order and whose total 
-- amount of orders exceeds $100.
select u.id,sum(o.amount) as total_amount
from users u 
join orders o on u.id = o.user_id
group by o.user_id
having count(o.user_id)>= 1 and total_amount > 100;

-- 6. Retrieve the number of users who have not placed any 
-- orders.
select count(u.id) as num_users
from orders o right join users u on o.user_id = u.id
where u.id not in (select user_id from orders);

-- 7. Update the user with ID 1 to change their email address to 
-- "jane.doe@example.com"
update users
set email = "jane.doe@example.com"
where id = 1;
select * from users;

-- 8. Delete all orders placed by users whose email address 
-- contains the string "test".
set sql_safe_updates = 0;
delete from users 
where id in (select distinct user_id from orders) and email like "%test%";

-- 9. Retrieve the total amount of orders placed on each day of 
-- the current week, grouped by day.
insert into orders values(6,1,50,current_timestamp,current_timestamp);
insert into orders values(7,1,50,current_timestamp,current_timestamp);
select * from orders;

select sum(amount) as total_amount,day(created_at)
from orders
where week(created_at) = week(current_date) and year(created_at) = year(current_date)
group by day(created_at);

-- 10. Retrieve the IDs and email addresses of users who have 
-- placed an order in the current year and whose email address 
-- is in the format "example.com".
select u.id,u.email
from users u join orders o
on u.id = o.user_id 
where o.created_at = year(current_date) and u.email like "%example.com%";