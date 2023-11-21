import { Router } from 'express'
import UserController from './controllers/UserController'
import AuthMiddleware from '../Middlewares/AuthMiddleware'
import ProductController from './controllers/ProductController'

const routes = Router()

routes.get('/', (req, res) => res.json({msg: 'page initial'}))

//user routes
routes.post('/sign-in', UserController.login)
routes.get('/list-users', UserController.list)
routes.post('/create-user', UserController.create)
routes.put('/update-user/:id', UserController.update)
routes.delete('/delete-user/:id', AuthMiddleware, UserController.delete)

//product routes
routes.get('/list-products', ProductController.list)
routes.post('/create-product', ProductController.create)
routes.post('/buy-product/:id', ProductController.buy)
routes.delete('/delete-product/:id', ProductController.delete)
routes.put('/update-product/:id', ProductController.update)

export default routes