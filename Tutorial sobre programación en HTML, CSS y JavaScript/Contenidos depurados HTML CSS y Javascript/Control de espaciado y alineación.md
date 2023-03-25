

Para controlar el espaciado y alineación en HTML y CSS, puedes usar las siguientes etiquetas y propiedades:
HTML:
<li>La etiqueta <code>div</code> se utiliza para dividir el contenido en secciones, y puedes utilizar la propiedad <code>class</code> para aplicar estilos CSS específicos.</li><li>La etiqueta <code>p</code> se utiliza para crear párrafos y tiene un margen por defecto que puedes ajustar con CSS.</li>
CSS:
<li>La propiedad <code>margin</code> se utiliza para establecer el margen alrededor de un elemento. Puedes especificar diferentes valores para cada lado del elemento utilizando las propiedades <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, y <code>margin-left</code>.</li><li>La propiedad <code>padding</code> se utiliza para establecer el espacio entre el contenido y los bordes de un elemento. Al igual que con <code>margin</code>, puedes especificar diferentes valores para cada lado del elemento utilizando las propiedades <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, y <code>padding-left</code>.</li><li>La propiedad <code>text-align</code> se utiliza para alinear el texto dentro de un elemento. Puedes establecer este valor como <code>left</code>, <code>center</code>, <code>right</code>, o <code>justify</code>.</li><li>La propiedad <code>display</code> se utiliza para controlar cómo se muestra un elemento. Por ejemplo, si deseas que varios elementos se muestren en una línea, puedes establecer el valor a <code>inline-block</code>.</li>
Ejemplo:
```html

<div class="container">
  <p>Este es un párrafo de texto</p>
  <p>Este es otro párrafo de texto</p>
</div>
CSS:
.container {
  margin: 20px;
  padding: 10px;
  text-align: center;
}

En este ejemplo, se establece un margen de 20px alrededor del contenedor y un relleno de 10px, y el texto dentro del contenedor se centra.