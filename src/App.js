// Css
import './App.css';

// Páginas
import Login from "./pages/Login/index.jsx"
import CadastroProdutos from "./pages/CadastroProdutos/index.jsx"
import ListaDeProdutos from "./pages/ListaDeProdutos/index.jsx"

// Componentes
import MainNavBar from './components/MainNavBar/index.jsx'


// BROWSERrOUTER
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// IMPORTS BOOTSTRAP {
// NAVBAR BOOTSTRAP IMPORTS
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


// }

function App() {


  
  return (
    <>  
      <BrowserRouter>

        

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/ListaDeProdutos" element={<ListaDeProdutos/>}/>
          <Route path="/CadastroProdutos" element={<CadastroProdutos/>}/>
        </Routes>
    

      </BrowserRouter>
    </>
  );
}

export default App;
