SELECT * FROM products;

SELECT id, name FROM products; 

SELECT * FROM products
where price > 100;

SELECT count(*) as 'Cost more then 100' FROM products
where price > 100;

SELECT * FROM orders
where created > '2020-12-15';

SELECT * FROM orders
order by created desc;

SELECT orderId, sum(amount) FROM orderlist
JOIN orders ON orders.id = orderlist.orderId
GROUP BY orderId;

SELECT orders.id as orderId, name FROM orderlist
JOIN orders on orders.id = orderlist.orderId
JOIN products ON products.id = orderlist.productId;

SELECT  orders.id, sum(amount * price) as totalOrderPrice FROM orderlist
JOIN orders on orders.id = orderlist.orderId
JOIN products ON products.id = orderlist.productId
group by orders.id;








