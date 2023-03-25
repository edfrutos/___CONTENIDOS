**
La control de botones y campos de entrada en formularios se puede lograr mediante la validación de datos y la manipulación de eventos en el lado del cliente (JavaScript) y/o el lado del servidor (PHP, Ruby, Python, etc.). Algunos ejemplos incluyen:
<li><p>Validación de entrada de datos: verificar si los campos están vacíos o si el formato de la entrada es válido antes de enviar el formulario.</p></li><li><p>Deshabilitar/habilitar botones: habilitar o deshabilitar un botón en función de la entrada del usuario en un formulario.</p></li><li><p>Cambiar la apariencia de un campo de entrada: cambiar el color o la apariencia de un campo de entrada si el usuario ha introducido un valor no válido.</p></li>
Estos son solo algunos ejemplos, pero existen muchas otras formas de controlar y manipular los botones y campos de entrada en un formulario.

Aquí hay un ejemplo básico de código HTML y CSS para controlar los botones y campos de entrada en un formulario:
```HTML

<form>
  <input type="text" id="username" placeholder="Enter username">
  <br><br>
  <input type="password" id="password" placeholder="Enter password">
  <br><br>
  <input type="submit" value="Submit" id="submit-button">
</form>
```
```CSS

input[type="text"], input[type="password"] {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 300px;
}

#submit-button {
  padding: 10px 20px;
  background-color: lightblue;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

#submit-button:hover {
  background-color: blue;
}
```
Y aquí hay un ejemplo básico de código JavaScript para validar los campos de entrada y controlar el botón submit:
```JavaScript

const username = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (username.value === "" || password.value === "") {
    alert("Username and password fields cannot be empty");
  } else {
    // Submit the form
  }
});
```
Este es solo un ejemplo básico, pero puede personalizar y ampliar estas acciones según sus necesidades.

Aquí hay un ejemplo de código JavaScript para realizar una validación de entrada de datos en un formulario:
```JavaScript

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (username.value === "") {
    alert("Username field cannot be empty");
  } else if (password.value === "") {
    alert("Password field cannot be empty");
  } else {
    // Validate format of inputs (e.g. username length, password strength)
    // Submit the form if inputs are valid
  }
});
```
En este ejemplo, se está usando un event listener en el formulario para detectar cuando se envía. Se verifica si los campos de nombre de usuario y contraseña están vacíos y se muestra una alerta si es así. Luego, puede agregar validación adicional para verificar el formato de la entrada, como la longitud del nombre de usuario o la fortaleza de la contraseña. Finalmente, si la entrada es válida, se puede enviar el formulario.

Aquí hay un ejemplo de código JavaScript para deshabilitar o habilitar un botón en función de la entrada del usuario en un formulario:
```JavaScript

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit-button");

username.addEventListener("input", function() {
  if (username.value !== "" && password.value !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

password.addEventListener("input", function() {
  if (username.value !== "" && password.value !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
```
En este ejemplo, se están usando event listeners en los campos de nombre de usuario y contraseña para detectar cuando se realiza una entrada. Si ambos campos tienen un valor, se habilita el botón de envío, de lo contrario, se deshabilita. De esta manera, el usuario no puede enviar el formulario hasta que ambos campos estén llenos.

Aquí hay un ejemplo de código HTML y CSS para deshabilitar o habilitar un botón en un formulario:
```HTML
HTML
Copy code
<form id="form">
  <label for="username">Username:</label>
  <input type="text" id="username">
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password">
  <br><br>
  <button type="submit" id="submit-button" disabled>Submit</button>
</form>
```
```CSS

button[disabled] {
  background-color: lightgray;
  cursor: not-allowed;
}
```
En este ejemplo, el botón de envío está deshabilitado en la página HTML. Luego, el código JavaScript puede habilitar o deshabilitar el botón según sea necesario. La hoja de estilo CSS simplemente cambia el color de fondo y el cursor cuando el botón está deshabilitado para indicar al usuario que no puede hacer clic en él.

Aquí hay un ejemplo de código HTML, CSS y JavaScript para deshabilitar o habilitar un botón en función de la entrada del usuario en un formulario:
```HTML

<form id="form">
  <label for="username">Username:</label>
  <input type="text" id="username">
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password">
  <br><br>
  <button type="submit" id="submit-button" disabled>Submit</button>
</form>
```
```CSS

button[disabled] {
  background-color: lightgray;
  cursor: not-allowed;
}
```
```JavaScript

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit-button");

username.addEventListener("input", function() {
  if (username.value !== "" && password.value !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

password.addEventListener("input", function() {
  if (username.value !== "" && password.value !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
```
En este ejemplo, el código HTML define el formulario con dos campos de entrada y un botón de envío. La hoja de estilo CSS cambia el color de fondo y el cursor cuando el botón está deshabilitado. El código JavaScript utiliza event listeners en los campos de nombre de usuario y contraseña para detectar cuando se realiza una entrada. Si ambos campos tienen un valor, se habilita el botón de envío, de lo contrario, se deshabilita. De esta manera, el usuario no puede enviar el formulario hasta que ambos campos estén llenos.

Aquí hay un ejemplo de código HTML, CSS y JavaScript para cambiar el color o la apariencia de un campo de entrada si el usuario ha introducido un valor no válido:
```HTML

<form id="form">
  <label for="email">Email:</label>
  <input type="email" id="email" class="input">
  <br><br>
  <button type="submit">Submit</button>
</form>
```
```CSS

.input {
  border: 1px solid lightgray;
}

.input.invalid {
  border: 1px solid red;
}
```
```JavaScript

const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!email.checkValidity()) {
    email.classList.add("invalid");
  } else {
    email.classList.remove("invalid");
    // Enviar formulario aquí
  }
});
```
En este ejemplo, el código HTML define el formulario con un campo de entrada de correo electrónico y un botón de envío. La hoja de estilo CSS define un borde gris claro para los campos de entrada y un borde rojo para los campos inválidos. El código JavaScript utiliza un event listener en el formulario para detectar cuando se intenta enviar. Si el campo de correo electrónico no es válido, se agrega la clase "inválida", que cambia el borde a rojo. De esta manera, se notifica al usuario de un valor no válido en el campo de entrada.