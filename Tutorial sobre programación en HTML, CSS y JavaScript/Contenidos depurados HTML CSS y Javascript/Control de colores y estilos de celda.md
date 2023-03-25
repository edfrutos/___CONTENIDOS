
Para controlar el color y estilo de las celdas en HTML, se puede utilizar CSS. Aquí hay un ejemplo de código HTML y CSS que controla el color y estilo de las celdas de una tabla:
HTML:
```php

<table>
  <tr>
    <td class="celda-azul">Celda Azul</td>
    <td class="celda-roja">Celda Roja</td>
  </tr>
  <tr>
    <td class="celda-verde">Celda Verde</td>
    <td class="celda-amarilla">Celda Amarilla</td>
  </tr>
</table>
```
CSS:
```css

.celda-azul {
  background-color: blue;
  color: white;
  padding: 10px;
  text-align: center;
}

.celda-roja {
  background-color: red;
  color: white;
  padding: 10px;
  text-align: center;
}

.celda-verde {
  background-color: green;
  color: white;
  padding: 10px;
  text-align: center;
}

.celda-amarilla {
  background-color: yellow;
  padding: 10px;
  text-align: center;
}
```
En este ejemplo, se utilizan clases CSS para definir los colores y estilos de cada celda. La clase se asigna a la etiqueta "td" en el código HTML.