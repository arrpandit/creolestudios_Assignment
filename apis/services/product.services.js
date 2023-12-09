const db = require('../../db_connection')

module.exports.getAllProducts = async () => {
    const [records] = await db.query("SELECT * FROM products")
    return records;
}

module.exports.getProductsById = async (product_id) => {
    const [[record]] = await db.query("SELECT * FROM products WHERE product_id = ?", [product_id])
    return record;
}

module.exports.addOrEditProducts = async (obj, product_id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL products_add_or_edit(?,?,?,?,?)",
        [product_id, obj.name, obj.colour,obj.size, obj.price])
    return affectedRows;
}

    
