import img_perfil from './images/img_perfil.jpg';
import './App.css';

function App() {
  return (
    <div>
      <header id='menu_principal'>
        <a>Quem sou?</a>
        <a>O que eu faço?</a>
        <a>Projetos</a>
        <a>Contatos</a>
      </header>
      <section className='qm_sou'>
        <img src={img_perfil} className='imgs'/>
        <div className='textos'>
          <h1>Quem sou?</h1>
          <p>
          Muito prazer, meu nome é Cainã Costa, sou um amante de tecnologia e um estudante full-stack,
          desde muito novo sou um amante de tecnologia sempre visando robótica como minha área de atuação,
          conforme a idade veio eu amadureci e minhas metas mudaram, fui desde a vontade de virar designer
          até o ano de 2022 onde atravéz da instituição Nave do Conhecimento eu tive a oportunidade de
          aprender um pouco sobre montagem e manutenção onde ali eu tive o vislumbre do que seria minha
          paixão reacender, minha paixão pela área foi renovada e ainda através dessa instituição eu
          aprendi a progamar e tive diversas dicas e aprendizados na área que me trouxe ao momento em
          que estou hoje, nesse site terá um pouco da minha caminhada e das minhas conquistas na área,
          espero que gostem do que vêem e muito obrigada pela visita
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
