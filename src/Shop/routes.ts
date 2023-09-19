import { Router } from 'express'
import ProductController from './controllers/ProductController'

const routes = Router()

routes.get('/products', ProductController.list)
routes.post('/product', ProductController.create)
routes.delete('/product/:id', ProductController.delete)


export default routes