const {ProductsService} = require('../services/productsService')

class ProductsController {
    static async getAllProductsController(req, res) {
        const response = await ProductsService.getAllProducts()
        if (response.status){
            res.status(response.status).json({message : response.message})
        }else{
            res.status(200).json(response)
        }
    }

    static async getAllProductByIdController(req, res) {
        const {id} = req.params
        const response = await ProductsService.getProductById(id)
        if  (response.status){
            res.status(response.status).json({message: response.message})
        }else{
            res.status(200).json(response)
        }
    }
}