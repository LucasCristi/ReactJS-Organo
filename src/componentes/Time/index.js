import Jogador from "../Jogador";
import "./Time.css";

const Time = (props) => {
  return props.jogadores.length > 0 ? (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome} </h3>
      <div className="colaboradores">
        {props.jogadores.map((jogador) => (
          <Jogador
            corDeFundo={props.corPrimaria}
            key={jogador.nome}
            nome={jogador.nome}
            imagem={jogador.imagem}
            selecao={jogador.selecao}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
