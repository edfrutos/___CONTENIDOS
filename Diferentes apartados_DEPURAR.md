
PENDIENTE DE INCORPORAR A TemasAvanzadosCSS.html

**Animaciones**
Para dar algunas animaciones a tu código CSS, necesitas definir una transición primero.

Una transición le dice al navegador que propiedades cambiar gradualmente al poner un elemento sobre `hover` o cuando se activa cualquier otra acción. Esto se puede lograr agregando la propiedad `transition`. Aquí hay un ejemplo:

```css
.mi-elemento {
  transition: width 0.2s ease-in-out;
}

Luego, para crear una animación, agregue las propiedades de inicio y de fin de su animación como se muestra a continuación:

```css
.mi-elemento {
  width: 50%;

  /* Animación */
  transition: width 0.2s ease-in-out;

  &:hover {
    width: 75%;
  }
}

En el anterior ejemplo, el ancho del elemento cambiará gradualmente desde un 50% hasta un 75% cuando el usuario coloque el ratón sobre él.

**Transiciones**

Las transiciones le permiten cambiar gradualmente los estilos de un elemento de un estado a otro, como desde un estado de `hover` a un estado normal.

Se pueden hacer con unas pocas líneas de código CSS ya que lo configurará la propiedad `transition`.

Aquí tienes un ejemplo para cambiar del tamaño del texto del elemento `mi-elemento` cuando se ponga sobre él el ratón:

```css
.mi-elemento {
  font-size: 16px;

  /* Configurar la transición */
  transition: font-size 0.2s linear;

  &:hover {
    font-size: 24px;
  }
}

En el anterior ejemplo, el tamaño del texto del elemento cambiaría gradualmente desde 16px a 24px cuando el usuario coloque el ratón sobre él.

**Transformaciones**

Las transformaciones le permiten cambiar el tamaño, rotación y ubicación de un elemento en la pantalla usando solamente código CSS. Esto se logra usando la propiedad `transform`, como en el siguiente ejemplo:

```css
.mi-elemento {
  /* Rotación */
  transform: rotate(45deg);

  /* Escalar */
  transform: scale(0.5);

  /* Mover */
  transform: translateX(20px);
}

En el anterior ejemplo, el elemento .mi-elemento se rotaría 45 grados, se reduciría a la mitad de su tamaño original y se movería 20px hacia la derecha.

Espero que esta información te sea de ayuda. ¡Disfrutalo!



#### Animaciones, transiciones y transformaciones

Un ejemplo básico de animación en CSS sería x Kholwhold un elemento flotante:

```css
.mi-elemento {
    position: relative;
    animation: mi-elemento-flotante 5s linear infinite;
}

@keyframes mi-elemento-flotante {
    0%   { top: 0px; }
    25%  { top: 10px; }
    50%  { top: 20px; }
    75%  { top: 10px; }
    100% { top: 0px; }
}
```

Un ejemplo de Transición en CSS sería para cambiar el color de fondo sobre una hoover:

```css
.mi-elemento {
    background-color: blue;
    transition: background-color 1s ease-in;
}

.mi-elemento:hover {
    background-color: green;
}
```

Por último, un ejemplo de Transformación en CSS sería para mover un elemento con `translateX()`:

```css
.mi-elemento {
    position: relative;
    animation: mi-elemento-movido 5s linear infinite;
}

@keyframes mi-elemento-movido {
    0%   { transform: translateX(0px); }
    25%  { transform: translateX(50px); }
    50%  { transform: translateX(100px); }
    75%  { transform: translateX(50px); }
    100% { transform: translateX(0px); }
}
```

Las clases CSS pueden aplicarse a cualquier elemento HTML, ya sea un contenedor, texto, imágenes, vídeos, etc. Algunas etiquetas comunes donde suelen usarse las clases son `<div>`, `<p>`, `<span>`, `<h1>-<h6>`, `<ul>`, `<ol>`, `<li>` , `<img>`, `<video>` y `<a>`.

You
---

