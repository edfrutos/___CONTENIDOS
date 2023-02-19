
001.-Código html y css para Selección de fuentes

Para seleccionar una fuente específica en HTML, puedes usar la etiqueta "font-family" en una etiqueta HTML, o en tu hoja de estilo CSS.
Por ejemplo, si quieres seleccionar la fuente "Arial" para todo el texto dentro de una etiqueta "div" con la clase "mi-clase", puedes usar el siguiente código HTML y CSS:
HTML:

<div class="mi-clase">Texto a mostrar</div>

CSS:

.mi-clase {
  font-family: Arial;
}

También se pueden especificar varias fuentes para que, si el navegador no tiene una de las fuentes, utilice otra. Por ejemplo, si quieres que se utilice la fuente Arial si está disponible, pero si no se utilice la fuente Helvetica:

.mi-clase {
  font-family: Arial, Helvetica;
}

Además, si deseas utilizar una fuente web, puedes usar la etiqueta <code>@font-face</code> en tu hoja de estilo CSS.

@font-face {
    font-family: 'Nombre de la Fuente';
    src: url('ruta/a/la/fuente.ttf') format('truetype');
}

Y luego asignar esa fuente a una clase o elemento específico.

.mi-clase {
    font-family: 'Nombre de la Fuente';
}
