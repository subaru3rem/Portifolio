import img_perfil from './images/img_perfil.jpg';
import programming_photo from './images/programming_photo.jpg';
import ella_site_desktop from './images/site_ella_desktop.png';
import arrow_next from './images/arrow_next.png';
import arrow_previos from './images/arrow_previos.png';
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
        <button onClick={()=>console.log('foi')}><img src={arrow_previos}/></button>
        <div className='projeto'>
          <div>
          <h1>Site minha namorada</h1>
          <p>Um site que eu fiz para minha namorada no começo dos meus estudos,por esse fato,
            diversas coisas estão em seus modelos iniciais,mas em algum momento eu pretendo recriá-lo
            com meus novos conhecimentos. </p>
          <p>
            link do site:<br/><a href='https://ella-site.vercel.app'>https://ella-site.vercel.app</a><br/><br/>
            link github:<br/> <a href='https://github.com/subaru3rem/ella-site'>https://github.com/subaru3rem/ella-site</a>
          </p>
          </div> 
          <img src={ella_site_desktop}/>
        </div>
        <div className='projeto'>
          <div>
          <h2>Clone site nave do conhecimento</h2>
          <p>
            Esse é um projeto full-stack que eu comecei enquanto estava no curso de front-end e depois 
            conclui ele com um projeto de servido feito em python usando o framework flask, esse foi 
            um dos projetos onde eu obtive mais aprendizado, tendo aprendido diversas ferramentas tanto
            no front-end quanto no back-end. 
          </p>
          </div>
          <img></img>
        </div>
        <button onClick={()=>console.log('foi')}><img src={arrow_next}/></button>
        </div>
      </section>
    </div>
  );
}

export default App;
