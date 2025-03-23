const {Products} = require('../model/products')

class ProductsService {
    static async getAllProducts(){
        try{
            const products = await Products.find()
            if (products.length > 0){
                return products
            }else{
                return {status: 404, message: 'No products found'}
            }
        }catch(error){
            return {status: 500, message: error.message}
        }
    }

    static async getProductById(id){
        try{
            const product = await Products.findById(id)
            if (product){
                return product
            }else{
                return {status: 404, message: 'Product not found'}
            }
        }catch(error){
            return {status: 500, message: error.message}
        }
    }

    static async createProduct(product){
        try{
            const newProduct = new Products(product)
            const productSaved = await newProduct.save()
            if (productSaved){
                return productSaved
            }else{
                return {status: 400, message: 'Error creating product'}
            }
        }catch(error){
            return {status: 500, message: error.message}
        }
    }

    static async updateProduct(id, data){
        try{
            const productUpdated = await Products.findByIdAndUpdate(id, data, {new: true})
            if (productUpdated){
                return productUpdated
            }else{
                return {status: 400, message: 'Error updating product'}
            }
        }catch(error){
            return {status: 500, message: error.message}
        }
    }

    static async deleteProduct(id){
        try{
            const productDeleted = await Products.findByIdAndDelete(id)
            if (productDeleted){
                return {status: 200, message: 'Product deleted'}
            }else{
                return {status: 404, error: 'Product not found'}
            }
        }catch(error){
            return {status: 500, error: error.message}
        }
    }
}

module.exports = {ProductsService}