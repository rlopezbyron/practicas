import React, {Component} from 'react';
import {Form, Col, Button} from 'react-bootstrap';

class Formulario extends Component {

    render() {


        return(
            
            <React.Fragment>

                <div>

                <Form style={{padding: "50px"}}>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{textAlign:"left"}}>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Pepito" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{textAlign:"left"}}>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="homesecure@correo.com" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{textAlign:"left"}}>Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="+34 123 45 67 89"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Calle, Avenida, Plaza..." />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{textAlign:"left"}}>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Dudas, sugerencias, consultas..."/>
                    </Form.Group>

                    

                </Form.Row>

                <br/>
                <br/>
                <br/>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Acepto las condiciones" style={{textAlign:"left"}}/>
                </Form.Group>

                <Button variant="primary">
                    Enviar
                </Button>
                </Form>

                </div>

                <br/>

                <br/>

                <br/>

            </React.Fragment>

        );

    }

}

export default Formulario;