import { Router } from 'express'
import routesUser from './App/routes'

const routes = Router()

routes.use(routesUser)

export default routes