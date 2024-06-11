var saves=document.getElementById("guardar");


  
  var USU=new Array();
  
  guardar.onclick=()=>{
let nombre=document.getElementById("nombre").value;
let ap=document.getElementById("ap").value
let usuario=document.getElementById("usuario").value
let contraseña=document.getElementById("contraseña").value


if (nombre.trim()=="" || ap.trim()=="" || usuario.trim()==""||contraseña.trim()=="") {
  Swal.fire({
    title:"Datos",
    text:"Falta llenar campos",
    icon:"error"
  })
return;  
}
let usu={nombre,ap, usuario, contraseña};
USU.push(usu);
localStorage.setItem("USU",JSON.stringify(USU));

}
