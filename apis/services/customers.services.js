const db = require('../../db_connection')

module.exports.getAllcustomers = async () => {
    const [records] = await db.query("SELECT * FROM customers")
    return records;
}

module.exports.getCustomersById = async (id) => {
    const [[record]] = await db.query("SELECT * FROM Customers WHERE id = ?", [id])
    return record;
}


module.exports.addOrEditCustomers = async (obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL customers_add_or_edit(?,?,?)",
        [id, obj.name, obj.id])
    return affectedRows;
}

// module.exports.getProductsByCustomersID = async (id)=>{
//     var sql = "SELECT customers.name AS customers, orders.Total_products, orders.Total_cost FROM orders JOIN customers ON customers.id = orders.order_ID";
//   await db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     return result;
//   });
    // const [[record]] = await db.query("SELECT * FROM Customers WHERE id = ?", [id])
    // return record;
// }


module.exports.getProductsByCustomersID = async (id)=>{
    const [[record]] = await db.query("SELECT customers.name AS customers,orders.order_ID, orders.Total_products, orders.Total_cost FROM orders JOIN customers ON orders.order_ID= ?",[id] )
    return record;
}

module.exports.getProductsByOrderID = async (id)=>{
    const [[record]] = await db.query("SELECT orders.order_ID, products.product_id, products.name, products.colour, products.size,products.price FROM products JOIN orders ON orders.order_ID=?",[id])
    return record;
}