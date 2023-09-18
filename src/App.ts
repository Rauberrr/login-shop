import e, { Application } from 'express'
import cors from 'cors'
import routesApp from './routes'

export default class App {
    public app: Application

    constructor() {
        this.app = e()

        this.middlewares()
        this.routes()
        this.db()
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

    private routes(): void {
        this.app.use(routesApp)
    }

    private db() {

    }
}

