
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Detail from './components/Detail';
import MainContent from './components/MainContent';
import Networks from './components/Networks';
import Sidebar from './components/Sidebar';
import './styles/components/app.sass';

import './styles/components/index.sass';

function App() {
  return (
    <div id='portfolio'>
      <div>
        <h1> Hola :), </h1>
        <h1>  Soy Florencia Lapadatoff</h1>
      </div>  
      
 
     <Sidebar/>
     <MainContent/> 
  
        <Routes>
        {/* <Route path="/" element={<Detail />} /> */}
        </Routes>
    </div>
  );
}

export default App;
