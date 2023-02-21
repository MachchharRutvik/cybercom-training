-- 5. Write an SQL query to report all customers who never order 
-- anything. Return the result table in any order.

create database practice2_1_5;
use practice2_1_5;
create table Customers(
id int auto_increment primary key,
name varchar(32));

create table Orders(
id int primary key auto_increment,
customerId int);

insert into Customers (name) values ('joe'),
('Henry'),('sam'),('Max');
insert into Orders(customerId) values (3),(1);

alter table orders
add foreign key Orders(customerId) references Customers(id);


select customers.name
from customers
where customers.name not in(
select c.name
from customers as c 
join orders as o 
on c.id=o.customerID);


