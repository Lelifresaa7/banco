var edad=document.getElementById("edad");
var numero=document.getElementById("numero");

var senti=document.getElementById("senti");
var cleari=document.getElementById("cleari");

senti.onclick=()=>{
  var uno=edad.value;
  var dos=numero.value

  localStorage.setItem(uno,dos)
}



cleari.onclick=()=>{
  localStorage.clear();
}
