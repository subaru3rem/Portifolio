import ella_site_desktop from './images/site_ella_desktop.png';
import site_nave_desktop from './images/site_nave_do_conhecimento_desktop.png';
import icaros_home from './images/icaros_home.png';
import icaros_multimidia from './images/icaros_multimidia.png';
import icaros_navegador from './images/icaros_navegador.png';
import React from 'react';


var projetos = [
    {
        'titulo':'Nave do Conhecimento',
        'resumo':'Esse é um projeto full-stack que eu fiz ao fim do meu curso de front-end e continuei ao adquirir conhecimentos de servidor estudando flask em python, é uma reconstrução completa do site com um míni sistema de autenticação e gerenciamento de cookies.',
        'link_github':'https://github.com/subaru3rem/Nave_do_conhecimento',
        'imagem': [site_nave_desktop]
    },
    {
        'titulo':'Icaros',
        'resumo':'Um projeto mobile que eu fiz para realizar algumas finalidades que eu considero útil de se ter, além de me dar um conhecimento que eu sempre quis no desenvolvimento mobile.',
        'link_github':'https://github.com/subaru3rem/Icaros',
        'imagem': [icaros_home, icaros_multimidia, icaros_navegador]
    }
]
function Projeto(projeto){
    return (
          <div className='projeto'>
            <div className='projeto_text'>
            <h1>{projeto.titulo}</h1>
            <p>{projeto.resumo}</p>
            <p>
              {verif(projeto)}
              link github:<br/> <a href={projeto.link_github}>{projeto.link_github}</a>
            </p>
            </div>
            <div className='images'>
            {Imgs(projeto)}
            </div>
          </div>
    );
};
export function Projetos(){
    var projetos_div = projetos.map(projeto_obj => Projeto(projeto_obj));
    return projetos_div;
}
function verif(props){
    if(props.link_site){
        return <p>link do site:<br/><a href={props.link_site}>{props.link_site}</a><br/><br/></p>
    }
    else{
        return ''
    }
}
function Imgs(props){
    var imgs = props.imagem.map(img=> <img src={img}/>)
    return imgs;
}
var indice = 0;
export function button_next(){
  var projetos = document.getElementsByClassName('projeto');
  projetos[indice].style.display = 'none';
  if(indice < projetos.length-1){indice+=1}else{indice=0}
  projetos[indice].style.display = 'flex';
};
export function button_previos(){
    var projetos = document.getElementsByClassName('projeto');
    var projetos = document.getElementsByClassName('projeto');
    projetos[indice].style.display = 'none';
    if(indice > 0){indice-=1}else{indice= projetos.length-1}
    console.log(projetos.length)
    console.log(indice);
    projetos[indice].style.display = 'flex';      
};



export default Projetos;
