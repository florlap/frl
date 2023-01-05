

//import Foto from '../img/img perfil.jpg';
import '../styles/components/sidebar.sass';
import Contacts from './Contacts';
import Networks from './Networks';


const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={require('../img/img.jpg')} alt="Florencia " width="500"height="500" />
      <h3 className='title'> Desarrolladora Fullstack</h3>
      <Networks/>
      <Contacts/>
      <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:0e6ffe45-420d-3609-852d-6faafa30ad1c' className='btn'>Descargar CV</a> 
    </aside>
  )
}


export default Sidebar