
```
Exported with AIPRM https://www.aiprm.com by Eugenio de Frutos on 10/2/2023, 12:49:51
```

---


**User:**
Crear en html, css y javascript un menu hamburguesa desplegable que se muestre a menos de 767px

---

**ChatGPT:**
Aquí está un ejemplo de código HTML, CSS y JavaScript para crear un menú hamburguesa desplegable que se muestre a menos de 767 píxeles:
HTML:
```php
php
Copy code
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="script.js"></script>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

</body>
</html>
```
CSS:
```css
css
Copy code
@media screen and (max-width: 767px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #4CAF50;
  color: white;
}

.topnav .icon {
  display: none;
}
```
JavaScript:
```javascript
javascript
Copy code
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
```
Este código crea un menú con diferentes enlaces de navegación que se despliegan al hacer clic en el icono hamburguesa (representado por una "i" en un círculo) cuando el tamaño de la pantalla es menor a 767 píxeles.