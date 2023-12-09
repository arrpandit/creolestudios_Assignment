const express = require("express");

const { getAllProducts,getProductsById,addProducts,updateProducts} = require("../controllers/productsControllers")

const router = express.Router();

router.get("/", getAllProducts)
.get("/:id",getProductsById)
.post('/', addProducts)
.put('/:id',updateProducts)


module.exports = router   