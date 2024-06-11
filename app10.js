var numero=document.querySelector("#numero");
var tabla=document.querySelector("#tabla");
var resul=document.querySelector("#resul");

var borrar=document.querySelector("#borrar");


numero.oninput=()=>{
  resul.innerHTML=numero.value;
  let n=parseFloat(numero.value);
  let raiz=Math.sqrt(n);
  tabla.textContent=raiz.toFixed(2);
}




document.querySelector("#borrar").onclick=()=>{
  tabla.innerHTML="";
}

  


