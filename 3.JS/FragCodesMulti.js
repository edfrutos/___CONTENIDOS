//JavaScript para activar el botón de copiar
// Función para activar el botón de copiar
function activateCopyButton() {
    var copyButtons = document.querySelectorAll('.copy-button');

    // Para cada botón de copiar, se agrega un event listener al hacer click
    for (var i = 0; i < copyButtons.length; i++) {
        var copyButton = copyButtons[i];
        var clipboard = new ClipboardJS(copyButton);

        // Al copiar, se cambia el texto del botón temporalmente
        clipboard.on('success', function (event) {
            var copyButton = event.trigger;
            var initialText = copyButton.innerHTML;

            copyButton.innerHTML = 'Copied!';
            setTimeout(function () {
                copyButton.innerHTML = initialText;
            }, 2000);
        });
    }
}

// Se activa el botón de copiar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    activateCopyButton();
});
