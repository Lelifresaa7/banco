var productos=[];
var precios=[];
var pi=[];

var selectProductos=document.getElementById("pro1");
var slectpizza=document.querySelector("#piz")
var imgProductos=document.getElementById("ima");
var precioProductos=document.getElementById("precio");
var inputCantidad=document.getElementById("cantidad");
var agregarCarrito=document.getElementById("agre");
var vcan=document.querySelector("#can");
var p=document.querySelector("#pagar")
var carrito=new Array();
var total=0;
var new1=document.querySelector("#new");
let nue=document.querySelector("#nuevop");
var nn;
var pp=document.querySelector("#pre");
var nn=document.querySelector("#nom")
var nueva=document.querySelector("#newta");


var nuevapi=document.querySelector("#nuevapizza");
var pizza=document.querySelector("#pizza");

var posProducto=-1;
var cantidadProducto=0;




const cargarProductos=()=>{
    let optionProductos="";
    productos.forEach((producto) => {
        optionProductos+=`<option value="${producto}">${producto.toUpperCase()}</option>`;
    })
    selectProductos.innerHTML=optionProductos;
    cargarPrecio();
}

const cargarProductos2=()=>{
  let optionProductos2="";
  pi.forEach((productos) => {
      optionProductos2+=`<option value="${productos}">${productos.toUpperCase()}</option>`;
  })
  slectpizza.innerHTML=optionProductos2;
}

selectProductos.onchange=()=>{
    cargarPrecio();
}
const cargarPrecio=()=>{
    imgProductos.src=`${selectProductos.value.toLowerCase()}.jpeg`;
    precioProductos.innerHTML=`$ ${precios[selectProductos.selectedIndex]}`;
    posProducto=selectProductos.selectedIndex;
}

inputCantidad.oninput=()=>{
    vcan.innerHTML=inputCantidad.value;
    cantidadProducto=parseInt(inputCantidad.value);
}


agregarCarrito.onclick=()=>{
    cantidadProducto=parseInt(inputCantidad.value);
    posProducto=selectProductos.selectedIndex;
    let pizaaa=slectpizza.selectedIndex;

    let item= new Array()
    item.push(posProducto);
    item.push(cantidadProducto);
    item.push(pizaaa);
    carrito.push(item);
    imprimirTabla();

}


const imprimirTabla=()=>{
    
    let divCarrito=document.getElementById("carrito");
    let tablaHTML= `<table class="table w-100 m-auto">
    <tr>
    <td>PRODUCTO</td>
    <td>Tamaño</td>
    <td>PRECIO</td>
    <td>CANTIDAD</td>
    <td>IMPORTE</td>
    <td>*</td>
    </tr>
    `;
    var vindex=0;
    console.log(carrito)
    carrito.forEach(item=>{
        tablaHTML+=`
        <tr>
        <td>${pi[item[2]]}</td>
        <td>${productos[item[0]]}</td>
        <td>$ ${precios[item[0]]}.00</td>
        <td>${item[1]}</td>
        <td>${(precios[item[0]]*item[1])}</td>
        <td><button class="btn btn-danger" onclick="eliminar(${vindex})">borrar</button
></td>
        </tr>
        `
        vindex++;
        total+=(precios[item[0]]*item[1]);
    })
    tablaHTML+= `
    <tr>
    <td></td>
    <td></td>
    <td><h3>TOTAL</h3></td>
    <td><h3>$ ${total}.00</h3></td>
    ></td>
    </tr>`
    divCarrito.innerHTML=tablaHTML;
}
const eliminar=(vindex)=>{    
Swal.fire({
  title: "Estas seguro, asi muy seguro?????",
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: "Eliminar",
  denyButtonText: 'No'
}).then((result) => {
  if (result.isConfirmed) {
   
  
    carrito.splice(vindex , 1);
    imprimirTabla(); 
  } 
});
} 
p.onclick=async()=>{
 
const {value: pos} = await Swal.fire({
    title: "Hora de pagar",
    input: "text",
    text: "Tu total es de :+" + total,
    showCancelButton: true,
    inputValidator: (value) => {
      if (value<total) {
        return "Esta mal";
      }else{
        Swal.fire({
            title: "Muy bien pagaste tu cambio es de: " + (value-total) ,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Donar tu riñon",
            denyButtonText: 'Ok'
          })
      }
    }
  }); 
}
new1.onclick=()=>{
    let divlista=document.getElementById("lista");
    
    let tablaHTML= `<table class="table w-100 m-auto">
    <tr>
    <td>PRODUCTO</td>
    <td>PRECIO</td>
    </tr>
    `;
    var vindex=0;
    productos.forEach(item=>{
        tablaHTML+=`
        <tr>
        <td>${productos[vindex]}</td>
        <td>$ ${precios[vindex]}.00</td>  
        <td><button class="btn btn-danger" onclick="eliminar(${vindex})">borrar</button
        ></td>
        </tr>
        `
        
       
    })
    divlista.innerHTML=tablaHTML;
    
}
nue.onclick=()=>{
    let p=pp.value;
    let n3=nn.value;
    productos.push(n3);
    precios.push(p)
    cargarProductos();
}



nuevapi.onclick=()=>{
  pi.push(pizza.value);
 
  cargarProductos2();
}