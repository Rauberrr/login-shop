import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.list)
routes.post('/user', UserController.create)
routes.delete('/user/:id', UserController.delete)

export default routes