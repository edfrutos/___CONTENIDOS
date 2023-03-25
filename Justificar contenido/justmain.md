**ChatGPT:**
Para justificar un elemento &lt;main&gt; al centro y con un ancho del 80% utilizando HTML y CSS, puedes utilizar las siguientes propiedades de estilo CSS:
```html
html
Copy code
<main>Contenido principal</main>
```
```css
css
Copy code
main {
  width: 80%; /* Ancho del 80% */
  margin: 0 auto; /* Margen automático en los lados para centrar */
  text-align: justify; /* Justificar el contenido */
}
```
La propiedad "width" establece el ancho del elemento &lt;main&gt; en el 80% del ancho de su contenedor. La propiedad "margin" establece un margen automático en los lados izquierdo y derecho para centrar el elemento horizontalmente en su contenedor. La propiedad "text-align" justifica el contenido del elemento &lt;main&gt; para que esté justificado en ambos lados.
Ten en cuenta que, para que esta solución funcione correctamente, el elemento &lt;main&gt; debe estar dentro de un contenedor con un ancho definido (como &lt;body&gt; o &lt;div&gt;) y se recomienda que se utilice un archivo CSS externo en lugar de estilos en línea para una mejor organización del código.
