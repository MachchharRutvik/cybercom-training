-- 1. Create a database structure for product and categories. One 
-- product can be in more than one category and one category can 
-- have multiple products.


create database practice1;
use practice1;
create table product(
product_id int auto_increment primary key not null,
product_name varchar(32)
);
create table category(
category_id int auto_increment primary key not null,
category_name varchar(20)
);
create table result(
product_id int,
category_id int,
foreign key(product_id) references product(product_id),
foreign key(category_id) references category(category_id)
);
insert into product (product_name) values ("BMW"),("Hyundai");
insert into category(category_name)values ("black"),("blue");
select * from product;

select product.product_name,category.category_name,category.category_id
from product
join result 
on product.product_id = result.product_id
join category
on category.category_id = result.category_id;