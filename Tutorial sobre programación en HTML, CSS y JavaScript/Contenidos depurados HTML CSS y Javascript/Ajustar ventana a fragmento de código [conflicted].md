
Para hacer que el tamaño de una ventana &lt;pre&gt;&lt;code&gt; se ajuste al contenido del texto sin formato del código que contiene, puedes utilizar CSS. Aquí hay un ejemplo:
HTML:

<pre><code class="code">
// Aquí va tu código sin formato
</code></pre>

CSS:

.code {
  overflow: auto;
  white-space: pre;
  width: auto;
}

Este CSS hará que la ventana &lt;pre&gt;&lt;code&gt; tenga una anchura automática y un espacio blanco predefinido para mantener el formato del código sin formato. La propiedad "overflow: auto" asegurará que se despliegue una barra de desplazamiento si el contenido es demasiado largo para caber en la ventana.