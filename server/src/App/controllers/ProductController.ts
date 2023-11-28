import { Request, Response } from 'express'
import Product from '../schemas/Product'

class ProductController {

    public async buy (req: Request, res: Response): Promise<Response> {

        try {
            const productId = req.params.id;
            const product = await Product.findById(productId);
      
            if (!product) {
              return res.status(404).json({ error: 'Produto não encontrado' });
            }
      
            if (product.quantity === 0) {
              return res.status(400).json({ error: 'Produto sem estoque' });
            }
            
            const quantity = req.body.quantity
            console.log('quantity: '+quantity)
            product.quantity -= quantity;

            await product.save();
      
            return res.status(200).json({ message: 'Compra bem-sucedida', product });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao processar a compra' });
          }


    }

    public async list (req: Request, res: Response): Promise<Response> {
        const products = await Product.find()

        return res.status(200).json(products)
    } 

    public async create (req: Request, res: Response): Promise<Response> {

            try{
                const product = await Product.create(req.body)
            
                return res.status(200).json({msg: 'product create sucessfully' , product})
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

    public async update (req: Request, res: Response): Promise<Response> {
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
    }

    
}

export default new ProductController()