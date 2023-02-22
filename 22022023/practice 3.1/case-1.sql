-- Create a table called "customers" with the following columns: id 
-- (integer, primary key), name (text), email (text), and 
-- created_at (timestamp).
-- Insert the following data into the "customers" table:
-- ---------------------------------------------------------------
-- id name email created_at
-- 1 John Smith johnsmith@gmail.com 2022-01-01 10:00:00
-- 2 Jane Doe janedoe@yahoo.com 2022-01-02 11:00:00
-- 3 Bob Johnson bobjohnson@hotmail.com 2022-01-03 12:00:00
-- 4 Sarah Lee sarahlee@gmail.com 2022-01-04 13:00:00
-- 5 David Kim davidkim@yahoo.com 2022-01-05 14:00:00
-- --------------------------------------------------------------

create database practice3_1_1;
use practice3_1_1;
create table Customers(
id int primary key auto_increment,
name text,
email text,
created_at timestamp
);

insert into Customers (name,email,created_at)
values("John Smith","johnsmith@gmail.com","2022-01-01 10:00:00");

insert into Customers (name,email,created_at)
values("Jane Doe","janedoe@yahoo.com","2022-01-02 11:00:00"),
("Bob Johnson","bobjohnson@hotmail.com","2022-01-03 12:00:00"),
("Sarah Lee","sarahlee@gmail.com","2022-01-04 13:00:00"),
("David Kim","davidkim@yahoo.com","2022-01-05 14:00:00");

-- 1. Write a query that selects all customers whose email 
-- address ends with "@gmail.com".

select name as Customers
from Customers
where email like "%@gmail.com";

-- 2. Write a query that selects the customer with the earliest 
-- created_at date.

select name
from customers 
where created_at in (select min(created_at) from customers);

-- 3. Write a query that selects the name and email of customers 
-- who were created on or after January 3, 2022.

select name,email
from Customers 
where created_at >= "2022-01-03";

-- 4. Write a query that updates the email address of the 
-- customer with id=5 to "davidkim@gmail.com".

update Customers
set email = "davidkim@gmail.com"
where id=5;
select * from Customers;

-- 5. Write a query that deletes the customer with id=2.

delete from Customers
where id=2;

-- 6. Write a query that calculates the total number of customers 
-- in the "customers" table.

select count(*) as total_customers
from Customers;
