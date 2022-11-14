import "./CampoTexto.css";

const CampoTexto = (props) => {
  // console.log(props)
  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    console.log(evento.target.value)
    props.aoAlterado(evento.target.value); //vem do Formulario
  };

  return (
    <div className="campo-texto">
      <label>{props.label} </label>
      <input
        value={props.valor} //valor refere-se aos states do Formulário
        onChange={aoDigitado} //está em todos os inputs no Formulário
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
