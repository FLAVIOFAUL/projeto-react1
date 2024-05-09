import React from "react";

import {
  Container,
  Image,
  H1,
  ContainerItens,
  Input,
  InputLabel,
  Button,
} from "./styles";

function App() {
  return (
    <Container>
      <Image/>

      <ContainerItens> 
          <H1>Olá</H1>

          <InputLabel>Nome</InputLabel>
          <Input placeholder="Nome"/>

          <InputLabel>Idade</InputLabel>
          <Input placeholder="Idade"/>

            <Button>Cadastrar</Button>

      </ContainerItens>
   
    </Container>
  );
}

export default App;