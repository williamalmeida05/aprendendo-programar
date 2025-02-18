import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import Sacola from "../../assets/sacola-pedidos.svg"
import Trash from "../../assets/trash.svg"

import { Container, Image, Button, User } from './style'

function Users() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUsers() {
            const { data: newUser } = await axios.get("http://localhost:3001/users")

            setUsers(newUser)
        }
        fetchUsers()

    }, [])

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)
        const newUser = users.filter((user) => user.id !== userId)        
        setUsers(newUser)
    }

    function goBackPage() {

        navigate('/')

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

    return( <Container>

        <Image src={Sacola} alt="Imagem de uma sacola" />

        <h1>Pedidos</h1>

       <ul>
        {users.map((user) => (
            <User key={user.id}>
                <div>
                <p>{user.age}</p>
                <p>{user.name}</p> 
                
                </div>
                
                <button onClick={() => deleteUser(user.id)}>
                    <img src={Trash} alt="lata-de-lixo"/>
                </button>
            </User>
        ))}
       </ul>

        <Button isBack={true} onClick={goBackPage}> Voltar</Button>


    </Container>)

}

export default Users;