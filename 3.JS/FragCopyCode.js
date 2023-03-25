const copyCodeToClipboard = (event) => {
    // Obtener el contenido del código
    const codeToCopy = event.target.closest(".bg-black").querySelector(".hljs");
    const codeContent = codeToCopy.innerText;

    // Crear un elemento temporal de texto para copiar el contenido
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = codeContent;
    tempTextArea.setAttribute("readonly", "");
    tempTextArea.style.position = "absolute";
    tempTextArea.style.left = "-9999px";
    document.body.appendChild(tempTextArea);

    // Seleccionar y copiar el contenido del elemento temporal
    tempTextArea.select();
    document.execCommand("copy");

    // Eliminar el elemento temporal de texto
    document.body.removeChild(tempTextArea);
  };

  // Seleccionar todos los botones "Copy Code" y agregar un evento de clic a cada uno
  const copyCodeButtons = document.querySelectorAll(".copy-code-button");
  copyCodeButtons.forEach((button) => {
    button.addEventListener("click", copyCodeToClipboard);
  });