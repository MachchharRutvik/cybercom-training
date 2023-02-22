-- Case 2
-- Consider the following table structure for a social media 
-- platform:
-- CREATE TABLE users (
--  id INT PRIMARY KEY,
--  name VARCHAR(255),
--  created_at TIMESTAMP
-- );
-- CREATE TABLE posts (
--  id INT PRIMARY KEY,
--  user_id INT,
--  body TEXT,
--  created_at TIMESTAMP
-- );
-- CREATE TABLE likes (
--  id INT PRIMARY KEY,
--  user_id INT,
--  post_id INT,
--  created_at TIMESTAMP
-- );
-- Write a query to retrieve the name and number of posts for each 
-- user who joined the platform in the year 2022, along with the 
-- total number of likes received for each user's posts.

create database practice3_2_2;
use practice3_2_2;
CREATE TABLE users (
 id INT PRIMARY KEY,
 name VARCHAR(255),
 created_at TIMESTAMP
);
CREATE TABLE posts (
 id INT PRIMARY KEY,
 user_id INT,
 body TEXT,
 created_at TIMESTAMP
);
CREATE TABLE likes (
 id INT PRIMARY KEY,
 user_id INT,
 post_id INT,
 created_at TIMESTAMP
);

INSERT INTO users (id, name, created_at)
VALUES
    (1, 'Alice', '2022-02-01 12:00:00'),
    (2, 'Bob', '2022-02-02 13:00:00'),
    (3, 'Charlie', '2022-02-03 14:00:00'),
    (4, 'David', '2022-02-04 15:00:00'),
    (5, 'Emily', '2022-02-05 16:00:00');
INSERT INTO users (id, name, created_at)
VALUES (6, 'Alice', '2021-02-01 12:00:00');
INSERT INTO users (id, name, created_at)
VALUES (7, 'rutvik', '2020-02-01 12:00:00');
INSERT INTO posts (id, user_id, body, created_at)
VALUES
    (1, 1, 'This is my first post', '2022-02-01 12:00:00'),
    (2, 2, 'Hello world!', '2022-02-02 13:00:00'),
    (3, 1, 'Another post by Alice', '2022-02-03 14:00:00'),
    (4, 3, 'My first post too', '2022-02-04 15:00:00'),
    (5, 4, 'I love SQL!', '2022-02-05 16:00:00');

INSERT INTO likes (id, user_id, post_id, created_at)
VALUES
    (1, 2, 1, '2022-02-01 12:30:00'),
    (2, 1, 2, '2022-02-02 13:30:00'),
    (3, 3, 1, '2022-02-03 14:30:00'),
    (4, 4, 2, '2022-02-04 15:30:00'),
    (5, 5, 1, '2022-02-05 16:30:00');

select * from users;

SELECT u.name, COUNT(p.id) as num_posts, COUNT(l.id) as num_likes
FROM users u
left JOIN posts p ON u.id = p.user_id
LEFT JOIN likes l ON p.id = l.post_id
WHERE YEAR(u.created_at) = 2022
GROUP BY u.id;

