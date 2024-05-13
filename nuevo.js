

var guardar=document.querySelector("guardar");

var alumnos=new Array()
guardar.onclick=()=>{
  
  var nombre=document.getElementById("nombre").value;
var apaterno=document.getElementById("apaterno").value;
var amaterno=document.querySelector("amaterno").value;
var combo1=document.querySelector("combo1").value;
var combo2=document.querySelector("combo2").value;


if(nombre.trim()=="" || apaterno.trim()=="" || amaterno.trim()==""){

Swal.fire({
  title:"ALUMNOS",
  text:"FALTA LLENAR CAMPOS",
  icon: "error"
});
return;

}

let alumno = {nombre,apaterno,amaterno,combo1,combo2}

alumnos.push(alumno)

localStorage.setItem("alumnos",JSON.stringify(alumnos));
limpiarForm();
imprimirTabla();


}


const imprimirTabla=()=>{
  var x=(JSON.parse(localStorage.getItem("alumnos"))==null)?[]:JSON.parse(localStorage.getItem ("alumnos"));
  let tablaHTML=`
  <table class="table w-100 m-auto">
  <tr>
  <td> NOMBRE</td>
    <td>A PATERNO</td>
      <td>A MATERNO </td>
        <td>GRUPO</td>
          <td>CARRERA</td>
            <td>DEL</td>
  </tr>
  
  `;
  
  x.forEach(alumno=>{
    tablaHTML+=`
    <tr>
    <td>${alumno.nombre} </td>
      <td> ${alumno.apaterno}</td>
        <td> ${alumno.amaterno}</td>
          <td>${alumno.combo1}</td>
            <td>${alumno.combo2}</td>
              <td><button class="btn btn-danger"> DEL</td>
    </tr>
    
    `
    
    
  })
document.getElementById("res").innerHTML=tablaHTML
}


const limpiarForm = ()=>{
  var nombre=document.getElementById("nombre").value="";
var apaterno=document.getElementById("apaterno").value="";
var amaterno=document.querySelector("amaterno").value="";
var combo1=document.querySelector("combo1").selectedIndex=0;
var combo2=document.querySelector("combo2").selectedIndex=0;

}
imprimirAlumnos()






  

