import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";
import { Container, Owner, Loading, BackButton } from "./style";

export default function Repositorio({ match }) {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);
      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            page: 5,
          },
        }),
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    load();
  }, [match.params.repositorio]);

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }
  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30} />
      </BackButton>
      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
        <h1>{repositorio.name}</h1>
        <h1>{repositorio.description}</h1>
      </Owner>
    </Container>
  );
}
