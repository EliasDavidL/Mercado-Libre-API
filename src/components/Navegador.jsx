import { Link, useLocation } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

export default function Navegador (){
    const actual = useLocation()
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as = {Link} to="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/Registro">Registrarse</Nav.Link>
            <Nav.Link as = {Link} to="/Ingresar">Ingresar</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Practicando</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Accion en trabajo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Proximamente</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
                
    </Navbar>
      
           
        
    )
    
}