const {ProductsController} = require('../controller/productsController')
const router = require('express').Router()

router.get('/', ProductsController.getAllProductsController)