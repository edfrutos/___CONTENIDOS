
```
Exported with AIPRM https://www.aiprm.com by Eugenio de Frutos on 29/1/2023, 20:45:50
```

---


**User:**
con html, css y javascript Control de transiciones y animaciones en hover y click

---

**ChatGPT:**
Puedes controlar transiciones y animaciones en HTML, CSS y JavaScript usando selectores CSS y eventos JavaScript como hover y click. Aquí hay un ejemplo básico:
HTML:
```bash
bash
Copy code
<button id="myBtn">Hover me</button>
```
CSS:
```css
css
Copy code
#myBtn {
  transition: transform 0.5s ease;
}
#myBtn:hover {
  transform: scale(1.2);
}
```
JavaScript:
```javascript
javascript
Copy code
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", function() {
  btn.classList.toggle("clicked");
});
```
Y en CSS agrega:
```css
css
Copy code
#myBtn.clicked {
  transform: rotate(180deg);
}
```
Esto agrega una transición suave cuando el usuario hace hover en el botón, y cuando se hace clic en el botón, la clase "clicked" se agrega o quita y provoca una animación de rotación.