
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import '../styles/components/contacts.sass'



const Contacts = () => {
    return (
        <section id='contact'>
        
    <div className='info-card'>
        <AiFillPhone id='phone-icon'/>
        <div>
            <h3>Telefono</h3>
            <p>1155833569</p>
            <a href="https://api.whatsapp.com/send?phone=1155833569" >

            {/* <img src={require('../img/wsp.png')} alt='' width="40" height="40" /> */}
            </a>
        </div>
    </div>
    <div className='info-card'>
        <AiOutlineMail id='email-icon'/>
        <div>
            <h3>Mail</h3>
            <a href="mailto:florencialapadatoff@gmail.com" target="_blank"
            rel="noopener noreferrer" >Enviar Email</a>
        </div>
    </div>
    <div className='info-card'>
        <AiFillEnvironment id='pin-icon'/>
        <div>
            <h3>Localizacion</h3>
            <a href='https://maps.app.goo.gl/NbEZNiqCuT8pdoYV6' target="_blank"
            rel="noopener noreferrer" >Buenos Aires, Argentina</a>   
                 
        </div>
    </div>

    </section>
  )
}

export default Contacts;

