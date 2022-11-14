import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {
  const listaPosicoes = [
    {
      nome: "",
      corPrimaria: "",
      corSecundaria: "",
    },
    {
      nome: "Atacante",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Goleiro",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Lateral direito",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Lateral esquerdo",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Meio-campo",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FFF3F3",
    },
    {
      nome: "Volante",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Zagueiro",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [jogadores, setJogadores] = useState([]); //receberá a lista que vem do Formulário

  const novoJogadorAdicionado = (jogador) => {
    // console.log(jogador); //vai criar um objeto no Formulário
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        listaPosicoes={listaPosicoes.map(posicao => posicao.nome)}
        jogadorCadastrado={(jogador) => novoJogadorAdicionado(jogador)}
      />
      {listaPosicoes.map((posicao) => (
        <Time
          key={posicao.nome}
          nome={posicao.nome}
          corPrimaria={posicao.corPrimaria}
          corSecundaria={posicao.corSecundaria}
          jogadores={jogadores.filter(jogador => jogador.posicao === posicao.nome)}
        />
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
