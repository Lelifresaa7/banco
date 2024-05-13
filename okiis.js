var nombre=document.getElementById("nombre");
var apaterno=document.getElementById("apaterno");
var amaterno=document.querySelector("amaterno");

var combo1=document.querySelector("combo1");
var combo2=document.querySelector("combo2");

var agregar=document.querySelector("agregar");


agregar.onclick=()=>{
  var alumnos=new Array()
  var nombre=document.getElementById("nombre");
var apaterno=document.getElementById("apaterno");
var amaterno=document.querySelector("amaterno");

var combo1=document.querySelector("combo1");
var combo2=document.querySelector("combo2");

var agregar=document.querySelector("agregar");


var alumno = {nombre,apaterno,amaterno,combo1,combo2}

alumnos.push(alumno)
localStorage.setItem("alumnos",alumno)

}










  

