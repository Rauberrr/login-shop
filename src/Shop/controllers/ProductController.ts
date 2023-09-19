import { Request, Response } from 'express'
import Product from '../schemas/Product'

class ProductController {
    public async list (req: Request, res: Response): Promise<Response> {
        const products = await Product.find()

        return res.status(200).json(products)
    } 

    public async create (req: Request, res: Response): Promise<Response> {
        try{

            const product = await Product.create(req.body)
            
            return res.status(200).json(product)
        } catch (erro) {
            throw new Error('error to create new product')
        }
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const product = await Product.findByIdAndDelete(id)

            if(!product) {
                return res.status(401).json({msg: 'product not found'})
            }
            
            return res.status(200).json({msg: 'Delete product sucessfully', product})
        } catch(erro) {
            throw new Error('Error when delete the product')
        }
    }

    
}

export default new ProductController()