let valor= document.querySelector("#valor");
let dv= document.querySelector("#value");

valor.oninput=()=>{
  let n=valor.value;
  dv.innerHTML=valor.value;
 if (n>0 & n<=25) {
   dv.style.color="pink"
 }
 if (n>=26) {
   dv.style.color="plum"
 }
if (n>=51) {
  dv.style.color="lightblue"
}
if (n>=76) {
  dv.style.color="yellow "
}
  
}