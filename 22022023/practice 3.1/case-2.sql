-- Consider the following table structure for a store's inventory:
-- CREATE TABLE inventory (
--  id INT PRIMARY KEY,
--  name VARCHAR(255),
--  quantity INT,
--  price DECIMAL(10,2),
--  category VARCHAR(50)
-- );
-- Write a query to retrieve the name and price of all items in the 
-- inventory where the quantity is greater than 0 and the category 
-- is 'electronics', sorted in descending order by price.

create database practice3_1_2;
use practice3_1_2;
create table Inventory(
id int primary key,
name varchar(256),
quantity int,
price decimal(10,2),
category varchar(50));


insert into Inventory values(1,"phone",15,15000,"electronics"),
(2,"fridge",0,15000,"electronics"),
(3,"pen",5,10,"stationary"),
(4,"book",15,50,"stationary");
insert into Inventory values(5,"laptop",2,50000,"electronics");

select * from inventory;

select name, price 
from Inventory
where quantity > 0 and category = "electronics"
order by price desc;
