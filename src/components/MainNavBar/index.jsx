import React from 'react'

// CSS
import styles from './index.module.css'


// IMPORTS BOOTSTRAP {

// NAVBAR BOOTSTRAP IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// }

const index = () => {
  return (
    <>
    <Navbar
     expand="lg" 
     className={`${styles.MainNavBar} bg-body-tertiary`}
     
     data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Central de Compras</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/CadastroProdutos">Cadastro de Produtos</Nav.Link>
            
            <Nav.Link href="/listaDeProdutos">Lista de produtos</Nav.Link>



            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default index