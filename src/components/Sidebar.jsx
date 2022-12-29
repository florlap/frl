

//import Foto from '../img/img perfil.jpg';
import '../styles/components/sidebar.sass';
import Contacts from './Contacts';
import Networks from './Networks';


const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={require('../img/img.jpg')} alt="Florencia " />
      <p className='title'> Desarrolladora Fulstack</p>
      <Networks/>
      <Contacts/>
      <a href=''className='btn'>Descargar CV</a> 
    </aside>
  )
}


export default Sidebar