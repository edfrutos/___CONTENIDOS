// Este código JavaScript sirve para copiar el contenido de un elemento HTML a través del uso de un botón.
    //La primera línea de código asigna a la variable "copyBtn" el botón que tiene el id "copy-btn" en el documento HTML.
    const copyBtn = document.getElementById("copy-btn");
    //La segunda línea de código asigna a la variable "codeInput" el elemento que tiene el id "code-input".
    const codeInput = document.getElementById("code-input");
    //La tercera línea de código asigna a la variable "codeWindow" el elemento que tiene el id "code-window".
    const codeWindow = document.getElementById("code-window");
    //Luego, se agrega un event listener al botón "copyBtn" que escucha el evento "click". 
    //Cuando se hace clic en el botón, se ejecuta una función que asigna a la variable "codeInputValue" el 
    //contenido del elemento "codeInput" utilizando la propiedad "innerText".
    //Finalmente, se utiliza el objeto "navigator.clipboard" para copiar el contenido de "codeInputValue" 
    //al portapapeles del usuario mediante el método "writeText()".
    copyBtn.addEventListener("click", () => {
      const codeInputValue = codeInput.innerText;
      navigator.clipboard.writeText(codeInputValue);
    });

    // Función para ajustar la altura de la ventana de código a la altura de la entrada de código
    function adjustCodeWindowHeight() {
      codeWindow.style.height = `${codeInput.offsetHeight + 50}px`;
    }
    // Llamar a la función en carga y en cualquier cambio en la entrada de código
    window.addEventListener("load", adjustCodeWindowHeight);
    codeInput.addEventListener("input", adjustCodeWindowHeight);