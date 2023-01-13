

//import Foto from '../img/img perfil.jpg';
import '../styles/components/sidebar.sass';
import Contacts from './Contacts';
import Networks from './Networks';


const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={require('../img/img.jpg')} alt="Foto de Florencia " width="500"height="500" />
      <h3 className='title'> Desarrolladora Fullstack</h3>
      <Networks/>
      <Contacts/>
      <a href={require('../img/cv.pdf')} className='btn'> Descargar CV</a> 
    </aside>
  )
}


export default Sidebar