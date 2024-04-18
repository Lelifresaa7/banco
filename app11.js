var numero=document.querySelector("#numero");
var tabla=document.querySelector("#tabla");
var resul=document.querySelector("#resul");

var borrar=document.querySelector("#borrar");


numero.oninput=()=>{
  resul.innerHTML=numero.value +"MXN";
  let n=parseFloat(numero.value);
  let dolar=n*0.060;
  tabla.textContent=dolar.toFixed(2)+"USD";
}



document.querySelector("#borrar").onclick=()=>{
  tabla.innerHTML="";
}

  


