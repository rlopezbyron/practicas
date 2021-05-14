import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'

class Navegador extends Component {

    render() {


        return(
            
            <React.Fragment>

            <Navbar style={{position: 'fixed', width:'100%', padding:'10px'}} bg="primary" variant="dark">
            <Navbar.Brand href="#inicio" title="Inicio">Home Secure</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#promociones" title="Nuestras promociones">Promociones</Nav.Link>
                <Nav.Link href="#productos" title="Nuestros productos">Productos</Nav.Link>
                <Nav.Link href="#contacto" title="Contacta con nosotros">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>



            {/*
            
            <nav> 

                <a href="#inicio" title="Inicio">Inicio</a> &nbsp;
                <a href="#promociones" title="Promociones">Promociones</a> &nbsp;
                <a href="#productos" title="Promociones">Productos</a> &nbsp;
                <a href="#contacto" title="Promociones">Contacto</a>


            </nav>
            
            */}
            
            

            </React.Fragment>

        );

    }

}

export default Navegador;