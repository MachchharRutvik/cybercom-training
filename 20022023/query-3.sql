create database practice2_1_3;
use practice2_1_3;

create table salary(
id int,name varchar(32),sex enum('m','f'),
salary int
);

insert into salary values (1,"A",'m',2500),
(2,"B",'f',1500),
(3,"C",'m',5500),
(2,"D",'f',500);

set sql_safe_updates = 0;
update salary 
set sex = case sex
		when 'm' then 'f'
        when 'f' then 'm'
        else sex
        end
where sex in ('m','f');
select * from salary;
