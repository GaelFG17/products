const {ProductsController} = require('../controller/productsController')
const router = require('express').Router()

router.get('/', ProductsController.getAllProductsController)
router.get('/:id', ProductsController.getAllProductByIdController)
router.post('/', ProductsController.createProductController)
router.put('/:id', ProductsController.updateProductController)
router.delete('/:id', ProductsController.deletProductController)

module.exports = router