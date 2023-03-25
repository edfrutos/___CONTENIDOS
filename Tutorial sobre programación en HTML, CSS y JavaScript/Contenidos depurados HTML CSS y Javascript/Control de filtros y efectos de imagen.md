
Para agregar controles de filtros y efectos a una imagen en HTML y CSS, puedes seguir los siguientes pasos:
<li><p>En el HTML, crea una etiqueta <code>&lt;img&gt;</code> y asigna una clase o ID para poder hacer referencia a ella en el CSS.</p></li><li><p>En el CSS, crea una regla para la clase o ID de la imagen. Dentro de la regla, puedes agregar diferentes propiedades para aplicar filtros y efectos a la imagen.</p></li>
Algunos ejemplos de propiedades de filtros y efectos que puedes utilizar en el CSS son:
<li><code>filter: grayscale(100%)</code> para convertir la imagen a escala de grises.</li><li><code>filter: brightness(150%)</code> para aumentar el brillo de la imagen.</li><li><code>filter: contrast(150%)</code> para aumentar el contraste de la imagen.</li><li><code>filter: blur(5px)</code> para aplicar un efecto de desenfoque a la imagen.</li>
Aquí hay un ejemplo de código HTML y CSS que muestra cómo agregar controles de filtros y efectos a una imagen:
HTML:
```html

<img src="path/to/image.jpg" class="image">
```
CSS:
```css

.image {
  filter: grayscale(100%);
}
```
Nota: El soporte de filtros en CSS es limitado en algunos navegadores.

```
CSS ofrece varios filtros que puedes aplicar a imágenes para cambiar su apariencia. Algunos de los filtros más comunes son:
<li><p><code>grayscale</code>: Convierte la imagen a escala de grises. El valor debe ser un número entre 0 (sin cambios) y 100 (imagen completamente en escala de grises).</p></li><li><p><code>sepia</code>: Aplica un tono sepia a la imagen. El valor debe ser un número entre 0 (sin cambios) y 100 (imagen completamente en tono sepia).</p></li><li><p><code>saturate</code>: Aumenta o disminuye la saturación de la imagen. El valor debe ser un número entre 0 (sin saturación) y 100 (saturación máxima).</p></li><li><p><code>hue-rotate</code>: Gira el tono de la imagen. El valor debe ser un número en grados.</p></li><li><p><code>brightness</code>: Aumenta o disminuye el brillo de la imagen. El valor debe ser un número entre 0 (mínimo brillo) y 100 (máximo brillo).</p></li><li><p><code>contrast</code>: Aumenta o disminuye el contraste de la imagen. El valor debe ser un número entre 0 (mínimo contraste) y 100 (máximo contraste).</p></li><li><p><code>blur</code>: Aplica un efecto de desenfoque a la imagen. El valor debe ser un número en píxeles.</p></li>
Ejemplo de como aplicar un filtro de saturación a una imagen:
```css
css
Copy code
img {
  filter: saturate(150%);
}
```
Puedes aplicar varios filtros a una misma imagen separándolos con comas.
```css
css
Copy code
img {
  filter: grayscale(100%) brightness(150%) contrast(150%);
}
```
Ten en cuenta que el soporte de filtros en CSS varía entre los navegadores. Es recomendable verificar la compatibilidad antes de utilizarlos en un proyecto.