CREATE TABLE Countries (
  country_id INT AUTO_INCREMENT PRIMARY KEY,
  country_name VARCHAR(50)
);


CREATE TABLE Players (
  player_id INT AUTO_INCREMENT PRIMARY KEY,
  player_name VARCHAR(50),
  player_country_id INT,
  player_expertise VARCHAR(50),
  FOREIGN KEY (player_country_id) REFERENCES Countries(country_id)
);


INSERT INTO Countries (country_name) VALUES ('India');


INSERT INTO Players (player_name, player_country_id, player_expertise) 
VALUES ('Virat Kohli', 1, 'Batsman');


-- Retrieve information about players and their countries
SELECT p.player_name, c.country_name, p.player_expertise
FROM Players p
JOIN Countries c ON p.player_country_id = c.country_id;