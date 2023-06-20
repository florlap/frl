import React from 'react';
import { FaLinkedinIn, FaGithubAlt} from 'react-icons/fa';
import '../styles/components/networks.sass'


const redes = [
    {name: 'linkedin', icon: <FaLinkedinIn/>, href:'https://www.linkedin.com/in/florlap/'},
    {name: 'github', icon: <FaGithubAlt/>, href:'https://github.com/florlap'}
];


const Networks = () => {
  return (
  <section id='networks'>
    <React.Fragment >
    
    {redes.map((r)=> (
      <ul className='redes-btn' id={r.name} key={r.name} >
         <a href={r.href} > {r.icon} </a> 
      </ul>
))}
    </React.Fragment>
  </section>
  )
}

export default Networks