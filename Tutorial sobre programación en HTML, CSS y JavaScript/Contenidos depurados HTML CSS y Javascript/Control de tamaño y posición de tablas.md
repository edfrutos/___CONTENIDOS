
HTML:
```html

<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```
CSS:
```css

table {
  width: 100%; /* tamaño de la tabla en porcentaje */
  border-collapse: collapse; /* elimina los bordes dobles */
}

th, td {
  border: 1px solid black; /* bordes de las celdas */
  padding: 8px; /* espacio dentro de las celdas */
}

th {
  background-color: gray; /* color de fondo de las celdas de encabezado */
  color: white; /* color de texto de las celdas de encabezado */
  text-align: left; /* alineación de texto de las celdas de encabezado */
}
```
Para controlar la posición de la tabla, se puede usar la propiedad "position" en CSS. Por ejemplo, si quieres que la tabla sea fijada en un lugar específico de la página, puedes usar:
```css

table {
  position: absolute; /* hace que la tabla sea fijada */
  top: 50px; /* distancia desde arriba de la página */
  left: 100px; /* distancia desde la izquierda de la página */
}
```
Ten en cuenta que hay que adaptar estas reglas a tu proyecto.