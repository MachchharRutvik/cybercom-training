-- Assume that you are working with a database containing
-- information about a bookstore. The database has several tables:
-- books table containing information about all books in the 
-- bookstore. The table has the following columns:
-- id: unique identifier for each book
-- title: title of the book
-- author_id: foreign key pointing to the authors table
-- publication_date: publication date of the book
-- authors table containing information about all authors of the 
-- books in the bookstore. The table has the following columns:
-- id: unique identifier for each author
-- name: name of the author
-- book_categories table containing information about all 
-- categories of books in the bookstore. The table has the 
-- following columns:
-- id: unique identifier for each category
-- name: name of the category
-- book_category_mappings table containing information about which 
-- books belong to which categories. The table has the following 
-- columns:
-- id: unique identifier for each mapping
-- book_id: foreign key pointing to the books table
-- category_id: foreign key pointing to the book_categories table


create database practice4_1_1;
use practice4_1_1;
create table Books(
id int primary key,
title varchar(96),
author_id int,
publication_date date,
foreign key(author_id)references authors(id)
);

INSERT INTO books (id, title, author_id, publication_date) 
VALUES 
  (1, 'To Kill a Mockingbird', 1, '1960-07-11'),
  (2, '1984', 2, '1949-06-08'),
  (3, 'The Great Gatsby', 3, '1925-04-10'),
  (4, 'Pride and Prejudice', 4, '1813-01-28'),
  (5, 'Animal Farm', 2, '1945-08-17');

create table Authors(
id int primary key,
name varchar(40));

INSERT INTO authors (id, name) 
VALUES 
  (1, 'Harper Lee'),
  (2, 'George Orwell'),
  (3, 'F. Scott Fitzgerald'),
  (4, 'Jane Austen');


create table book_categories(
id int primary key,
name varchar(56));

INSERT INTO book_categories (id, name) 
VALUES 
  (1, 'Fiction'),
  (2, 'Non-fiction'),
  (3, 'Science Fiction'),
  (4, 'Mystery');


create table book_category_mappings(
id int primary key,
book_id int,
category_id int,
foreign key(book_id)references Books(id),
foreign key(category_id)references book_categories(id));

INSERT INTO book_category_mappings (id, book_id, category_id) 
VALUES 
  (1, 1, 1),
  (2, 1, 2),
  (3, 2, 1),
  (4, 2, 3),
  (5, 3, 1),
  (6, 4, 1),
  (7, 5, 1),
  (8, 5, 2),
  (9, 5, 3);

-- Write a query to find all books published in the year 2020.
select * 
from books
group by id having year(publication_date) = 2020;

-- 2. Write a query to find the name of the author who has 
-- written the most number of books.
select a.name,count(*) as num_books
from authors a
join books b 
on a.id = b.author_id
group by a.id
order by num_books desc
limit 1;

-- . Write a query to find the name of the category with the 
-- most number of books.
SELECT book_categories.name, COUNT(*) AS num_books
FROM books
JOIN book_category_mappings ON books.id = book_category_mappings.book_id
JOIN book_categories ON book_category_mappings.category_id = book_categories.id
GROUP BY book_categories.id
ORDER BY num_books DESC
LIMIT 1;

-- 4. Write a query to find the name of the author who has 
-- written the most number of books in the category "fiction".
select a.name,count(*) as num_books
from authors a
join books as b
on a.id = b.author_id
join book_category_mappings as bcm on bcm.book_id = b.id
join book_categories as bc on bc.id = bcm.category_id
where bc.name = "fiction"
group by a.id
order by num_books desc
limit 1;

-- 5. Write a query to find the titles of the top 5 most popular 
-- books. The popularity of a book is defined as the number of 
-- times it has been borrowed by customers. Assume that 
-- information about book borrowings is stored in a separate 
-- table called book_borrowings with the following columns:
-- id: unique identifier for each borrowing
-- book_id: foreign key pointing to the books table
-- customer_id: foreign key pointing to the customers 
-- table
-- borrow_date: date on which the book was borrowed

create table customers (id int auto_increment primary key,
name varchar(256) not null
);
insert into customers(name) values('Yug'),('Rutvik'),('Param');
insert into customers(name) values('Tejas'),('Savan');

create table book_borrowings(
id int primary key auto_increment,
book_id int,
customer_id int,
borrow_date date,
foreign key(book_id)references books(id),
foreign key(customer_id)references customers(id));
truncate table book_borrowings;
INSERT INTO book_borrowings(book_id, customer_id, borrow_date)
VALUES
    (1, 1, '2022-02-01'),
    (1, 2, '2022-02-02'),
    (3, 2, '2022-02-03'),
    (4, 3, '2022-02-04'),
    (4, 3, '2022-02-05'),
    (1, 2, '2022-02-06'),
    (2, 5, '2022-02-07'),
    (3, 1, '2022-02-08'),
    (4, 5, '2022-02-09'),
    (5, 1, '2022-02-10');

select b.title,count(bb.id)
from books b 
join book_borrowings bb on b.id = bb.book_id
group by b.id
order by count(bb.id) desc
limit 5;
