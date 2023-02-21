-- Write an SQL query to report the first name, last name, city, 
-- and state of each person in the Person table. If the address 
-- of a personId is not present in the Address table, report null 
-- instead. Return the result table in any order.

create database practice2_1_8;
use practice2_1_8;
create table Person(
personId int auto_increment primary key,
firstName varchar(32),
lastName varchar(32));

create table Address(
id int auto_increment primary key,
personId int ,
city varchar(32),
state varchar(32)
);


insert into Person (firstName,lastName) values ("Allen","Wang"),("Bob","Alice");
insert into Address(personId,city,state) values (2,"New York City","New York"),
(3,"Leetcode","California");

select p.firstName,p.lastName,a.city,a.state
from Person p
left join Address a on p.personId = a.personId; 