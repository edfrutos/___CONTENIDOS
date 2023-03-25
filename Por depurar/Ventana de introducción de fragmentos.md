
```
Exported with AIPRM https://www.aiprm.com by Eugenio de Frutos on 10/2/2023, 12:52:49
```

---


**User:**
Crear con HTML, CSS, Javascript, Prism, Copy, utilizando las etiquetas <div>, <pre>, <code>, <buttons>,  <svg>, <grid>, una ventana para introducir fragmentos de código sin formato, con otra ventana arriba con un icono click a la derecha que haga copy del fragmento de código

---

**ChatGPT:**
Aquí está un ejemplo básico de cómo crear una ventana de introducción de fragmentos de código con la funcionalidad de copiar en HTML, CSS, JavaScript y Prism:
HTML:
```css
css
Copy code
<div id="code-window">
  <div id="code-header">
    <span>Code Input</span>
    <button id="copy-btn">Copy</button>
  </div>
  <pre><code id="code-input" class="language-markup"></code></pre>
</div>
```
CSS:
```css
css
Copy code
#code-window {
  width: 50%;
  height: 500px;
  background-color: #f5f5f5;
  margin: 20px auto;
  border-radius: 10px;
}

#code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#code-input {
  width: 100%;
  height: calc(100% - 50px);
  padding: 20px;
  overflow: auto;
}

#copy-btn {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
```
JavaScript:
```javascript
javascript
Copy code
const copyBtn = document.getElementById("copy-btn");
const codeInput = document.getElementById("code-input");

copyBtn.addEventListener("click", () => {
  const codeInputValue = codeInput.innerText;
  navigator.clipboard.writeText(codeInputValue);
});
```
Prism:
```php
php
Copy code
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/prism.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism.min.css" rel="stylesheet" />
```
Este código creará una ventana con una barra de título y un botón de copia en la parte superior y una ventana para introducir fragmentos de código sin formato debajo. Al hacer clic en el botón de copia, se copiará el fragmento de código a la memoria del portapapeles. Utiliza Prism para dar formato a los fragmentos de código y hacerlos más legibles.

---

**User:**
hacer que la ventana del fragmento se ajuste en tamaño al texto del fragmento

---

**ChatGPT:**
Para hacer que la ventana del fragmento de código se ajuste en tamaño al texto, puede utilizar JavaScript para calcular la altura del elemento <code>code-input</code> y ajustar la altura de <code>code-window</code> en consecuencia. Aquí está el código necesario para hacerlo:
JavaScript:
```javascript
javascript
Copy code
const codeWindow = document.getElementById("code-window");
const codeInput = document.getElementById("code-input");

// Function to adjust the height of code-window to the height of code-input
function adjustCodeWindowHeight() {
  codeWindow.style.height = `${codeInput.offsetHeight + 50}px`;
}

// Call the function on load and on any changes to the code-input
window.addEventListener("load", adjustCodeWindowHeight);
codeInput.addEventListener("input", adjustCodeWindowHeight);
```
Agregue este código JavaScript después del código JavaScript que copia el fragmento de código. Ahora, cuando se cargue la página o se introduzca texto en el fragmento de código, la ventana se ajustará automáticamente en tamaño al texto.

---

**User:**
para copiar el fragmento de código, poner un icono svg con click y texto 'Copy Code' en el encabezado

---

**ChatGPT:**
Puede agregar un icono SVG y un texto "Copiar código" al encabezado de la ventana de fragmento de código para copiar el fragmento. Aquí está el código necesario para hacerlo:
HTML:
```php
php
Copy code
<div id="code-header">
  <span>Code Input</span>
  <button id="copy-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <span>Copiar código</span>
  </button>
</div>
```
CSS:
```css
css
Copy code
#copy-btn {
  display: flex;
  align-items: center;
}

#copy-btn svg {
  margin-right: 10px;
}
```
Este código agregará un icono SVG y un texto "Copiar código" al botón de copia en la parte superior de la ventana de fragmento de código. La función de copiar el fragmento de código aún se realiza al hacer clic en este botón.

---

