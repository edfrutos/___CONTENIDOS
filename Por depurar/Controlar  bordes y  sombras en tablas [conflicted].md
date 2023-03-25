
```
Exported with AIPRM https://www.aiprm.com by Eugenio de Frutos on 29/1/2023, 20:51:50
```

---


**User:**
código html y css para Controlar  bordes y  sombras en tablas

---

**ChatGPT:**
Para controlar los bordes y sombras en una tabla HTML, puedes usar la propiedad "border" y "box-shadow" en CSS.
Ejemplo:
HTML:
```html
html
Copy code
<table>
  <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
  </tr>
</table>
```
CSS:
```css
css
Copy code
table {
  border: 1px solid black;
  box-shadow: 2px 2px 2px gray;
}
```
En este ejemplo, se establece un borde de 1px de ancho y color negro en toda la tabla, y una sombra de 2px de desplazamiento horizontal y vertical, con una propagación de 2px y un color gris.
También puedes aplicar estas propiedades a elementos específicos de la tabla, como las celdas o filas, utilizando selectores adecuados.

---

**User:**
aplicar propiedades css a celdas y filas de tablas

---

**ChatGPT:**
Para aplicar propiedades CSS a celdas y filas específicas en una tabla HTML, puedes usar los siguientes selectores:
<li><code>td</code>: para seleccionar todas las celdas de la tabla.</li><li><code>th</code>: para seleccionar todas las celdas de encabezado de la tabla.</li><li><code>tr</code>: para seleccionar todas las filas de la tabla.</li><li><code>#id</code>: para seleccionar un elemento específico con un ID específico.</li><li><code>.class</code>: para seleccionar todos los elementos con una clase específica.</li>
Ejemplo:
HTML:
```html
html
Copy code
<table>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
  </tr>
  <tr class="destacada">
    <td>Celda 1</td>
    <td>Celda 2</td>
  </tr>
  <tr>
    <td>Celda 3</td>
    <td>Celda 4</td>
  </tr>
</table>
```
CSS:
```css
css
Copy code
td {
  border: 1px solid black;
}

.destacada td {
  background-color: yellow;
}

th {
  background-color: lightgray;
  text-align: center;
}
```
En este ejemplo, se establece un borde de 1px de ancho y color negro en todas las celdas de la tabla, un fondo amarillo en la fila con clase "destacada" y un fondo gris y alineado al centro en las celdas de encabezado.
También puedes seleccionar celdas o filas específicas usando atributos como <code>:nth-child</code> para seleccionar un elemento en una posición específica en una fila o columna, o <code>:first-child</code> para seleccionar el primer elemento de una fila o columna.