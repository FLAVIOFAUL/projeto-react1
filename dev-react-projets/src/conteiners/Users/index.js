import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";



import Axios from "axios";
import Avatar from "./assest/avatar.svg";
import Arrow from "./assest/arrow.svg";
import Trash from "./assest/trash.svg";
import {
  Container,
  Image,
  H1,
  ContainerItens,
  Button,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate= useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await Axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  

  async function deleteUser(userId) {
    await Axios.delete("http://localhost:3001/users/${userId");
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

       function goBackPage(){
       Navigate("/")
}
  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItens>
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

        <Button onClick={goBackPage} >
        <img alt="seta" src={Arrow} />  Voltar
          
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;