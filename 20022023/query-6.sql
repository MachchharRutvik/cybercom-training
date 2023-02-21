-- 6. Write an SQL query to create index on the email column. 
create database practice2_1_6;
use practice2_1_6;
create table email(
id int ,email varchar(256));

create Index email_index
on email(email);