import { Router } from 'express'

const routesApp = Router()

routesApp.get('/', (req, res) => {
    res.status(200).json({msg: 'sucessfully'})
})

export default routesApp