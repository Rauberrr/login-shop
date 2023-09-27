import { Router } from 'express'
import UserController from './controllers/UserController'
import AuthMiddleware from '../Middlewares/AuthMiddleware'
import ProductController from './controllers/ProductController'

const routes = Router()

routes.get('/', (req, res) => res.json({msg: 'page initial'}))

//user routes
routes.post('/sign-in', UserController.login)
routes.get('/list-users', AuthMiddleware, UserController.list)
routes.post('/create-user', AuthMiddleware, UserController.create)
routes.put('/update-user/:id', AuthMiddleware, UserController.update)
routes.delete('/delete-user/:id', AuthMiddleware, UserController.delete)

//product routes
routes.get('/list-products', ProductController.list)
routes.post('/create-product', AuthMiddleware, ProductController.create)
routes.delete('/delete-product/:id', AuthMiddleware, ProductController.delete)
routes.put('/update-product/:id', AuthMiddleware, ProductController.update)

export default routes