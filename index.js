const express = require('express')
const bodyparser = require('body-parser');
const app = express();
require('express-async-errors')

const log = require('log4js').getLogger('index')

const PORT = process.env.PORT || 3000;

const db = require('./db_connection')
const customersRouts = require('./apis/routes/customers')
const productsRouts = require('./apis/routes/products')
const ordersRouts = require('./apis/routes/orders')

//middleware
app.use(bodyparser.json())
.use('/api/customers',customersRouts)
.use('/api/products',productsRouts)
.use('/api/orders',ordersRouts)
.use((err, req, res, next) => {
    log.debug(err)
    res.status(err.status || 500).send('Something went wrong!')
})


db.query('SELECT 1')
    .then(() => {
        // console.log("DB Connection succeeded")

        app.listen(PORT, () => {
            log.debug(`API listing at http://localhost:${PORT}`)
        })

    })
    .catch((err) => log.debug(`DB Connection failed. \n` + err))





