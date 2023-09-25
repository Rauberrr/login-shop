import { Router } from 'express'
import UserController from './controllers/UserController'
import AuthMiddleware from '../Middlewares/AuthMiddleware'

const routes = Router()

routes.get('/users', AuthMiddleware, UserController.list)
routes.post('/sign-in', UserController.create)
routes.delete('/user/:id', UserController.delete)

export default routes