import img_perfil from './images/img_perfil.jpg';
import programming_photo from './images/programming_photo.jpg';
import './App.css';
import Projetos from './projetos';
import arrow_next from './images/arrow_next.png';
import arrow_previos from './images/arrow_previos.png';

function App() {
  return (
    <div>
      <header id='menu_principal'>
        <a>Quem sou?</a>
        <a>O que eu faço?</a>
        <a>Projetos</a>
        <a>Contatos</a>
      </header>
      <section className='destaques'>
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
          espero que gostem do que vêem e muito obrigado pela visita
          </p>
        </div>
      </section>
      <section className='primary_color'>
      <div className='destaques'>
        <div className='textos'>
          <h1>O que eu faço?</h1>
          <p>
          Ja sabem um pouco da minha trajetória mas vamos ao que interessa, o que eu sei fazer?
          Creio que já posso me considerar um desenvolvedor full-stack apesar de ainda estar
          aprendendo e estar em constante evolução, tenho projetos na área do front-end, back-end
          e um aplicativo mobile e irei apresentar eles, tenho alguns projetos além dos que serão
          apresentados aqui, então se houver algum interessante em como eles foram feitos e sobre
          outros projetos, não deixe de olhar meu github listado ao fim da página.
          </p>
        </div>
        <img src={programming_photo} className='imgs'/>
      </div>
      </section>
      <section className='projetos'>
        <div id='projetos_titulo'>
        <p>Projetos</p>
        </div>
        <div className='projetos_painel'>
        <button><img src={arrow_previos}/></button>
        <Projetos/>
        <button><img src={arrow_next}/></button>
        </div>
      </section>
    </div>
  );
}


export default App;
