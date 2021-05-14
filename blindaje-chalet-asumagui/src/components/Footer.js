import React, {Component} from 'react';

class Footer extends Component {

    render() {


        return(
            
            <React.Fragment>

                <footer id="footer">

                <a href="#footer" style={{color: "white"}} title="Política de Privacidad">Política de Privacidad</a> &nbsp;
                <a href="#footer" style={{color: "white"}} title="Aviso Legal">Aviso Legal</a>

                <br/>
                <br/>

                <p class="textoFooter">Avenida Rincón Oculto, 23. Madrid(28123), España</p>
                <p class="textoFooter">homesecure@correo.es</p>
                <p class="textoFooter"><b>Horario Comercial y de Oficina:</b> 10:00 - 14:00 / 15:00 - 19:00</p>
                <p class="textoFooter"><b>Horario Servicio Técnico:</b> 24/7</p>
                <p class="textoFooter">911223456</p>

                </footer>

                
            
            

            </React.Fragment>

        );

    }

}

export default Footer;