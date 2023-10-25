

//import Foto from '../img/img perfil.jpg';
import '../styles/components/sidebar.sass';
import Contacts from './Contacts';
import Networks from './Networks';


const Sidebar = () => {
  return (
      <section>
        <aside id='sidebar'>
          <img src={require('../img/img.jpg')} alt="Foto de Florencia " width="500"height="500" />

          <h2 className='title'> Contactos</h2>
          <Contacts/>
          <Networks/>
          <a href={require('../img/cv.pdf')} className='btn' target='blank'> Descargar CV</a> 
        </aside>
        </section>
  )
}


export default Sidebar;