create table orders ,products , customers in assassessment_db Databases

2 > create procedure to add or update customers and products and orders
for products -> 

CREATE PROCEDURE `assessment_db`.`products_add_or_edit` (
IN _id INT,
IN _name VARCHAR(45),
IN _colour VARCHAR(45),
IN _size VARCHAR(45),
IN _price INT
)
BEGIN
	IF _id = 0 THEN
		INSERT INTO products(name,colour,size,price)
		VALUES (_name,_colour,_size,_price);
        
	ELSE
		UPDATE products
        SET price = _price
        WHERE product_id = _id;
	END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END

.. for customers->
CREATE PROCEDURE `assessment_db`.`customers_add_or_edit`(
IN _id INT,
IN _name VARCHAR(45),
IN _order_ID INT

)
BEGIN
	IF _id = 0 THEN
		INSERT INTO customers(name,order_ID)
		VALUES (_name,_order_ID);
        
	ELSE
		UPDATE customers
        SET name = _name
        WHERE id = _id;
	END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END


---- Orders

CREATE PROCEDURE `assessment_db`.`orders_add`(
IN _order_ID INT,
IN _Total_products INT,
IN _Total_cost INT,
IN _Associated_customer_Id INT,
IN _products_id INT
)
BEGIN
		INSERT INTO orders(order_ID,Total_products,Total_cost,Associated_customer_Id,products_id)
		VALUES (_order_ID,_Total_products,_Total_cost,_Associated_customer_Id,_products_id);    
    SELECT ROW_COUNT() AS 'affectedRows';
END


CREATE PROCEDURE `assessment_db`.`orders_Update`(
IN _id INT,
IN _Total_products INT,
IN _Total_cost INT,
IN _Associated_customer_Id INT
)
BEGIN
		UPDATE orders
        SET Total_cost = _Total_cost , Total_products = _Total_products
        WHERE products_id = _id AND Associated_customer_Id = _Associated_customer_Id;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END



step to run the application  

1 -> npm i
2 -> npm run start

for products - > 
      http://localhost:3000/api/products/ (GET Methods to fetch all products)
      http://localhost:3000/api/products/id (GET Methods to fetch products with id)
      http://localhost:3000/api/products/ (POST Methods to add a new products)
      http://localhost:3000/api/products/id (PUT Methods to update products with id)


for customers - > 
      http://localhost:3000/api/customers/ (GET Methods to fetch all customers)
      http://localhost:3000/api/customers/id (GET Methods to fetch customers with id)
      http://localhost:3000/api/customers/ (POST Methods to add a new customers)
      http://localhost:3000/api/customers/id (PUT Methods to update customers with id)  
	  http://localhost:3000/api/customers/productWithID/id (GET methode to know all orders placed details by customers)   

for orders - >
      http://localhost:3000/api/orders	 (GET Methods to fetch all orders)  
	  http://localhost:3000/api/orders/id (GET Methods to fet orders with orders id)
	  http://localhost:3000/api/orders  (POST Methods to add new orders)
	  http://localhost:3000/api/orders/id ( PUT Methods to update orders with id)
	  http://localhost:3000/api/orders/id (Delete Methods to delete products from orders with product id make sure Associated_customer_Id also need to provide in body)
 



SELECT customers.name AS customers, orders.order_ID, orders.Total_products, orders.Total_cost FROM orders JOIN customers ON customers.id = orders.order_ID;

SELECT orders.order_ID, products.product_id, products.name, products.colour, products.size,products.price FROM products JOIN orders ON orders.order_ID=1; 

