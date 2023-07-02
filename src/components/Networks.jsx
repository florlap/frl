import React from 'react';
import { FaLinkedinIn, FaGithubAlt} from 'react-icons/fa';
import '../styles/components/networks.sass'


const redes = [
    {name: 'linkedin', icon: <FaLinkedinIn/>, href:'https://www.linkedin.com/in/florlap/'},
    {name: 'github', icon: <FaGithubAlt/>, href:'https://github.com/florlap'}
];


const Networks = () => {
  return (
  <section id= 'networks'>
    <React.Fragment >
    
    {redes.map((red)=> (
      <ul className='redes-btn' id={red.name} key={red.name} > 
         <a href={red.href}> {red.icon} </a>  
      </ul>
))}
    </React.Fragment>
  </section>
  )
}

export default Networks