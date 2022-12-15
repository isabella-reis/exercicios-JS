import gitlogo from "../assets/gitlogo.png";
import { Container } from "./styles";
import ItemRepo from "../components/ItemRepo";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";

import { useState } from "react";

function App() {
  //Estado para armazenar os repositórios que a gente achou
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    //Se achar o id vamos pegaro qeu já temos de estado e concatenar tudo que já temos com o novo estado
    if (data.id) {
      const exist = repos.find((repo) => repo.id === data.id);

      if (!exist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado.");
  };

  const handleRemoveRepo = (id) => {
    const remove = repos.filter(repo => repo.id !== id)
    setRepos(remove);
    } 


  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="GitHub Logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos && repos.map(repo => 
        <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} key={repo.id} />
      )}
    </Container>
  );
}

export default App;
