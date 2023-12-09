
const express = require('express'),
    router = express.Router()

const service = require('../services/product.services')

//http://localhost:3000/api/Productss/

async function getAllProducts(req, res) {
    const Products = await service.getAllProducts()
    res.send(Products)
}

async function getProductsById(req, res) {
    const Products = await service.getProductsById(req.params.id)
    if (Products == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(Products)
}


async function addProducts(req, res) {
    await service.addOrEditProducts(req.body)
    res.status(201).send('created successfully.')
}

async function updateProducts (req, res) {
    const affectedRows = await service.addOrEditProducts(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
}


module.exports = {
    getAllProducts,
    getProductsById,
    addProducts,
    updateProducts
};