Aplica una animación a un contenedor con un cubo

Puede usar la función `animation` de CSS para agregar una animación a un elemento. Por ejemplo, si quieres hacer una animación en un contenedor con un cubo, puedes intentar esto:

```css
.container {
  animation: cube-transition 2s;
}

@keyframes cube-transition {
  0% {
    transform: rotateY(45deg);
  }
  80% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-45deg);
  }
}


Dame el html de ese contenedor


```html
<div> 
   Tu contenido aquí 
</div>


Código html de una forma geométrica en 3d


<canvas id="meshCanvas" width="400" height="200" ></canvas>
<script>
    var canvas = document.getElementById("meshCanvas");
    var context = canvas.getContext("webgl");

    // Vertex shader program
    const vsSource = `
        attribute vec4 aVertexPosition;
        attribute vec3 aVertexColor;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        varying lowp vec4 vColor;

        void main(void) {
          gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
          vColor = vec4(aVertexColor, 1.0);
        }
    `;

    // Fragment shader program
    const fsSource = `
        varying lowp vec4 vColor;
  
        void main(void) {
            gl_FragColor = vColor;
        }
    `;

    // Initialize a shader program; this is where all the lighting
    // for the vertices and so forth is established.
    const shaderProgram = initShaderProgram(context, vsSource, fsSource);

    // Collect all the info needed to use the shader program.
    // Look up which attributes our shader program is using
    // for aVertexPosition, aVevrtexColor and also
    // look up uniform locations.
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: context.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexColor: context.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniformLocations: {
            projectionMatrix: context.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: context.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
    };

    // Here's where we call the routine that builds all the
    // objects we'll be drawing.
    const buffers = initBuffers(context);

    // Draw the scene
    drawScene(context, programInfo, buffers);
   
    //
    // Initialize a shader program, so WebGL knows how to draw our data
    //
    function initShaderProgram(context, vsSource, fsSource) {
        const vertexShader = loadShader(context, context.VERTEX_SHADER, vsSource);
        const fragmentShader = loadShader(context, context.FRAGMENT_SHADER, fsSource);

        // Create the shader program

        const shaderProgram = context.createProgram();
        context.attachShader(shaderProgram, vertexShader);
        context.attachShader(shaderProgram, fragmentShader);
        context.linkProgram(shaderProgram);

        // If creating the shader program failed, alert

        if (!context.getProgramParameter(shaderProgram, context.LINK_STATUS)) {
            alert('Unable to initialize the shader program: ' + context.getProgramInfoLog(shaderProgram));
            return null;
        }

        return shaderProgram;
    }

    //
    // creates a shader of the given type, uploads the source and
    // compiles it.
    //
    function loadShader(context, type, source) {
        const shader = context.createShader(type);

        // Send the source to the shader object

        context.shaderSource(shader, source);

        // Compile the shader program

        context.compileShader(shader);

        // See if it compiled successfully

        if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
            alert('An error occurred compiling the shaders: ' + context.getShaderInfoLog(shader));
            context.deleteShader(shader);
            return null;
        }

        return shader;
    }

    //
    // Initialize the buffers we'll need. For this demo, we just
    // have one object -- a simple two-dimensional cube.
    //
    function initBuffers(context) {

        // Create a buffer for the cube's vertex positions.

        const positionBuffer = context.createBuffer();

        // Select the positionBuffer as the one to apply buffer
        // operations to from here out.

        context.bindBuffer(context.ARRAY\_BUFFER, positionBuffer);

// Now pass the list of positions into WebGL to build the shape. We do this by creating a Float32Array from the JavaScript array, then use it to fill the current buffer.  
const positions = \[  
\-1.0, 1.0,  
1.0, 1.0,  
\-1.0, -1.0,  
1.0, -1.0,  
\];  
context.bufferData(context.ARRAY\_BUFFER, new Float32Array(positions), context.STATIC\_DRAW);


Información sobre Uso de herramientas y frameworks como Bootstrap y Foundation para facilitar el desarrollo de diseños.

Utilizar herramientas como Bootstrap o Foundation para el desarrollo de diseños web puede ser una óptima elección. Estas herramientas proporcionan los elementos básicos necesarios para construir un sitio web y están optimizadas para trabajar en un amplio conjunto de dispositivos, desde escritorios hasta teléfonos móviles.

Los frameworks proporcionan un modo simple de diseñar, construir y mantener un sitio web. Además de los elementos de fondo, hay una gran variedad de plantillas útiles para diseñar el contenido del sitio web. Estas plantillas pueden encapsular la presentación del contenido, encabezados, botones, formularios, tabs y otros elementos de diseño.

También hay elementos de comportamiento incorporados como los menús desplegables, filtros y ordenación de contenidos, así como varias funciones de JavaScript integradas. Estas herramientas son una excelente forma de construir sitios web altamente interactivos y responsivos.

Puedes usar herramientas y frameworks como Bootstrap y Foundation para facilitar el desarrollo de diseños en HTML, CSS y Javascript. Estos ayudan a generar elementos como los menús desplegables, filtros o ordenación de contenidos, así como varias funciones de JavaScript integradas. Algunas aplicaciones también ofrecen componentes personalizados para hacer más específicas algunas acciones.

Código html, css y javascript sobre menús desplegables, filtros, ordenación y búsqueda de contenidos, así como otras funciones de JavaScript integradas

Menús Desplegables
------------------

Para crear un menú desplegable, primero hay que escribir código HTML. El siguiente código mostrará un menú desplegable:

<select>
    <option value="opcion_1">Opción 1</option>
    <option value="opcion_2">Opción 2</option>
    <option value="opcion_3">Opción 3</option>
    <option value="opcion_4">Opción 4</option>
</select>

Puedes añadir estilos para cambiar el aspecto del menú desplegable con CSS:

```css
select {
    width:200px;
    padding:15px;
}

Si quieres que el menú desplegable active alguna función cuando se selecciona un elemento en particular, puedes utilizar un bloque de código JavaScript. A continuación hay un ejemplo de cómo hacerlo:

document.getElementById("menuSelector").onchange = function () {
     if (document.getElementById("opción_1").selected) {
        // Función para la opción 1
     }
     else if (document.getElementById("opción_2").selected) {
         // Función para la opción 2
     }
};

Filtros y Ordenación de Contenidos
----------------------------------

Para crear filtros y ordenar contenidos puedes utilizar JavaScript.

Por ejemplo, si tienes una lista de elementos en un array, puedes usar el método `sort()` para ordenarlos. El siguiente código mostrará un ejemplo:

```js
let myList = ['John', 'Bob', 'Ann', 'Stuart'];

myList.sort();
// ahora el array quedaría así ['Ann', 'Bob', 'John', 'Stuart']

Para crear filtros, puedes usar el método `filter()`, que devolverá un nuevo array con los elementos que cumplan con la condición dada. El siguiente código mostrará un ejemplo:

```js
let myList = [1,2,3,4,5,6,7,8,9];

let result = myList.filter((val) => val  >= 5); 
// ahora el array result sería [5,6,7,8,9] 
```

Búsqueda de Contenidos
----------------------

Para realizar búsquedas sobre contenidos, puedes utilizar el método `indexOf()`. El siguiente código mostrará un ejemplo de como usar el método:

```js
let myList = ['John', 'Bob', 'Ann', 'Stuart'];

let result = myList.indexOf('Ann'); // Devuelve 2, porque 'Ann' está en la posición 2 del array
```

Otras Funciones de JavaScript Integradas
----------------------------------------

Hay muchas funciones que puedes integrar en Javascript. Por ejemplo, para realizar operaciones matemáticas, puedes usar el objeto `Math`. El siguiente código mostrará un ejemplo de su uso:

```js
let a = 4;
let b = 6;

let suma = Math.add(a,b); // Devuelve 10
let resta = Math.sub(a,b); // Devuelve -2
```

Código html, css y javascript para aplicar filtros, ordenación y búsqueda de contenidos

ChatGPT
-------

**Código HTML**

```html
<div id="container">
    <div class="filters"> 
        <form> 
            <!-- Insert filter elements here --> 
        </form> 
    </div> 
 
    <div class="search"> 
        <input type="text" placeholder="Search..."> 
    </div> 
 
    <div class="content"> 
        <!-- Place content here --> 
    </div>
</div>
```

**Código CSS**

```css
#container {
    position: relative;
}

.filters {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 1em;
    overflow-y: auto;
    border-right: 1px solid #666;
    background: #FFF;
}

.search {
    position: absolute;
    top: 0;
    right: 0;
    width: 15%;
    height: 3em;
    margin: 1em;
    padding: 0 1em;
    border: 1px solid #666;
    background: #FFF;
}

.content {
    position: absolute;
    top: 4em;
    right: 0;
    width: 78%;
    height: calc(100% - 12em);
    margin: 1em;
    overflow-y: auto;
    padding: 1em;
    background: #FFF;
    box-sizing: border-box;
    border: 1px solid #666;
}
```

**Código JavaScript**

```javascript
// Get the DOM elements we are working with
const container = document.getElementById('container');
const filtersForm = container.querySelector('.filters form');
const searchForm = container.querySelector('.search form');
const content = container.querySelector('.content');
 
// Add event listeners to all filter inputs and the search box
const filterInputs = document.querySelectorAll('.filters input');
const searchInput = document.querySelector('.search input');
 
// This method will be fired whenever the user changes any of the filters
const onFilterChange = () => {
    // Retrieve all selected filters
    let filters = [].filter.call(filterInputs, (input) => {
         return input.checked;
    });
 
    // Filter content by selected filters
    // ...
};

// This method will be fired whenever the user performs a search
const onSearch = () => {
    // Retrieve search query
    const query = searchInput.value;
 
    // Search content by query
    // ...
};
 
// Finally attach all necessary event listeners 
filterInputs.forEach((input) => {
    input.addEventListener('change', onFilterChange);  
});

searchInput.addEventListener('keyup', onSearch);

Código html, css y javascript sobre ordenación de contenido

#### HTML

Para ordenar contenido en HTML, una excelente forma de hacerlo es usando etiquetas de encabezado:


<h1>Título principal</h1>
<h2> Subtítulo </h2>
<h3> Sub-subtítulo </h3>
<p>Contenido aquí</p>

#### CSS

Utilizando CSS, los encabezados pueden ser estilizados todavía más, por ejemplo para darle colores y tipografías diferentes:

h1 { 
  color: purple; 
  font-family: sans-serif; 
  font-size: 1.5rem; 
}

h2 {
  color: #212121;
  font-family: serif;
  font-size: 1rem;
}
```

#### Javascript

Finalmente, se pueden agregar comportamientos y interacciones a los elementos con JavaScript, como por ejemplo mostrar un elemento cuando se haga clic en otro:

```js
const button = document.querySelector('#my-button'); // Se búsca el botón 
const content = document.querySelector('#my-content'); // Se búsca el contenido 

button.addEventListener('click', () => { 
  content.style.display = 'block'; // Se muestra el contenido 
});

HTML, CSS y JavaScript para búsquedas de contenido
--------------------------------------------------

### HTML

<input type="text" id="query" placeholder="Escribe aquí tu consulta">
<button type="button" onclick="search()">Buscar</button>
 
<div id="search_results"></div>


### CSS

#search_results li {
  font-size: 18px;
  padding-left: 10px;
}

### JavaScript

// Obtiene los resultados de la consulta desde el servidor
function search() { 
  let query = document.getElementById('query').value;
 
  fetch('/search?q=' + query)
    .then((response) => response.json())  
    .then((data) => {
      let results = '';
 
      for (let i = 0; i < data.length; i++) {
        results += '<li>' + data[i] + '</li>';
      }
 
      document.getElementById('search_results').innerHTML = results;
    });
}