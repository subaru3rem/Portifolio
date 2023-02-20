import ella_site_desktop from './images/site_ella_desktop.png';


var projeto = {
    'titulo':'Site minha namorada', 
    'resumo':'Um site que eu fiz para minha namorada no começo dos meus estudos,por esse fato, diversas coisas estão em seus modelos iniciais,mas em algum momento eu pretendo recriá-lo com meus novos conhecimentos.',
    'link_site': 'https://ella-site.vercel.app',
    'link_github':'https://github.com/subaru3rem/ella-site',
    'imagem':ella_site_desktop
}
function Projetos(){
    return (
          <div className='projeto'>
            <div>
            <h1>{projeto.titulo}</h1>
            <p>{projeto.resumo}</p>
            <p>
              link do site:<br/><a href={projeto.link_site}>{projeto.link_site}</a><br/><br/>
              link github:<br/> <a href={projeto.link_github}>{projeto.link_github}</a>
            </p>
            </div> 
            <img src={projeto.imagem}/>
          </div>
    );
};




export default Projetos;