-- . Write an SQL query to report the movies with an odd-numbered 
-- ID and a description that is not "boring". Return the result 
-- table ordered by rating in descending order.
-- Table: Cinema
-- +----------------+----------+
-- | Column Name | Type |
-- +----------------+----------+
-- | id | int |
-- | movie | varchar |
-- | description | varchar |
-- | rating | float |
-- +----------------+----------+
-- id is the primary key for this table.
-- Each row contains information about the name of a movie, its 
-- genre, and its rating.
-- rating is a 2 decimal places float in the range [0, 10]

create database practice2_1_2;
use practice2_1_2;
CREATE TABLE Cinema (
    id INT PRIMARY KEY AUTO_INCREMENT,
    movie VARCHAR(256) NOT NULL,
    description VARCHAR(256),
    rating FLOAT(6)
);

insert into Cinema (movie,description,rating) values('War','great 3D',8.9),
('science','fiction',8.5),
('irish','boring',6.2),
('Ice song','Fantacy',8.6),
('House card','Interesting',9.1);


select * from cinema
where description != 'boring'
and mod(id,2)<>0
order by rating desc;






