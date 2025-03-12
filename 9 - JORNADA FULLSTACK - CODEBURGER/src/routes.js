const { Router } =  require("express")
const { request } = require("./app")

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({message: "Hello World"})
})

module.exports = routes

