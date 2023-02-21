create database practice2_2_1;
use practice2_2_1;
CREATE TABLE Activity (
    player_id INT not null,
    device_id INT not null,
    event_date DATE not null,
    games_played INT not null,
    PRIMARY KEY (player_id , event_date)
);
insert into Activity values
(1,2,"2016-03-01",5),
(1,2,"2016-05-02",6),
(2,3,"2017-06-25",1),
(3,1,"2016-03-02",0),
(3,4,"2018-07-03",5);
set SQL_SAFE_UPDATES = 0;
UPDATE activity 
SET 
    device_id = 4
WHERE
    event_date = '2016-03-02';
UPDATE activity 
SET 
    device_id = 1
WHERE
    event_date = '2018-07-03';
-- Question 1: Write an SQL query to report the first login date 
-- for each player. Return the result table in any order.


SELECT 
    player_id, MIN(event_date)
FROM
    activity
GROUP BY player_id;

-- Question 2: Write an SQL query to report the device that is 
-- first logged in for each player. Return the result table in any 
-- order.
select * from activity;

 SELECT 
    player_id, device_id
FROM
    activity
WHERE
    (player_id , event_date) IN (SELECT 
            player_id, MIN(event_date)
        FROM
            activity
        GROUP BY player_id);

-- Question 3: Write an SQL query to report for each player and 
-- date, how many games played so far by the player. That is, the 
-- total number of games played by the player until that date. 
-- Check the example for clarity. Return the result table in any 
-- order.


select player_id,event_date,sum(games_played) as games_played_so_far
from activity
group by event_date;



