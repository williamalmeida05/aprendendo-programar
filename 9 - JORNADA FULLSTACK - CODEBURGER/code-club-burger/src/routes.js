import { Router } from 'express'
import { v4 } from 'uuid'

import User from './app/models/User'

// Tem como responsabilidade ser criado a rota. Sempre lembrar de exportar, para que fique disponível no arquivo de aap, o qual importa.

const routes = new Router()

routes.get('/', async (request, response) => {
    const user = await User.create({
        id: v4(),
        name: 'Willam Almeida',
        email: 'willall@gmail.com',
        password_hash: '051125lapa',
        admin: true,
    })
    return response.json(user)
})

export default routes

