

Para controlar el tamaño y la posición de elementos en diferentes tamaños de pantalla en HTML, CSS y JavaScript se utilizan técnicas como:
<li><p>Media Queries en CSS: permite definir reglas específicas para diferentes tamaños de pantalla y resoluciones.</p></li><li><p>Grid y Flexbox Layout en CSS: permite definir diseños flexibles y adaptativos para diferentes tamaños de pantalla.</p></li><li><p>JavaScript y el DOM API: permite manipular el tamaño y la posición de elementos en tiempo de ejecución basados en eventos como el cambio de tamaño de la ventana.</p></li>
Estas técnicas permiten crear diseños responsivos que se adaptan a diferentes tamaños de pantalla, brindando una experiencia de usuario óptima en todos los dispositivos.

Para aplicar media queries en CSS, se puede seguir los siguientes pasos:
<li>Definir una regla CSS normal para los estilos que se deben aplicar a todas las resoluciones:</li>
```css

elemento {
   propiedad: valor;
}
```
<li>Envolver la regla en una consulta de medios utilizando la sintaxis <code>@media</code>:</li>
```css

@media (condición) {
   elemento {
      propiedad: valor;
   }
}
```
<li>Especificar la condición para la cual se deben aplicar los estilos dentro de paréntesis:</li>
```css
@media (min-width: tamaño_mínimo) {
   elemento {
      propiedad: valor;
   }
}
```
<li>Repetir los pasos 2 y 3 para cada tamaño de pantalla deseado y establecer diferentes reglas CSS para cada uno.</li>
Ejemplo:
```css

elemento {
   font-size: 16px;
}

@media (min-width: 480px) {
   elemento {
      font-size: 18px;
   }
}

@media (min-width: 768px) {
   elemento {
      font-size: 20px;
   }
}
```
Esto hará que el tamaño de la fuente cambie dependiendo del tamaño de la pantalla.

Para aplicar Grid y Flexbox Layout en CSS, se puede seguir los siguientes pasos:
<li>Definir un contenedor para los elementos que se deben organizar con Grid o Flexbox:</li>
```css

.container {
   display: grid | flex;
}
```
<li>Para Grid Layout, definir las columnas y filas utilizando las propiedades <code>grid-template-columns</code> y <code>grid-template-rows</code>:</li>
```css

.container {
   display: grid;
   grid-template-columns: tamaño_columna1 tamaño_columna2 ...;
   grid-template-rows: tamaño_fila1 tamaño_fila2 ...;
}
```
<li>Asignar cada elemento hijo a una celda específica utilizando las propiedades <code>grid-column</code> y <code>grid-row</code>:</li>
```css

.elemento {
   grid-column: inicio / fin;
   grid-row: inicio / fin;
}
```
<li>Para Flexbox Layout, definir la dirección de los elementos hijos utilizando la propiedad <code>flex-direction</code>:</li>
css

.container {
   display: flex;
   flex-direction: row | row-reverse | column | column-reverse;
}

<li>Ajustar el tamaño de los elementos hijos utilizando la propiedad <code>flex-basis</code>:</li>
```css

.elemento {
   flex-basis: tamaño;
}
```
Esto permitirá organizar los elementos de manera flexible y adaptable a diferentes tamaños de pantalla.
```
Para manipular el tamaño y la posición de los elementos en tiempo de ejecución basados en eventos en JavaScript, se puede seguir los siguientes pasos:
<li>Obtener una referencia al elemento que se desea manipular a través del DOM API:</li>
```javascript

const elemento = document.querySelector(selector);

<li>Escuchar el evento que se desea utilizar como disparador para la manipulación:</li>
```javascript

window.addEventListener("evento", callback);

<li>Definir la función de retorno de llamada que se ejecutará cuando se produzca el evento:</li>
```javascript

function callback() {
   // código para manipular el tamaño y la posición
}

<li>Modificar el tamaño y la posición del elemento utilizando las propiedades del DOM API:</li>
python

elemento.style.width = tamaño + "unidad";
elemento.style.height = tamaño + "unidad";
elemento.style.top = tamaño + "unidad";
elemento.style.left = tamaño + "unidad";

Ejemplo:
```javascript

const elemento = document.querySelector("#miElemento");

window.addEventListener("resize", ajustarTamaño);

function ajustarTamaño() {
   let anchoVentana = window.innerWidth;
   let altoVentana = window.innerHeight;

   elemento.style.width = anchoVentana / 2 + "px";
   elemento.style.height = altoVentana / 2 + "px";
   elemento.style.top = altoVentana / 4 + "px";
   elemento.style.left = anchoVentana / 4 + "px";
}
```
Esto permitirá manipular el tamaño y la posición de los elementos en tiempo de ejecución basados en eventos como el cambio de tamaño de la ventana.