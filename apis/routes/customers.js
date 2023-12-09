const express = require("express");

const { getAllCustomers,getCustomersById,addOrEditCustomers,updateCustomers,getProductsByCustomersID,getProductsByOrderID} = require("../controllers/customersController")

const router = express.Router();

router.get("/", getAllCustomers)
.get("/:id",getCustomersById)
.post('/', addOrEditCustomers)
.put("/:id",updateCustomers)
.get("/productWithID/:id",getProductsByCustomersID)
.get("/productswithOrderID/:id",getProductsByOrderID)


module.exports = router