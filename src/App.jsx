import './App.css'
import Home from './Pages/Home'
import Navegador from './components/Navegador'
import Detalle from './Pages/Detalle'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Registro from './Auth/Registro'
import Ingresar from './Auth/Ingresar'
import Container from 'react-bootstrap/Container';
//as da alias para llamr con nombre mas corto
function App() {
  return (
    <>
    <Router>
     <div className='nav'><Navegador/></div> 
     <Container>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Ingresar" element ={<Ingresar/>}/>
        <Route path="/Registro" element ={<Registro/>}/>
        <Route path="/detalle/:id" element ={<Detalle/>}/>        
      </Routes>
      </Container>
    </Router>
  
    </>
  )
}

export default App
