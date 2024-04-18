var n=1;

var input= document.querySelector("#numero");
input.oninput=()=>{
  n=parseInt(input.value);
  document.querySelector("#vnumero").innerHTML=n;
}
document.querySelector("#ver").onclick=()=>{
  var spinnee=document.querySelector("#tabla")
  spinnee.innerHTML="<img src='R.gif'>";
  setTimeout(()=>{
var tabla=document.querySelector("#tabla");
let table="<table class='table'>";
  for ( i = 1; i <= 10; i++) {
    table+= "<tr><td>"+n+"</td><td>x</td><td>"+i+"</td><td>=</td><td>"+(n*i)+"</td></tr>";
  }
  table+="</table>";
  tabla.innerHTML=table;


},2000);
document.querySelector("#borrar").onclick=()=>{
  tabla.innerHTML="";
}

  
}