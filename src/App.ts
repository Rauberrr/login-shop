import e, { Application } from 'express'
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose'
import config from './config'

export default class App {
    public app: Application

    constructor() {
        this.app = e()

        this.middlewares()
        this.router()
        this.mongodb()
    }

    public listen(port): void {
        this.app.listen(port, () => {
            console.log('listenning the server')
        })
    }

    private middlewares(): void {
        this.app.use(e.json())
        this.app.use(e.urlencoded({extended: true}))
        this.app.use(cors())
    }

    private router(): void {
        this.app.use(routes)
    }

    private mongodb() {
        try{
            mongoose.connect('mongodb+srv://'+ config.mongodb.user +':'+ config.mongodb.pass +'@cluster0.y8fhlmc.mongodb.net/?retryWrites=true&w=majority')
            console.log('connect sucessfully')
        } catch (erro) {
            console.log('fail connect to database' + erro)
        }
    }
}

