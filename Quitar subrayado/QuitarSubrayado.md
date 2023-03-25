
Para quitar el subrayado de un link en HTML, puedes utilizar la propiedad de estilo CSS "text-decoration" y establecer su valor en "none". Esto se puede hacer tanto en línea como en un archivo CSS externo.
Para quitar el subrayado de un link en línea, puedes utilizar el atributo "style" en la etiqueta &lt;a&gt; y establecer la propiedad "text-decoration" en "none". Por ejemplo:

```html
html
Copy code
<a href="#" style="text-decoration: none;">Este es un link sin subrayado</a>
```

Para quitar el subrayado de todos los links en tu sitio web, puedes utilizar una regla CSS en un archivo externo. Por ejemplo:

```css
css
Copy code
a {
  text-decoration: none;
}
```

Esta regla elimina el subrayado de todos los links en tu página web. Ten en cuenta que, si deseas aplicar un subrayado diferente a algunos links, puedes utilizar la propiedad "text-decoration" con valores diferentes, como "underline", "overline", "line-through" o "blink".
