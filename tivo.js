var productos = JSON.parse(localStorage.getItem('productos')) || []; //estos son los arreglos victoria "productos es el tamaño de pizza, el que va junto a precio"
var precios = JSON.parse(localStorage.getItem('precios')) || [];//"precio de pizza"
var pi = JSON.parse(localStorage.getItem('pi')) || [];

var selectTipo= document.getElementById("selectTipo");
var selectTamaño= document.getElementById("selectTamaño");
var cantidad= document.getElementById("cantidad");
var vcantidad= document.getElementById("vcantidad");
var vprecio= document.getElementById("precio");
var btnAddPizza= document.getElementById("btnAddPizza");
var carritoPizza= document.getElementById("carritoPizza");

var aPizzas = new Array();
var aTamaño= new Array();
var aPrecio= new Array();
var aOrdenes= new Array();
var cantidadPizzas=1;

cantidad.oninput=()=>{
    vcantidad.innerHTML=cantidad.value;
    cantidadPizzas=parseInt(cantidad.value);
    vprecio.innerHTML="$"+cantidadPizzas*aPrecio[selectTamaño.selectedIndex];
}
selectTamaño.onchange=()=>{
    vprecio.innerHTML=cantidadPizzas*aPrecio[selectTamaño.selectedIndex];
}

const agregarTipo=()=>{
    let tipo= document.getElementById("tipoPizza").value
    if(tipo.trim()==""){
        Swal.fire({
            title: "ERROR",
            text: "Campo Vacio",
            icon: "error"
          });
          return;
    }
    aPizzas.push(tipo.trim());
    bootstrap.Modal.getInstance(document.getElementById("ModalTipo")).hide();
    actualizarCombos();
}
const Todo=()=>{
    
    cargarProductos();
    cargarProductos2();
  }
  
const agregarTamaño=()=>{
    let tamaño= document.getElementById("tamanioPizza").value;
    let precio = document.getElementById("precioPizza").value;
    if(tamaño.trim()==""|| precio.trim()==""){
        Swal.fire({
            title: "ERROR",
            text: "Campo Vacio",
            icon: "error"
          });
          return;
    }
    aTamaño.push(tamaño);
    aPrecio.push(precio);
    bootstrap.Modal.getInstance(document.getElementById("ModalTamaño")).hide();
    actualizarCombos();
}

const actualizarCombos=()=>{
    let comboTipo=``;
    aPizzas.forEach(pizzas=>{
        comboTipo+=`<option value="${pizzas}">${pizzas.toUpperCase()}</option>`;
    })
    selectTipo.innerHTML=comboTipo;
    let comboTamaño=``
    aTamaño.forEach(tamaño=>{
        comboTamaño+=`<option value="${tamaño}">${tamaño.toUpperCase()}</option>`;
    })
    selectTamaño.innerHTML=comboTamaño;
    vprecio.innerHTML=cantidadPizzas*aPrecio[selectTamaño.selectedIndex];
}
btnAddPizza.onclick=()=>{
    let tipoPizza=selectTipo.value.toUpperCase();
    let tamPizza= selectTamaño.value.toUpperCase();
    let precioPizza=parseInt(aPrecio[selectTamaño.selectedIndex]);

    if(!checarPizzas(tipoPizza, tamPizza, cantidadPizzas)){
    var orden= new Array();
    orden.push(tipoPizza);
    orden.push(tamPizza);
    orden.push(cantidadPizzas);
    orden.push(precioPizza);
    aOrdenes.push(orden);
    }
    imprimirCarrito();

}
const checarPizzas=(tipo, tam, cant)=>{
    let res=false;
    aOrdenes.forEach(orden=>{
        if(orden[0]==tipo && orden[1]==tam){
           orden[2]+=cant;
           res=true;
         
        }
    });
    return res;
}
const imprimirCarrito=()=>{
    console.log(aOrdenes)
    let carritoTable=``
    let total=0;
    let index=0;
    aOrdenes.forEach(orden=>{
        carritoTable+=`
        <tr>
        <td>${orden[0]}</td>
        <td>${orden[1]}</td>
        <td>${orden[2]}</td>
        <td>$ ${orden[3]}</td>
        <td>$ ${(orden[2]*orden[3])}.00</td>
        <td><button type="button" class="btn btn-secondary" onclick="EliminarPizza(${index})">DEL</button></td>
        </tr>
        `
        index++;
        total+=(orden[2]*orden[3]);
    });
    carritoTable+=`
    <tr>
    <td colspan='4'>TOTAL</td>
    <td><h2>$ ${total}.00</h2></td>
    <td></td>
    </tr>
    `
    carritoPizza.innerHTML=carritoTable;
}
const EliminarPizza=(index)=>{
    Swal.fire({
        title: "Estas seguro de eliminar?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Si",
        denyButtonText:` No`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Eliminado!", "", "success");
         aOrdenes.splice(index,1)
         imprimirCarrito();

        }
      });
}
