import { Router } from 'express'
import routesUser from './Users/routes'
import routesProduct from './Shop/routes'

const routes = Router()

routes.get('/', (req, res) => res.json({msg: 'page initial'}))
routes.use(routesUser)
routes.use(routesProduct)

export default routes