const express = require('express');
const uuid = require('uuid');

const port = 3000;
const app = express();
app.use(express.json());

const orders = [];

// Middleware para logar o método e a URL da requisição
app.use((request, response, next) => {
    console.log(`[${request.method}] - ${request.url}`);
    next(); // Passa o controle para o próximo middleware ou rota
});

checkUserId = (request, response, next) => {
    const { id } = request.params;

    const index = orders.findIndex(user => user.id === id);

    if (index < 0) {
        return response.status(404).json({ error: "User not found" });
    }

    request.userIndex = index;
    request.userId = id;

    next();
};

// Rotas
app.get('/orders', (request, response) => {
    response.json(orders);
});

app.post('/orders', (request, response) => {
    const { order, clientName, price } = request.body;

    const user = { id: uuid.v4(), order, clientName, price, status: "Em preparação" };

    orders.push(user);
    return response.status(201).json(user);
});

app.put('/orders/:id', checkUserId, (request, response) => {
    const { order, clientName, price, status } = request.body;
    const index = request.userIndex;
    const id = request.userId;

    const updateOrder = { id, order, clientName, price, status };

    orders[index] = updateOrder;

    return response.json(updateOrder);
});

app.delete('/orders/:id', checkUserId, (request, response) => {
    const index = request.userIndex;

    orders.splice(index, 1);

    return response.status(204).json();
});

// Rota PATCH para atualizar o status do pedido para "Pronto"
app.patch('/orders/:id', checkUserId, (request, response) => {
    const index = request.userIndex;

    // Atualizando o status do pedido para "Pronto"
    orders[index].status = "Pronto";

    return response.json(orders[index]);
});
// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 🍔`);
});
