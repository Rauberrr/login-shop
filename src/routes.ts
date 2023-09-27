import { Router } from 'express'
import routesUser from './All/routes'

const routes = Router()

routes.use(routesUser)

export default routes