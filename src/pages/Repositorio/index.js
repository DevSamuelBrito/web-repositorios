import React, {useState,useEffect} from "react";
import api from "../../services/api";
import { Container } from "./style";


export default function Repositorio({ match }) {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    async function load(){
      const nomeRepo = decodeURIComponent(match.params.repositorio);
      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`,{
          params:{
            state:'open',
            page: 5,
          }
        }),
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    load();
  }, [march.params.repositorio]);
  return <Container></Container>;
}
