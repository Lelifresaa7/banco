var guardar = document.getElementById("guardar");
var guardarEdit = document.getElementById("guardarEdit");
var productos = JSON.parse(localStorage.getItem("productos")) || [];
var currentEditIndex = null;

guardar.onclick = () => {
  var nombre = document.querySelector("#nombre").value;
  var precio = document.querySelector("#precio").value;
  var categoria = document.querySelector("#categoria").value;

  if (nombre.trim() == "" || precio.trim() == "" || categoria.trim() == "") {
    Swal.fire({
      title: "Productos",
      text: "Falta llenar campos",
      icon: "error"
    });
    return;
  }

  var producto = { nombre, precio, categoria };
  productos.push(producto);

  localStorage.setItem("productos", JSON.stringify(productos));

  limpiarForm();
  imprimirProductos();
  Swal.fire({
    title: "Registrado con éxito",
    text: "El producto se ha registrado correctamente.",
    icon: "success"
  });
}

guardarEdit.onclick = () => {
  var nombre = document.querySelector("#editNombre").value;
  var precio = document.querySelector("#editPrecio").value;
  var categoria = document.querySelector("#editCategoria").value;

  if (nombre.trim() == "" || precio.trim() == "" || categoria.trim() == "") {
    Swal.fire({
      title: "Productos",
      text: "Falta llenar campos",
      icon: "error"
    });
    return;
  }

  productos[currentEditIndex] = { nombre, precio, categoria };
  localStorage.setItem("productos", JSON.stringify(productos));
  
  limpiarForm();
  imprimirProductos();
  Swal.fire({
    title: "Editado con éxito",
    text: "El producto se ha editado correctamente.",
    icon: "success"
  });
  var editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
  editModal.hide();
}

const imprimirProductos = () => {
  var x = JSON.parse(localStorage.getItem("productos")) || [];
  let tablaHTML = `
    <table class="table w-100 m-auto">
      <tr>
        <td>Nombre</td>
        <td>Precio</td>
        <td>Categorías</td>
        <td>Editar</td>
        <td>Eliminar</td>
      </tr>`;

  x.forEach((producto, index) => {
    tablaHTML += `
      <tr>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.categoria}</td>
        <td><button class="btn btn-primary" onclick="mostrarEditarModal(${index})">Editar</button></td>
        <td><button class="btn btn-danger" onclick="eliminarProducto(${index})">Eliminar</button></td>
      </tr>`;
  });
  tablaHTML += `</table>`;
  document.getElementById("res").innerHTML = tablaHTML;
}

const limpiarForm = () => {
  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";
}

const mostrarEditarModal = (index) => {
  currentEditIndex = index;
  var producto = productos[index];

  document.querySelector("#editNombre").value = producto.nombre;
  document.querySelector("#editPrecio").value = producto.precio;
  cargarCategorias("editCategoria");

  var editModal = new bootstrap.Modal(document.getElementById('editModal'));
  editModal.show();
}

const eliminarProducto = (index) => {
  productos.splice(index, 1);
  localStorage.setItem("productos", JSON.stringify(productos));
  imprimirProductos();
}

const cargarCategorias = (selectId) => {
  var categorias = JSON.parse(localStorage.getItem("categorias")) || [];
  var select = document.getElementById(selectId);
  select.innerHTML = ""; 
  
  
  
  
  categorias.forEach((categoria) => {
    var option = document.createElement("option");
    option.value = categoria.nombre;
    option.textContent = categoria.nombre;
    select.appendChild(option);
  });
}

document.getElementById('Modal').addEventListener('show.bs.modal', () => cargarCategorias("categoria"));

imprimirProductos();