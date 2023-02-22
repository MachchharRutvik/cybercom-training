-- Case 1
-- Consider the following table structure for a blog:
-- CREATE TABLE blog_posts (
--  id INT PRIMARY KEY,
--  title VARCHAR(255),
--  body TEXT,
--  author_id INT,
--  created_at TIMESTAMP,
--  updated_at TIMESTAMP
-- );
-- CREATE TABLE blog_comments (
--  id INT PRIMARY KEY,
--  post_id INT,
--  body TEXT,
--  author_id INT,
--  created_at TIMESTAMP
-- );
-- Write a query to retrieve the title and body of the five most 
-- recent blog posts, along with the number of comments each post 
-- has.

create database practice3_2_1;
use practice3_2_1;

CREATE TABLE blog_posts (
 id INT PRIMARY KEY,
 title VARCHAR(256),
 body TEXT,
 author_id INT,
 created_at TIMESTAMP,
 updated_at TIMESTAMP
);

CREATE TABLE blog_comments (
 id INT PRIMARY KEY,
 post_id INT,
 body TEXT,
 author_id INT,
 created_at TIMESTAMP
);

-- Sample data for the blog_posts table
INSERT INTO blog_posts (id, title, body, author_id, created_at, updated_at)
VALUES
(1, 'My First Blog Post', 'Welcome to my blog!', 101, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
(2, 'The Importance of Sleep', 'Getting a good night\'s sleep is crucial for your health.', 102, '2022-01-02 00:00:00', '2022-01-02 00:00:00'),
(3, 'My Favorite Recipes', 'Check out these delicious recipes I\'ve been cooking up!', 103, '2022-01-03 00:00:00', '2022-01-03 00:00:00');

-- Sample data for the blog_comments table
INSERT INTO blog_comments (id, post_id, body, author_id, created_at)
VALUES
(1, 1, 'Great first post!', 201, '2022-01-01 12:00:00'),
(2, 1, 'Looking forward to more posts from you!', 202, '2022-01-01 14:00:00'),
(3, 2, 'I totally agree about the importance of sleep!', 203, '2022-01-02 10:00:00'),
(4, 2, 'Do you have any tips for getting a better night\'s sleep?', 204, '2022-01-02 11:00:00'),
(5, 3, 'These recipes look amazing! Can\'t wait to try them.', 205, '2022-01-03 16:00:00');

select p.title,p.body,count(c.post_id) as number_of_comment
from blog_posts as p 
join
blog_comments as c on p.id = c.post_id
group by c.post_id
order by p.created_at limit 5;

