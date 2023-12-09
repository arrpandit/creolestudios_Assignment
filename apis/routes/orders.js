const express = require("express");

const { getAllOrders,addOrders,updateOrders,getOrdersById,deleteOrdersById} = require("../controllers/ordersControllers")

const router = express.Router();

router.get("/", getAllOrders)
.get("/:id",getOrdersById)
.post('/', addOrders)
.put('/:id',updateOrders)
.delete('/:id',deleteOrdersById)

module.exports = router