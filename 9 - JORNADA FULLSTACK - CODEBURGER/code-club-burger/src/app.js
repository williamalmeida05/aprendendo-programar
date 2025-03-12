import express from 'express'
import routes from './routes'
import './database'
// Tem como responsabilidade instanciar a class e chama o metodo contructor, middlewares e routes.

class App {
    constructor() {
        this.app = express()

        this.middlewares()
        this.routes()

    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(routes)

    }
}

export default new App().app

