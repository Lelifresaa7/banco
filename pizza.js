var productos = [];
var precios = [];
var pi = [];

var selectProductos = document.getElementById("pro1");
var selectPizza = document.getElementById("piz");
var imgProductos = document.getElementById("ima");
var precioProductos = document.getElementById("precio");
var inputCantidad = document.getElementById("cantidad");
var agregarCarrito = document.getElementById("agre");
var vcan = document.getElementById("can");
var pp = document.getElementById("pre");
var nn = document.getElementById("nom");
var nuevaPizza = document.getElementById("newta");
var nuevapi = document.getElementById("nuevapizza");
var pizza = document.getElementById("pizza");

var carrito = [];
var totalp = 0;
var posProducto = -1;
var cantidadProducto = 0;

const cargarProductos = () => {
    let optionProductos = "";
    productos.forEach((producto, index) => {
        optionProductos += `<option value="${index}">${producto.toUpperCase()}</option>`;
    });
    selectProductos.innerHTML = optionProductos;
    cargarPrecio();
};

const cargarPizzas = () => {
    let optionPizzas = "";
    pi.forEach((pizza, index) => {
        optionPizzas += `<option value="${index}">${pizza.toUpperCase()}</option>`;
    });
    selectPizza.innerHTML = optionPizzas;
};

selectProductos.onchange = () => {
    cargarPrecio();
};

const cargarPrecio = () => {
    var APP = document.getElementById("AGP");
    APP.innerHTML = `$ ${precios[selectProductos.selectedIndex]}`;
    posProducto = selectProductos.selectedIndex;
};

inputCantidad.oninput = () => {
    vcan.innerHTML = inputCantidad.value;
    cantidadProducto = parseInt(inputCantidad.value);

    var APP = document.getElementById("AGP");
    APP.innerHTML = `$ ${cantidadProducto * precios[selectProductos.selectedIndex]}`;
    posProducto = selectProductos.selectedIndex;
};

agregarCarrito.onclick = () => {
    cantidadProducto = parseInt(inputCantidad.value);
    posProducto = selectProductos.selectedIndex;
    let pizaaa = selectPizza.selectedIndex;

    if (!checarItems(posProducto, cantidadProducto, pizaaa)) {
        let item = [posProducto, cantidadProducto, pizaaa];
        carrito.push(item);
    }
    imprimirTabla();
};

const checarItems = (pos, cant, pizaaa) => {
    let x = false;
    carrito.forEach(item => {
        if (item[0] == pos && item[2] == pizaaa) {
            item[1] += cant;
            x = true;
        }
    });
    return x;
};

const imprimirTabla = () => {
    let total = 0;
    let divCarrito = document.getElementById("carrito");
    let tablaHTML = `<table class="table w-100 m-auto text-white">
    <tr>
    <td>PRODUCTO</td>
    <td>Tamaño</td>
    <td>PRECIO</td>
    <td>CANTIDAD</td>
    <td>IMPORTE</td>
    <td>*</td>
    </tr>`;

    var vindex = 0;
    carrito.forEach(item => {
        tablaHTML += `
        <tr>
        <td>${pi[item[2]]}</td>
        <td>${productos[item[0]]}</td>
        <td>$ ${precios[item[0]]}.00</td>
        <td>${item[1]}</td>
        <td>${(precios[item[0]] * item[1])}</td>
        <td><button class="btn btn-danger" onclick="eliminar(${vindex})"><i class="bi bi-trash3-fill"></i></button></td>
        </tr>`;
        vindex++;
        total += (precios[item[0]] * item[1]);
        totalp = total;
    });

    tablaHTML += `
    <tr>
    <td></td>
    <td></td>
    <td><h3>TOTAL</h3></td>
    <td><h3>$ ${total}.00</h3></td>
    <td><button id="pagar" onclick="p()" class="btn btn-success"><i class="bi bi-database-add"></i></button></td>
    </tr>`;
    divCarrito.innerHTML = tablaHTML;
};

const eliminar = (vindex) => {
    Swal.fire({
        title: "En serio quieres quitar la pizza????",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Si",
        denyButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.splice(vindex, 1);
            imprimirTabla();
        }
    });
};

const p = async () => {
    const { value: pos } = await Swal.fire({
        title: "TOTAL A PAGAR",
        input: "number",
        text: "El total a pagar es: $" + totalp,
        showCancelButton: true,
        inputValidator: (value) => {
            if (value < totalp) {
                return "Algo salió mal";
            } else {
                Swal.fire({
                    title: "Tu cambio es: $" + (value - totalp),
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: "Ok"
                });
                carrito = [];
                imprimirTabla();
            }
        }
    });
};

document.getElementById("nuevop").onclick = () => {
    let p = parseFloat(pp.value);
    let n3 = nn.value;
    productos.push(n3);
    precios.push(p);
    pp.value = "";
    nn.value = "";
    cargarProductos();
};

nuevapi.onclick = () => {
    pi.push(pizza.value);
    pizza.value = "";
    cargarPizzas();
};

cargarProductos();
cargarPizzas();