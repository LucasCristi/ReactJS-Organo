//src/componentes/Rodape/index.js

import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://www.facebook.com/lucas.cristi" >
              <img src="/imagens/fb.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/home?lang=pt" >
              <img src="/imagens/tw.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lucascristi/" >
              <img src="/imagens/ig.png" alt="intragram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Lucas Cristi, através de curso React JS da <a href="https://www.alura.com.br/" >Alura</a>.</p>
      </section>
    </footer>
  );
};

export default Rodape;
