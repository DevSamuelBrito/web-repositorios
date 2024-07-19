import { React, useState, useCallback } from "react";
import { Container, Form, SubmitButton } from "./styles";
import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";
import api from "../../services/api";

export default function Main() {
  const [newRepo, setNewRepo] = useState(""); //criando o useState do input
  const [repositorios, setRepositorios] = useState([]); //criando o useState do repositorio
  const [loading, setLoading] = useState(false); //criando o useState do loading

  function handleInputChange(e) {
    //função para pegar o valor do input
    setNewRepo(e.target.value);
  }

  const handleSubmit = useCallback(
    (e) => {
      //evitar que a página carregue componente denovo
      e.preventDefault(); //evita o carregamento da página automatico

      async function submit() {
        setLoading(true);
        try {
          //vai pegar a api  e adicionar o que o usuário digitou no input
          const response = await api.get(`repos/${newRepo}`);

          const data = {
            name: response.data.full_name,
          };

          //retornando o que já tem no array e adicionando o que o usuário digitou
          setRepositorios([...repositorios, data]);
          setNewRepo("");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositorios]
  ); //vai chamar a função apenas qunado o newRepo e o repositorios mudarem

  return (
    <div>
      <Container>
        <h1>
          <FaGithub size={25} />
          Meus repositorios
        </h1>
        <Form onSubmit={handleSubmit}>
          <input
            value={newRepo}
            type="text"
            placeholder="Adicionar repositorio"
            onChange={handleInputChange}
          />
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    </div>
  );
}
