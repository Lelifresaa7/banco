import {suma,restar,division, multiplicar,residuo,mayor,menor,par,impar} from "./funciones.js"

var res=document.getElementById("res");

var btnCalcular=document.getElementById("btnCalcular");

var btnBorrar=document.getElementById("btnBorrar");



 btnCalcular.onclick =()=>{
   
   let a=parseInt(document.getElementById("n1").value);
   let b=parseInt(document.getElementById("n2").value);
   
   
   
   res.innerHTML=`
   <h1>Suma:${suma(a,b)} </h1>
    <h1>Resta:${restar(a,b)} </h1>
      <h1>division:${division(a,b)} </h1>
         <h1>Multiplication:${multiplicar(a,b)} </h1>
            <h1>residuo:${residuo(a,b)} </h1>
              <h1>Mayor:${mayor(a,b)} </h1>
                <h1>Menor:${menor(a,b)} </h1>
                  <h1>${par(a,b)} </h1>
                    <h1>${impar(a,b)} </h1>
         
   `
 }
 
 btnBorrar.onclick=()=>{
   res.innerHTML="";
 }