import './css/App.css';

// Importar componentes
import React from 'react';
import Navegador from './components/Navegador';




function App() {
  return (

<React.Fragment>

<Navegador/> 


<header id="inicio">

<h1 class= "header">Protege tu hogar y tu negocio con nuestros productos</h1>

</header>

<div> 

<h1>¡Cumplimos con nuestro objetivo gracias a nuestra experiencia de más de 30 años!</h1> 

<article>

<p>Hemos visto cambiar las necesidades de seguridad y protección al robo de los negocios y hogares, en una ciudad como Madrid. De manera que es un orgullo, poder garantizar un servicio integral en el montaje e instalación de nuestros productos, con la seguridad de quien lleva décadas creciendo profesionalmente al mismo tiempo que el catálogo de servicios.</p>
<p>Nuestro objetivo principal es poner en marcha soluciones a medida, enfocados a mejorar la seguridad de su hogar o negocio, con las mejores novedades técnicas, gracias el respaldo de grandes marcas como Fichet y Gunnebo. En nuestra apuesta por un servicio de calidad y confianza, la empresa cuenta con su propio equipo técnico.La diferencia está en que la mayoría de dicho equipo técnico, lo configuran profesionales que llevan en plantilla más de 20 años.</p>

</article>

<h1>Reconocimiento nacional</h1>

<article id="promociones">

<img src = "images/liderVentas.png" style={{width: '80%', height: '100%'}} alt="Lider en Ventas en España"></img>
<p>Hoy en día, la consolidación de la empresa es un hecho, que le brinda todo un catalogo de soluciones contra el robo y la seguridad, con la máxima garantía. Lo que se demuestra con la presencia en ferias y eventos representativos del sector de la seguridad en España.</p>

</article>

</div>

</React.Fragment>

  );
}

export default App;
