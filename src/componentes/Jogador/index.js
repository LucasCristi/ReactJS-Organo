import './Jogador.css'

//Outra forma de passar props é desestruturando
const Jogador = ({nome, imagem, selecao, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
            <h4>{nome} </h4>
            <h5>{selecao} </h5>
            </div>
        </div>
    )
}

export default Jogador