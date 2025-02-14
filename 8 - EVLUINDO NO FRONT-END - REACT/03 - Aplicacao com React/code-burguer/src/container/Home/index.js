import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import Burger from "../../assets/burger.svg"

import { Container, Image, Button, InputLabel, Input } from './style'

function App() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
  
    const inputName = useRef();
    const inputAge = useRef();
  
  
    async function addNewUser() {
  
      const { data: newUser } = await axios.post("http://localhost:3001/users",{
        name: inputName.current.value,
        age: inputAge.current.value
      })       
      
  
      console.log(newUser)
  
      setUsers([...users, newUser])
  
      navigate('/usuarios')
  
    }

// const App = () => {

//     const [ orders, setOrders ] = useState([]);
//     const navigate = useNavigate();

//     const inputOrder = useRef();
//     const inputName = useRef();

//     async function AddOrder(){
//         const { data: newOrder} = axios.post("http://localhost:3001/users", {

//         order: inputOrder.current.value,
//         name: inputName.current.value

//         });

//         console.log(newOrder)

//         setOrders([...orders, newOrder])

//         navigate('/usuarios')
//     }

    return <Container>

        <Image src={Burger} alt="Imagem de um hambúrguer" />

        <h1>
            Faça seu pedido!
        </h1>

        <div>
            <InputLabel>Pedido</InputLabel>
            <Input ref={inputAge} placeholder="Pedido"></Input>

            <InputLabel>Nome do Cliente</InputLabel>
            <Input ref={inputName} placeholder="Nome do Cliente"></Input>
        </div>

        <Button onClick={addNewUser}> Novo pedido</Button>


    </Container>

}

export default App;