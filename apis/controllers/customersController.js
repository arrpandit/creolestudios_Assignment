const express = require('express')
const router = express.Router()
const db = require('../../db_connection')
const service = require('../services/customers.services')

//http://localhost:3000/api/Customers/

async function getAllCustomers(req, res) {
    const Customers = await service.getAllcustomers()
    res.send(Customers)
}

async function getCustomersById(req, res) {
    const Customers = await service.getCustomersById(req.params.id)
    if (Customers == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(Customers)
}

async function addOrEditCustomers(req, res) {
    await service.addOrEditCustomers(req.body)
    res.status(201).send('created successfully.')
}

async function updateCustomers(req, res) {
    const affectedRows = await service.addOrEditCustomers(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
}

async function getProductsByCustomersID(req, res) {
    const Orders = await service.getProductsByCustomersID(req.params.id)
    if (Orders == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(Orders)
}

async function getProductsByOrderID(req, res) {
    const Orders = await service.getProductsByOrderID(req.params.id)
    if (Orders == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(Orders)
}




module.exports = {
    getAllCustomers,
    getCustomersById,
    addOrEditCustomers,
    updateCustomers,
    getProductsByCustomersID,
    getProductsByOrderID
};