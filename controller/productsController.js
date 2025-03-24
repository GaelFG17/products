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

    static async createProductController(req, res) {
        const product = req.body
        const response = await ProductsService.createProduct(product)
        if (response.status){
            res.status(response.status).json({message: response.message})
        }else{
            res.status(201).json(response)
        }
    }

    static async updateProductController(req, res){
        const {id} = req.params
        const data = req.body
        const response = await ProductsService.updateProduct(id, data)
        if (response.status){
            res.status(response.status).json({message: response.message})
        }else{
            res.status(200).json(response)
        }
    }
    
    static async deletProductController(req, res){
        const {id} = req.params
        const response = await ProductsService.deleteProduct(id)
        if (response.error){
            res.status(response.status).json({message: response.error})
        }else{
            res.status(response.status).json({message: response.message})
        }
    }
}