
```
Exported with AIPRM https://www.aiprm.com by Eugenio de Frutos on 29/1/2023, 21:02:50
```

---


**User:**
código html y css para Diseño de formularios

---

**ChatGPT:**
Aquí te proporciono un ejemplo básico de código HTML y CSS para un formulario de contacto:
HTML:
```html
html
Copy code
<form>
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name"><br>
  
  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email"><br>
  
  <label for="message">Mensaje:</label>
  <textarea id="message" name="message"></textarea><br>
  
  <input type="submit" value="Enviar">
</form>
```
CSS:
```css
css
Copy code
form {
  width: 50%;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
}
```
Este ejemplo incluye un formulario con tres campos: nombre, correo electrónico y mensaje. Cada campo se etiqueta con una etiqueta "label" relacionada con el campo de entrada correspondiente mediante el atributo "for". También se utiliza un estilo CSS para darle un aspecto más presentable al formulario.