import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

import { Container, Image, User } from './styles';

function Users() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // REACT HOOK => useEffect (Efeito colateral)
  // A minha aplicação inicia ( A pagina carregou, useEffect é chamado)
  // Quando um estado está no array de dependecia do useEffect é alterado
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3001/users");

      setUsers(newUser);
    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUser = users.filter((user) => user.id !== userId);
    setUsers(newUser);
  }

  function goBackPage() {
    navigate('/')
  }


  return (
    <Container>

      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItens isBlur={true}>

        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>


        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>


      </ContainerItens>



    </Container>
  )

}

export default Users;