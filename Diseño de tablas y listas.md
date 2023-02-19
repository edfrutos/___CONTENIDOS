Código html y css para Diseño de tablas y listas

HTML:
e
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

CSS:

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
}

th {
  background-color: gray;
  color: white;
}

ul {
  list-style-type: none;
}

This is a basic example of how to create a table and a list using HTML and CSS. You can modify the CSS to customize the appearance of the table and list to suit your needs.
