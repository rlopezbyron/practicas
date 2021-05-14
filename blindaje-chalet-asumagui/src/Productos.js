import './css/App.css';

// Importar componentes
import React from 'react';

function Productos() {
  return (

<React.Fragment>

<div>

<h1 class="titular">Nuestros productos</h1>

<br/>

<h1>Puertas Acorazadas</h1>

<div>

<table>

  <tr>

    <td class="producto"><img src = "images/puertaPiso.jpg" alt="Puerta Acorazada de Piso"></img></td>
    <td class="producto">

      <p><b>Puerta Acorazada de Piso</b></p>
      <p>Las puertas acorazadas están construidas con una estructura perimetral de tubo de acero, disponiendo de rigidizadores repartidos por toda la superficie, con el objeto de mantener la solidez de sus dos chapas de acero. Esta gama de puertas acorazadas cuenta con homologación europea, para brindar la mayor protección a su vivienda.</p>

    </td>

  </tr>

  <tr>

    <td class="producto"><img src = "images/puertaChalet.jpg" alt="Puerta Acorazada de Chalet"></img></td>
    <td class="producto">

      <p><b>Puerta Acorazada de Chalet</b></p>
      <p>Una puerta acorazada para tu vivienda unifamiliar. Nuestras puertas están construidas con una estructura perimetral de tubo de acero, disponiendo de rigidizadores repartidos por toda la superficie, con el objeto de mantener la solidez de las dos chapas de acero que lleva. Acabados muy cuidados en: Embero, Sapelly, Nogal, Roble, Pino Valsain, Oregón, Mukali, Haya, etc</p>

    </td>

  </tr>

  {/*
  
    <tr>

    <td><img src = "images/puertaTrastero.jpg" alt="Puerta Acorazada de Trastero"></img></td>
    <td>

      <p><b>Puerta Acorazada de Trastero</b></p>
      <p>Los recintos dedicados a trasteros deben cumplir la normativa incluida en el Decreto 31/2003 De la Comunidad de Madrid de prevención de incendios. Secure Home ha desarrollado tres modelos ajustados a la legalidad vigente y con la total garantía de seguridad.</p>

    </td>

  </tr>

  
  */}



</table>

</div>

<br/>

<h1>Cerraduras de Seguridad</h1>

<div>

<table>
{/*

<tr>

    <td><img src = "images/cerraduraAlicea.png" alt="Cerradura Alicea"></img></td>
    <td>

      <p><b>Cerraduras Alicea</b></p>
      <p>Las cerraduras de alta seguridad Alicea aúnan estética y diseño. Se integran perfectamente en la decoración de su hogar.</p>

    </td>

  </tr>

*/}
  

  <tr>

    <td class="producto"><img src = "images/cerraduraFortissime.jpg" alt="Cerradura Fortissime"></img></td>
    <td class="producto">

      <p><b>Cerraduras Fortissime</b></p>
      <p>Cerraduras de seguridad Fortissime certificadas A2P 3 estrellas, cuentan con 3 a 5 puntos de cierre, 2 a 4 pestillos basculantes de gancho en sentido opuesto + 1 doble pestillo central reforzado por placas de acero al manganeso. Estos pestillos absorben el empuje que ejerce el ladrón sobre la puerta.</p>

    </td>

  </tr>

  <tr>

    <td class="producto"><img src = "images/cerraduraPrimlock.jpg" alt="Cerradura Primlock"></img></td>
    <td class="producto">

      <p><b>Cerraduras Primlock</b></p>
      <p>Es la cerradura de alta seguridad más indicada para aquellos hogares donde no es viable instalar una puerta acorazada. Está Provista de 2 pestillos de gancho + pestillo central + pestillo media vuelta, cilindro 787 con 4 llaves y tarjeta codificada nuevos duplicados, 1 pestillo central provisto de 2 barras anti-corte.</p>

    </td>

  </tr>

  <tr>

    <td class="producto"><img src = "images/cerraduraVertipoint.jpg" alt="Cerradura Vertipoint"></img></td>
    <td class="producto">

      <p><b>Cerraduras Vertipoint</b></p>
      <p>Instale una cerradura de alta seguridad Vertipoint perfecta para su hogar. Certificada A2P 1 estrella. Provista de 3 Puntos de cierre 2 pestillos basculantes de gancho o 2 triples pestillos redondos laterales + 1 doble pestillo central. Estos pestillos absorben el empuje que ejerce el ladrón sobre la puerta.</p>

    </td>

  </tr>


</table>

</div>

<br/>

<h1>Cajas Fuertes</h1>

<div>

<table>

  <tr>

    <td class="producto"><img src = "images/cajaFuerte2.png" alt="Cerradura Alicea"></img></td>
    <td class="producto">

      <p><b>Caja Fuerte Alpha</b></p>
      <p>Presentamos una gran variedad de tamaños y volúmenes, para poder tener a buen recaudo cualquier tipo de documentos, joyas u otros objetos de valor, adaptándose a todo tipo de necesidades.</p>

    </td>

  </tr>

  <tr>

    <td class="producto"><img src = "images/cajaFuerte3.png" alt="Cerradura Fortissime"></img></td>
    <td class="producto">

      <p><b>Caja Fuerte Sigma</b></p>
      <p>Para riesgos altos o medios han superado con éxito todas las pruebas de resistencia y test de ataque, a las que han sido sometidas para cumplir la normativa de seguridad que exige la UE.</p>

    </td>

  </tr>

  <tr>

    <td class="producto"><img src = "images/cajaFuerte5.jpg" alt="Cerradura Vertipoint"></img></td>
    <td class="producto">

      <p><b>Caja Fuerte Trident</b></p>
      <p>Las cajas fuertes certificadas son de alta especificación, recomendadas tanto para particulares que buscan un plus en seguridad como para Mercado Regulado y cumplir con la normativa vigente.</p>
      <p>Robo Grado IV. Antiexplosión Grado IV. Cajas de seguridad para profesionales riesgo alto. Resistencia al fuego 60 minutos. Protección papel.</p>

    </td>

  </tr>


</table>

</div>

</div>




</React.Fragment>

  );
}

export default Productos;
