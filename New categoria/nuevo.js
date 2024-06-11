var guardar = document.getElementById("guardar");
var guardarEdit = document.getElementById("guardarEdit");
var agregarCategoriaBtn = document.getElementById("agregarCategoria");

var categorias = JSON.parse(localStorage.getItem("categorias")) || [];
var currentEditIndex = null;

guardar.onclick = () => {
  var nombre = document.querySelector("#nombre").value;

  if (nombre.trim() == "") {
    Swal.fire({
      title: "Categorías",
      text: "Falta llenar campos",
      icon: "error"
    });
    return;
  }

  var categoria = { nombre };
  categorias.push(categoria);

  localStorage.setItem("categorias", JSON.stringify(categorias));

  limpiarForm();
  imprimirCategorias();
  Swal.fire({
    title: "Registrado con éxito",
    text: "La categoría se ha registrado correctamente.",
    icon: "success"
  });
}

guardarEdit.onclick = () => {
  var nombre = document.querySelector("#editNombre").value;
  var nombreAntiguo = categorias[currentEditIndex].nombre;

  if (nombre.trim() == "") {
    Swal.fire({
      title: "Categorías",
      text: "Falta llenar campos",
      icon: "error"
    });
    return;
  }

  categorias[currentEditIndex].nombre = nombre;
  localStorage.setItem("categorias", JSON.stringify(categorias));
  actualizarProductosCategoria(nombreAntiguo, nombre);
  
  limpiarForm();
  imprimirCategorias();
  Swal.fire({
    title: "Editado con éxito",
    text: "La categoría se ha editado correctamente.",
    icon: "success"
  });
  var editModal = bootstrap.Modal.getInstance(document.getElementById('ModalEditTipo'));
  editModal.hide();
}

const imprimirCategorias = () => {
  var x = JSON.parse(localStorage.getItem("categorias")) || [];
  let tablaHTML = `
    <table class="table w-100 m-auto">
      <tr>
        <td>CATEGORÍAS</td>
        <td>Editar</td>
        <td>Eliminar</td>
      </tr>`;

  x.forEach((categoria, index) => {
    tablaHTML += `
      <tr>
        <td>${categoria.nombre}</td>
        <td><button class="btn btn-primary" onclick="mostrarEditarModal(${index})">Editar</button></td>
        <td><button class="btn btn-danger" onclick="eliminarCategoria(${index})">Eliminar</button></td>
      </tr>`;
  });
  tablaHTML += `</table>`;
  document.getElementById("res").innerHTML = tablaHTML;
}

const limpiarForm = () => {
  document.getElementById("nombre").value = "";
  document.getElementById("editNombre").value = "";
}

const mostrarEditarModal = (index) => {
  currentEditIndex = index;
  var categoria = categorias[index];
  document.querySelector("#editNombre").value = categoria.nombre;

  var editModal = new bootstrap.Modal(document.getElementById('ModalEditTipo'));
  editModal.show();
}

const actualizarProductosCategoria = (nombreAntiguo, nuevoNombre) => {
  var productos = JSON.parse(localStorage.getItem("productos")) || [];
  productos = productos.map(producto => {
    if (producto.categoria === nombreAntiguo) {
      producto.categoria = nuevoNombre;
    }
    return producto;
  });
  localStorage.setItem("productos", JSON.stringify(productos));
}

const eliminarCategoria = (index) => {
  var categorias = JSON.parse(localStorage.getItem("categorias"));
  var nombreAntiguo = categorias[index].nombre;
  categorias.splice(index, 1);
  localStorage.setItem("categorias", JSON.stringify(categorias));
  eliminarCategoriaDeProductos(nombreAntiguo);
  imprimirCategorias();
}

const eliminarCategoriaDeProductos = (nombreAntiguo) => {
  var productos = JSON.parse(localStorage.getItem("productos")) || [];
  productos = productos.filter(producto => producto.categoria !== nombreAntiguo);
  localStorage.setItem("productos", JSON.stringify(productos));
}

imprimirCategorias();