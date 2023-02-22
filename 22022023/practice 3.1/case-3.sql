-- Consider the following table structure for a sales database:
-- CREATE TABLE sales (
--  id INT PRIMARY KEY,
--  date DATE,
--  customer_id INT,
--  product_id INT,
--  quantity INT,
--  total_price DECIMAL(10,2)
-- );
-- Write a query to retrieve the total sales for each month in the 
-- year 2021, sorted in ascending order by month

create database practice3_1_3;
use practice3_1_3;
CREATE TABLE Sales (
    id INT PRIMARY KEY,
    date DATE,
    customer_id INT,
    product_id INT,
    quantity INT,
    total_price DECIMAL(10,2)
);

INSERT INTO sales (id, date, customer_id, product_id, quantity, total_price)
VALUES
(1, '2022-01-05', 101, 201, 2, 50.00),
(2, '2022-02-10', 102, 202, 1, 25.00),
(3, '2022-03-15', 103, 203, 3, 75.00),
(4, '2022-04-20', 104, 204, 2, 50.00),
(5, '2022-05-25', 105, 205, 1, 10.00),
(6, '2022-06-01', 106, 201, 2, 50.00),
(7, '2022-07-02', 107, 202, 1, 25.00),
(8, '2022-08-03', 108, 203, 3, 75.00),
(9, '2022-09-04', 109, 204, 2, 50.00),
(10, '2022-10-05', 110, 205, 1, 10.00),
(11, '2022-11-06', 111, 201, 2, 50.00),
(12, '2022-12-07', 112, 202, 1, 25.00);
INSERT INTO sales (id, date, customer_id, product_id, quantity, total_price)
VALUES
(13, '2022-01-10', 113, 205, 2, 150.00);
INSERT INTO sales (id, date, customer_id, product_id, quantity, total_price)
VALUES
(14, '2021-01-10', 114, 208, 1, 78.00);


select * from sales;


SELECT 
    SUM(total_price) AS total_sales, MONTH(date)
FROM
    Sales
WHERE
    YEAR(date) = 2022
GROUP BY MONTH(date)
ORDER BY MONTH(date);
