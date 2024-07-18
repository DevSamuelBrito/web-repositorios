import React from "react";
import { Container, Form, SubmitButton } from "./styles";
import { FaGithub, FaPlus } from "react-icons/fa";

export default function Main() {
  return (
    <div>
      <Container>
        <h1>
          <FaGithub size={25} />
          Meus repositorios
        </h1>
        <Form>
          <input type="text" placeholder="Adicionar repositorio" />
          <SubmitButton>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    </div>
  );
}
