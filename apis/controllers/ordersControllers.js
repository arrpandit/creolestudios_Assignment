
const express = require('express'),
    router = express.Router()

const service = require('../services/orders.services')

//http://localhost:3000/api/Orderss/

async function getAllOrders(req, res) {
    const Orders = await service.getAllOrders()
    res.send(Orders)
}

async function getOrdersById(req, res) {
    const Orders = await service.getOrdersById(req.params.id)
    if (Orders.length == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(Orders)
}

async function deleteOrdersById(req, res) {
    const Orders = await service.deleteOrdersById(req.params.id)
    if (Orders.length == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send("Deleted")
}


async function addOrders(req, res) {
    const data = await service.addOrders(req.body,)
    console.log("data", data)
    res.status(201).send('created successfully.')
}

async function updateOrders(req, res) {
    const affectedRows = await service.updateOrders(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
}


module.exports = {
    getAllOrders,
    getOrdersById,
    addOrders,
    updateOrders,
    deleteOrdersById
};