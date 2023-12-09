const db = require('../../db_connection')

module.exports.getAllOrders = async () => {
    const [records] = await db.query("SELECT * FROM orders")
    return records;
}

module.exports.getOrdersById = async (order_ID) => {
    const [record] = await db.query("SELECT * FROM orders WHERE order_ID = ?", [order_ID])
    return record;
}

module.exports.deleteOrdersById = async (products_id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM orders WHERE products_id = ?", [products_id])
    return affectedRows;
}

module.exports.addOrders = async (obj) => {
    const [[[{affectedRows}]]] = await db.query("CALL orders_add(?,?,?,?,?)",
        [obj.order_ID,obj.Total_products,obj.Total_cost,obj.Associated_customer_Id,obj.products_id])
    return affectedRows;
}

module.exports.updateOrders = async (obj,product_id) => {
    const [[[{affectedRows}]]] = await db.query("CALL orders_Update(?,?,?,?)",
        [product_id,obj.Total_products,obj.Total_cost,obj.Associated_customer_Id])
    return affectedRows;
}