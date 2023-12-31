import { model, Schema } from 'mongoose'

interface ProductInterface extends Document {
    name: string
    quantity: number
    description?: string
    price: number
    img: string
    desconto: number
}

const ProductSchema = new Schema({
    name: String,
    quantity: Number,
    description: String,
    price: Number,
    img: String,
    desconto: Number,
},
{
    timestamps: true
})

export default model<ProductInterface>('Product', ProductSchema)