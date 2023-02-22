-- Case 1
-- Consider a table called "books" with the following columns: 
-- "id", "title", "author", "publication_year". Write a SQL query 
-- to retrieve the title and author of the oldest book in the 
-- table.

create database practice3_3_1;
use practice3_3_1;
create table Books(
id int primary key,
title varchar(256),
author varchar(256),
publication_year int);

INSERT INTO books (id,title, author, publication_year) VALUES
  (1,'To Kill a Mockingbird', 'Harper Lee', 1960),
  (2,'Pride and Prejudice', 'Jane Austen', 1813),
  (3,'1984', 'George Orwell', 1949),
  (4,'The Catcher in the Rye', 'J.D. Salinger', 1951),
  (5,'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
select * from books;
select title,author
from Books
where publication_year = (select min(publication_year) from Books);
