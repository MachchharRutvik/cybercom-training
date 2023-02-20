create database mydb;
use mydb;
create table sales(
purchase_number int auto_increment,
date_of_purchase date,
customer_id int,
item_code varchar(10),
primary key (purchase_number)
);

create table customers(
customer_id int auto_increment primary key,
first_name varchar(10),
last_name varchar(10),
email_address varchar(20),
number_of_complaints varchar(100)
);
alter table sales
add foreign key(customer_id) references customers(customer_id) on delete cascade;

insert into customers (first_name,last_name,email_address,number_of_complaints)values ("rutvik","machchhar","m@gmail.com",0);
insert into customers (first_name,last_name,email_address,number_of_complaints)values ("param","patel","p@gmail.com",2);
insert into customers (first_name,last_name,email_address,number_of_complaints)values ("yug","patel","y@gmail.com",0);
insert into customers (first_name,last_name,email_address,number_of_complaints)values ("tejas","faldu","t@gmail.com",0);

select * from customers;

update customers
set email_address = "m@gmail.com"
where customer_id=1;

alter table customers
add unique key(email_address);

alter table customers
drop index email_address;

alter table customers 
change column number_of_complaints number_of_complaints int default 0;

insert into customers (first_name,last_name,email_address) 
values ("abc","def","a@gmail.com");

alter table customers
alter column number_of_complaints drop default;


