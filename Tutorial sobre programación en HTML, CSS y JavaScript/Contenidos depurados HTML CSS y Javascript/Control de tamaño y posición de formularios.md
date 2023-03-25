
Código HTML y CSS para controlar el tamaño y la posición de un formulario:

```php

<!DOCTYPE html>
<html>
  <head>
    <style>
      form {
        width: 500px;
        margin: 50px auto;
        text-align: center;
        padding: 20px;
        background-color: lightgray;
        border-radius: 10px;
      }

      input[type="text"],
      input[type="email"],
      textarea {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: none;
        border-radius: 5px;
        font-size: 18px;
      }

      input[type="submit"] {
        padding: 10px 20px;
        font-size: 18px;
        background-color: blue;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      input[type="submit"]:hover {
        background-color: darkblue;
      }
    </style>
  </head>
  <body>
    <form>
      <input type="text" placeholder="Nombre" required />
      <input type="email" placeholder="Correo electrónico" required />
      <textarea placeholder="Mensaje" rows="5"></textarea>
      <input type="submit" value="Enviar" />
    </form>
  </body>
</html>
```

En este ejemplo, el formulario tiene un ancho fijo de 500 píxeles y está centrado en la página con un margen automático. La alineación del texto y el relleno se definen en el bloque form, mientras que las propiedades de estilo para los inputs y el botón de envío se definen en los selectores correspondientes.
