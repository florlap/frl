
//import {  Routes, Route, Link } from 'react-router-dom';

import MainContent from './components/MainContent';
import Networks from './components/Networks';
import Sidebar from './components/Sidebar';
import './styles/components/app.sass';

//import './styles/components/index.sass';

function App() {
  return (
    <div id='portfolio'>
      <div>
        <h1> Hola,  </h1>
        <h1>  Soy Florencia Lapadatoff</h1>
      </div>
     <Sidebar/>
     <MainContent/> 
    </div>
  );
}

export default App;
