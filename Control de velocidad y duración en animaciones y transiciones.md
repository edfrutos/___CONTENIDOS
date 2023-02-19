
Código html, css y javascript, Control de velocidad y duración en animaciones y transiciones

Puedes controlar la velocidad y la duración de las animaciones y transiciones en HTML, CSS y JavaScript de la siguiente manera:
CSS:
<li>Usa la propiedad <code>transition</code> para especificar la duración y la velocidad de la transición:</li>
```css

element {
  transition: all 0.5s ease-in-out;
}

<li>Usa la propiedad <code>animation-duration</code> para especificar la duración de la animación:</li>
```css

@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

element {
  animation-name: example;
  animation-duration: 3s;
}

JavaScript:
<li>Usa la propiedad <code>style.transition</code> para especificar la duración y la velocidad de la transición en tiempo real:</li>

element.style.transition = "all 0.5s ease-in-out";

<li>Usa la propiedad <code>style.animationDuration</code> para especificar la duración de la animación en tiempo real:</li>

element.style.animationDuration = "3s";
