import img_perfil from './images/img_perfil.jpg';
import programming_photo from './images/programming_photo.jpg';
import './App.css';
import {Projetos, button_next, button_previos} from './projetos';
import arrow_next from './images/arrow_next.png';
import arrow_previos from './images/arrow_previos.png';
import img_email from './images/img_email.png';
import img_insta from './images/img_insta.png';
import img_github from './images/img_github.png';

function App() {
  return (
    <div>
      <Header/>
      <Header_responsive/>
      <section className='destaques'>
        <img src={img_perfil} className='imgs'/>
        <div className='textos'>
          <h1>Quem sou?</h1>
          <p>
          Muito prazer, meu nome é Cainã Costa, sou um amante de tecnologia e um estudante full-stack,
          desde muito novo sou um amante de tecnologia sempre visando robótica como minha área de atuação,
          conforme a idade veio eu amadureci e minhas metas mudaram, fui desde a vontade de virar designer
          até o ano de 2022 onde através da instituição Nave do Conhecimento eu tive a oportunidade de
          aprender um pouco sobre montagem e manutenção onde ali eu tive o vislumbre do que seria minha
          paixão reacender, minha paixão pela área foi renovada e ainda através dessa instituição, eu
          aprendi a programar e tive diversas dicas e aprendizados na área que me trouxe ao momento em
          que estou hoje, nesse site terá um pouco da minha caminhada e das minhas conquistas na área,
          espero que gostem do que vêem e muito obrigado pela visita.
          </p>
        </div>
      </section>
      <section className='primary_color'>
      <div className='destaques'>
        <div className='textos'>
          <h1>O que eu faço?</h1>
          <p>
          Já sabem um pouco da minha trajetória mas vamos ao que interessa, o que eu sei fazer?
          Creio que já posso me considerar um desenvolvedor full-stack apesar de ainda estar
          aprendendo e estar em constante evolução, tenho projetos na área do front-end, back-end
          e um aplicativo mobile e irei apresentar eles, tenho alguns projetos além dos que serão
          apresentados aqui, então se houver algum interessante em como eles foram feitos e sobre
          outros projetos, não deixe de olhar meu Github listado ao fim da página.
          </p>
        </div>
        <img src={programming_photo} className='imgs'/>
      </div>
      </section>
      <section className='projects'>
        <div id='projetos_titulo'>
        <p>Projetos</p>
        </div>
        <div className='projetos_painel'>
        <button className="project_button" onClick={button_previos}><img src={arrow_previos}/></button>
        <div className="projetos">
        <Projetos/>
        </div>
        <button className="project_button" onClick={button_next}><img src={arrow_next}/></button>
        </div>
      </section>
      <footer>
        <div className='titulo_contatos'>
        <p>Contatos</p>
        </div>
        <p>
          Aqui disponibilizarei algumas formas para você me conhecer mais e para entrar em contato comigo, caso goste do meu trabalho
        </p>
        <div className='contatos'>
        <Contatos/>
        </div>
      </footer>
    </div>
  );
}
function Header(){
  let destaques = document.getElementsByClassName('destaques');
  let projetos = document.getElementsByClassName('projetos');
  let contatos = document.getElementsByClassName('titulo_contatos');
  return <header id='menu_principal'>
  <a onClick={()=>destaques[0].scrollIntoView({behavior: "smooth"})}>Quem sou?</a>
  <a onClick={()=>destaques[1].scrollIntoView({behavior: "smooth"})}>O que eu faço?</a>
  <a onClick={()=>projetos[0].scrollIntoView({behavior: "smooth"})}>Projetos</a>
  <a onClick={()=>contatos[0].scrollIntoView({behavior: "smooth"})}>Contatos</a>
</header>
}
function Header_responsive(){
  let destaques = document.getElementsByClassName('destaques');
  let projetos = document.getElementsByClassName('projetos');
  let contatos = document.getElementsByClassName('titulo_contatos');
  return <header class="responsive">
  <div class="menu_responsive">
      <p class="item_responsive">Caina_dev</p>
      <button className='bt_responsive' onClick={bt_responsive}>
       <div></div>
       <div></div>
       <div></div>
      </button>
  </div>
  <nav id="responsive_menu">
  <a onClick={()=>destaques[0].scrollIntoView({behavior: "smooth"})}>Quem sou?</a>
  <a onClick={()=>destaques[1].scrollIntoView({behavior: "smooth"})}>O que eu faço?</a>
  <a onClick={()=>projetos[0].scrollIntoView({behavior: "smooth"})}>Projetos</a>
  <a onClick={()=>contatos[0].scrollIntoView({behavior: "smooth"})}>Contatos</a>
  </nav>
</header>
}
function bt_responsive(){
  let menu_responsive = document.getElementById('responsive_menu');
  if(menu_responsive.style.display=='flex'){
    menu_responsive.style.display = 'none'
  }
  else{
    menu_responsive.style.display = 'flex'
  }
}
function Contatos(){
  var dados = [
  {
    'nome':'Email',
    'imagem':img_email,
    'conteudo':'caina.code@gmail.com',
    'link':'caina.code@gmail.com'
  },
  {
    'nome':'Instagram',
    'imagem':img_insta,
    'conteudo':'subaru.3.rem',
    'link':'https://www.instagram.com/subaru.3.rem/'
  },
  {
    'nome':'Github',
    'imagem':img_github,
    'conteudo':'subaru3rem',
    'link':'https://github.com/subaru3rem'
  }]
  var divs = dados.map(
    props => 
    <div className='contato'>
      <div>
      <h3>{props.nome}</h3>
      </div>
      <img src={props.imagem}/>
      <div>
      <p>{props.conteudo}</p>
      <input type='hidden' id={props.nome} value={props.link} />
      </div>
      <div className='copy_cntt'>
        <button onClick={()=>copy(props.nome)}>Copy</button>
      </div>
    </div>)
  return divs
}
function copy(name){
  let input = document.getElementById(name);
  navigator.clipboard.writeText(input.value)
  alert('Link copiado')
}


export default App;
