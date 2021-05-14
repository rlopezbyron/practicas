import './css/App.css';

// Importar componentes
import React from 'react';
import Formulario from './components/Formulario';
import Footer from './components/Footer';


function Contacto() {
  return (

<React.Fragment>

<div  id="contacto">

<h1 class="titular">Contacto</h1>

<br/>

</div>

<div>

<Formulario/>

</div>

<div>

<Footer/>

</div>

</React.Fragment>

  );
}

export default Contacto;
