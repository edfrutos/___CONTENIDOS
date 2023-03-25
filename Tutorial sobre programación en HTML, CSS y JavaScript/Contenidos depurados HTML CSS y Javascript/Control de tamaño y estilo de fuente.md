Para controlar el tamaño y el estilo de la fuente en HTML, puede utilizar las etiquetas "font-size" y "font-family" en el estilo CSS.
Ejemplo:
```html

<html>
<head>
  <style>
    p {
      font-size: 20px;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <p>Este es un párrafo con un tamaño de fuente de 20px y una familia de fuente Arial.</p>
</body>
</html>
```
También puede aplicar estos estilos a una clase o ID específico en lugar de a todos los elementos "p".
```html

<html>
<head>
  <style>
    .miClase {
      font-size: 20px;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <p class="miClase">Este es un párrafo con un tamaño de fuente de 20px y una familia de fuente Arial.</p>
</body>
</html>
```