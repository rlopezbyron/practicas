import './css/App.css';

// Importar componentes
import React from 'react';


function Promociones() {
  return (

<React.Fragment>

<div>

<h1 class="titular">¡Aprovecha estos descuentos!</h1>

<h3>¡Nuestras cajas fuertes están de oferta!</h3>

<br/>

<img src = "images/cajaFuerte.jpg" style={{width: '25%', height: '25%'}} alt="Cajas Fuertes"></img>

<article id="productos">

<p class = "precio" ><b>Caja Fuerte Alpha - Modelo 3: </b> Antes: 201,00€ / Ahora: 140,70€</p>
<p class = "precio" ><b>Caja Fuerte Alpha - Modelo 4: </b> Antes: 245,00€ / Ahora: 171,50€</p>
<p class = "precio" ><b>Caja Fuerte Alpha - Modelo 5: </b> Antes: 371,00€ / Ahora: 290,50€</p>

</article>

</div>

</React.Fragment>

  );
}

export default Promociones;
