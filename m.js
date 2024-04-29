var productos = ["fabuloso", "arcoiris", "grade", "mazapan", "roles", "fanta", "principe", "zote"];
    var precios = [23, 18, 23, 6, 19, 17, 24, 11];

    var selectProductos = document.getElementById("productos");
    var imgProductos = document.getElementById("imgProducto");
    var precioProductos = document.getElementById("precioProducto");
    var inputCantidad = document.getElementById("inputCantidad");
    var agregarCarrito = document.getElementById("agregarCarrito");

    var carrito = [];

    var posProducto = -1;
    var cantidadProducto = 0;

    const cargarProductos = () => {
        let optionProductos = "";
        productos.forEach((producto) => {
            optionProductos += `<option value="${producto}">${producto.toUpperCase()}</option>`;
        })
        selectProductos.innerHTML = optionProductos;
        cargarPrecio();
    }

    selectProductos.onchange = () => {
        cargarPrecio();
    }

    const cargarPrecio = () => {
        imgProductos.src = `${selectProductos.value.toLowerCase()}.jpg`;
        precioProductos.innerHTML = `$ ${precios[selectProductos.selectedIndex]}`;
        posProducto = selectProductos.selectedIndex;
    }

    inputCantidad.oninput = () => {
        document.getElementById("vcantidad").innerHTML = inputCantidad.value;
        cantidadProducto = parseInt(inputCantidad.value);
    }

    agregarCarrito.onclick = () => {
        cantidadProducto = parseInt(inputCantidad.value);
        posProducto = selectProductos.selectedIndex;
        if (checarItem(posProducto, cantidadProducto)) {
            imprimirTabla();
        } else {
            let item = new Array()
            item.push(posProducto);
            item.push(cantidadProducto);
            carrito.push(item);
            imprimirTabla();
        }

    }

    const checarItem = (pos, cant) => {
        let x = false;
        carrito.forEach(item => {
            if (item[0] == pos) {
                item[1] = item[1] + cant;
                x = true;
            }
        });
        return x;
    }

    const calcularTotal = () => {
        let total = 0;
        carrito.forEach(item => {
            total += precios[item[0]] * item[1];
        });
        return total;
    }

    const imprimirTabla = () => {
        let total = calcularTotal();
        let divCarrito = document.getElementById("carrito");
        let tablaHTML = `<table class="table w-100 m-auto">
            <tr>
                <td>PRODUCTO</td>
                <td>PRECIO</td>
                <td>CANTIDAD</td>
                <td>IMPORTE</td>
                <td>Del</td>
            </tr>`;
        let index = 0;
        carrito.forEach(item => {
            tablaHTML += `
            <tr>
                <td>${productos[item[0]]}</td>
                <td>$ ${precios[item[0]]}.00</td>
                <td>${item[1]}</td>
                <td>$${precios[item[0]] * item[1]}.00</td>
                <td><button class="btn btn-danger" onclick="eliminarProducto(${index})">Del</button></td>
            </tr>`;
            index++;
        });
        tablaHTML += `
            <tr>
                <td></td>
                <td></td>
                <td><h3>TOTAL</h3></td>
                <td><h3>$ ${total}.00</h3></td>
            </tr>`;
        divCarrito.innerHTML = tablaHTML;
    }

    const eliminarProducto = (index) => {
        Swal.fire({
            title: "¿Estás seguro de querer borrarlo?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Salvar",
            denyButtonText: `No salvar`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("¡Guardado!", "", "success");
                carrito.splice(index, 1);
                imprimirTabla();
            }
        });
    }

const realizarPago = () => {
    Swal.fire({
        title: 'Ingrese con cuánto pagará:',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Pagar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
            if (!value || isNaN(value) || parseFloat(value) <= 0) {
                return 'Por favor ingrese un monto válido.';
            }
            const montoPago = parseFloat(value);
            const total = calcularTotal();
            if (montoPago < total) {
                return 'Pobre.';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const montoPago = parseFloat(result.value);
            const total = calcularTotal();
            const cambio = montoPago - total;
            Swal.fire(`Pago recibido: ${montoPago}, cambio: ${cambio}`);
        }
    });}