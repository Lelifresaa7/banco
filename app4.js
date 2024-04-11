let vancho= document.querySelector("#vancho");
let vanchob= document.querySelector("#vanchob");
let valto= document.querySelector("#valto");
let alto= document.querySelector("#alto");
let ancho= document.querySelector("#ancho");
let colorf= document.querySelector("#colorf");
let anchob= document.querySelector("#anchob");
let colorb= document.querySelector("#colorb");
let tipob= document.querySelector("#tipob");
let cajita= document.querySelector("#cajita");


ancho.oninput=()=> dibujar()
alto.oninput=()=> dibujar()
anchob.oninput=()=> dibujar()
colorf.onchange=()=> dibujar()
colorb.onchange=()=> dibujar()
tipob.onchange=()=> dibujar()


const dibujar=()=>{
    
let an =parseInt(ancho.value); 
let al =parseInt(alto.value);
let ab =parseInt(anchob.value);
let c1= colorf.value;
let c2=colorb.value;
let cb=colorb.value;
let tb= tipob.value;

vancho.innerHTML=an;
valto.innerHTML=al;
vanchob.innerHTML=ab;
cajita.style.width=an+"px";
cajita.style.height=al+"px";
cajita.style.borderWidth=ab+"px";
cajita.style.backgroundColor=c1;
cajita.style.borderColor=c2;
cajita.style.borderStyle=tb;

}