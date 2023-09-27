import { Request, Response } from 'express'
import Product from '../schemas/Product'

class ProductController {
    public async list (req: Request, res: Response): Promise<Response> {
        const products = await Product.find()

        return res.status(200).json(products)
    } 

    public async create (req: Request, res: Response): Promise<Response> {
        if(req.user.validate.isAdmin) {
            try{

                const product = await Product.create(req.body)
            
                return res.status(200).json({msg: 'product create sucessfully' , product})
            } catch (erro) {
                throw new Error('error to create new product')
            }
        } else {
            return res.status(401).json({ erro: 'not is admin' })
        }
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        if(req.user.validate.isAdmin) {
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
        } else {
            return res.status(401).json({ erro: 'not is admin' })
        }
    }

    public async update (req: Request, res: Response): Promise<Response> {
        if(req.user.validate.isAdmin) {
            try {
                const id = req.params.id
                const data = req.body


                const product = await Product.findByIdAndUpdate(
                    id,
                    data,
                    {new: true}
                )

                if(!product) {
                    return res.status(401).json({msg: 'product not found'})
                }
            
                return res.status(200).json({msg: 'Update product sucessfully', product})
            } catch(erro) {
                throw new Error('Error when update the product')
            }
        } else {
            return res.status(401).json({ erro: 'not is admin' })
        }
    }

    
}

export default new ProductController()