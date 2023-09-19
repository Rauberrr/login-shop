import { Router } from 'express'
import UserController from './databse/controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => res.json({msg: 'page initial'}))
routes.get('/users', UserController.list)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)
routes.delete('')

export default routes