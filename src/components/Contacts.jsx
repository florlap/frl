
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
        </div>
    </div>
    <div className='info-card'>
        <AiOutlineMail id='email-icon'/>
        <div>
            <h3>Mail</h3>
            <a href='mailto:florencialapadatoff@gmail.com'
            target="_blank"
            rel="noopener noreferrer"> <p>florencialapadatoff@gmail.com</p> </a>
            
        </div>
    </div>
    <div className='info-card'>
        <AiFillEnvironment id='pin-icon'/>
        <div>
            <h3>Localizacion</h3>
            <p> Buenos Argentina</p>    
        </div>
    </div>

    </section>
  )
}

export default Contacts