**User:**
ajustar la ventana al texto del fragmento

---

**ChatGPT:**
Para hacer que la ventana del fragmento de código se ajuste en tamaño al texto, puede utilizar JavaScript para calcular la altura del elemento <code>code-input</code> y ajustar la altura de <code>code-window</code> en consecuencia. Aquí está el código necesario para hacerlo:
JavaScript:
```javascript
javascript
Copy code
const codeWindow = document.getElementById("code-window");
const codeInput = document.getElementById("code-input");

// Function to adjust the height of code-window to the height of code-input
function adjustCodeWindowHeight() {
  codeWindow.style.height = `${codeInput.offsetHeight + 50}px`;
}

// Call the function on load and on any changes to the code-input
window.addEventListener("load", adjustCodeWindowHeight);
codeInput.addEventListener("input", adjustCodeWindowHeight);
```
Agregue este código JavaScript después del código JavaScript que copia el fragmento de código. Ahora, cuando se cargue la página o se introduzca texto en el fragmento de código, la ventana se ajustará automáticamente en tamaño al texto.

---

**User:**
justificar el código con respecto al tamaño de la ventana

---

**ChatGPT:**
Para justificar el código con respecto al tamaño de la ventana, puede agregar el estilo <code>white-space: pre-wrap</code> al elemento <code>pre</code> que contiene el fragmento de código. Esto forzará a que el código se muestre con los saltos de línea y los espacios en blanco originales y se ajuste al ancho de la ventana. Aquí está el código necesario para hacerlo:
CSS:
```css
css
Copy code
#code-input {
  white-space: pre-wrap;
}
```
Agregue este código CSS después de los estilos existentes para el elemento <code>code-input</code>. Ahora, el fragmento de código se justificará con respecto al tamaño de la ventana y se mostrará con los saltos de línea y los espacios en blanco originales.

---

**User:**
ajustar el texto del fragmento a la parte izquierda de la ventana

---

**ChatGPT:**
Para ajustar el texto del fragmento a la parte izquierda de la ventana, puede agregar el estilo <code>text-align: left</code> al elemento <code>pre</code> que contiene el fragmento de código. Aquí está el código necesario para hacerlo:
CSS:
```css
css
Copy code
#code-input {
  text-align: left;
}
```
Agregue este código CSS después de los estilos existentes para el elemento <code>code-input</code>. Ahora, el fragmento de código se mostrará ajustado a la parte izquierda de la ventana.

---

**User:**
quiero que la ventana del fragmento tenga un color gris oscuro

---

**ChatGPT:**
Para darle un color gris oscuro a la ventana del fragmento de código, puede agregar el estilo <code>background-color</code> al elemento <code>code-window</code>. Aquí está el código necesario para hacerlo:
CSS:
```css
css
Copy code
#code-window {
  background-color: #333;
}
```
Agregue este código CSS después de los estilos existentes para el elemento <code>code-window</code>. Ahora, la ventana del fragmento de código tendrá un color gris oscuro.

---

**User:**
quiero el fondo donde va el código de color azul

---

**ChatGPT:**
Para cambiar el color de fondo donde se muestra el fragmento de código a azul, puede agregar el estilo <code>background-color</code> al elemento <code>pre</code> que contiene el fragmento de código. Aquí está el código necesario para hacerlo:
CSS:
```css
css
Copy code
#code-input {
  background-color: blue;
}
```
Agregue este código CSS después de los estilos existentes para el elemento <code>code-input</code>. Ahora, el fondo donde se muestra el fragmento de código será de color azul.

---

**User:**
quiero el fondo donde va el código de color azul

---

**ChatGPT:**
Para cambiar el color de fondo donde se muestra el fragmento de código a azul, puede agregar el estilo <code>background-color</code> al elemento <code>pre</code> que contiene el fragmento de código. Aquí está el código necesario para hacerlo:
CSS:
```css
css
Copy code
#code-input {
  background-color: blue;
}
```
Agregue este código CSS después de los estilos existentes para el elemento <code>code-input</code>. Ahora, el fondo donde se muestra el fragmento de código será de color azul.