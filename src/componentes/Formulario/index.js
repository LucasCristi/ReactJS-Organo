import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSupensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  
  const listaPosicao = [
    "",
    "Atacante",
    "Goleiro",
    "Lateral direito",
    "Lateral esquerdo",
    "Meio-campo",
    "Volante",
    "Zagueiro",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    // console.log('Form enviado com sucesso!', nome, selecao, imagem, posicao)
    props.jogadorCadastrado({ //props criada no App.js para pegar o objeto
      nome,
      selecao,
      imagem,
      posicao
    })
  };

  const [nome, setNome] = useState('');
  const [selecao, setSelecao] = useState('');
  const [imagem, setImagem] = useState('');
  const [posicao, setPosicao] = useState('');

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do jogador"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)} //aoAlterado é props no CampoTexto
        />
        <CampoTexto
          obrigatorio={true}
          label="País"
          placeholder="Digite de qual país ele é"
          valor={selecao}
          aoAlterado={(valor) => setSelecao(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem (foto)"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSupensa
          obrigatorio={true}
          label="Posição"
          itens={listaPosicao}
          valor={posicao}
          aoAlterado={(valor) => setPosicao(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
