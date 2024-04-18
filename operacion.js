var an= document.querySelector("#an");
var va= document.querySelector("#va");
var bn=document.querySelector("#bn");
var vb= document.querySelector("#vb");
var cn=document.querySelector("#cn");
var vc=document.querySelector("#vc");
var fac=document.querySelector("#fac");

an.oninput=()=> me();
bn.oninput=()=> me();
cn.oninput=()=> me();
fac.oninput=()=> me();
const me=()=>{
    let a=parseInt(an.value);
    va.innerHTML=a;
    let b=parseInt(bn.value);
    vb.innerHTML=b;
    let c= parseInt(cn.value);
    vc.innerHTML=c;
    let R=fac;

let ux=(((-1)*b));
let ux1=(Math.sqrt(Math.pow(b,2))-(4*a*c));
if (ux1==0) {
    R.textContent="Una solucion"
}
else if(ux1>0){
    R.textContent="Dos soluciones"
}
else if(ux1<0){
    R.textContent="No hay solucion"

}

let ux2=(2*a);
let fx1=(ux-ux1)/ux2;

  setTimeout(()=>{

   
x1.textContent=fx1.toFixed(2);

        
s1.innerHTML=""
    
  },1000);



let dx=(ux+ux1)/ux2;

  setTimeout(()=>{
x2.textContent=dx.toFixed(2);
   
        
s2.innerHTML=""
    
  },1000);


}