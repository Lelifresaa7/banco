let vancho= document.querySelector("#vancho");
let vanchob= document.querySelector("#vanchob");
let valto= document.querySelector("#valto");
let alto= document.querySelector("#alto");
let ancho= document.querySelector("#ancho");
let colorf= document.querySelector("#colorf");
let anchob= document.querySelector("#anchob");
let colorb= document.querySelector("#colorb");
let tipob= document.querySelector("#tipob");
let ra= document.querySelector("#radius");
let ro= document.querySelector("#rotate");
let trasX= document.querySelector("#traslateX");
let trasY= document.querySelector("#traslateY");
let sl= document.querySelector("#scale");

let sombra = document.querySelector("#csombra");
let dv13 = document.querySelector("#sombra");

let tsombra = document.querySelector("#vsombra");
let dv14 = document.querySelector("#som");

let sx = document.querySelector("#sx");
let dv15 = document.querySelector("#som2");

let sy = document.querySelector("#sy");
let dv16 = document.querySelector("#som3");

let cajita= document.querySelector("#cajita");


ancho.oninput=()=> dibujar()
alto.oninput=()=> dibujar()
anchob.oninput=()=> dibujar()
colorf.onchange=()=> dibujar()
colorb.onchange=()=> dibujar()
tipob.onchange=()=> dibujar()
radius.oninput=()=> dibujar()
rotate.oninput=()=> dibujar()
traslateX.oninput=()=> dibujar()
traslateY.oninput=()=> dibujar()
scale.oninput=()=> dibujar()


const dibujar=()=>{
    
let an =parseInt(ancho.value); 
vancho.innerHTML=an;
cajita.style.width=an+"px";

let al =parseInt(alto.value);
valto.innerHTML=al;
cajita.style.height=al+"px";

let ab =parseInt(anchob.value);
vanchob.innerHTML=ab;
cajita.style.borderWidth=ab+"px";

let c1= colorf.value;
cajita.style.backgroundColor=c1;

let c2=colorb.value;
cajita.style.borderColor=c2;

let cb=colorb.value;

let tb= tipob.value;
cajita.style.borderStyle=tb;

let rd=parseInt(radius.value);
vradius.innerHTML=rd;
cajita.style.borderRadius=rd+"px";

let rt= parseInt(rotate.value);
vrotate.innerHTML=rt;
cajita.style.rotate=rt+"deg";

let x= parseInt(traslateX.value);
vtraslateX.innerHTML=x;
let y= parseInt(traslateY.value);
vtraslateY.innerHTML=y;
cajita.style.transform="translateY" +"("+y+"px"+")"+"translateX"+"("+x+"px"+")";

let sc= parseInt(scale.value);
vscale.innerHTML=sc;
cajita.style.transform="translateX("+x+"px) translateY("+y+"px) scale("+sc+")"

sombra.onchange = () => {
    let n = sombra.value;
    dv13.innerHTML = n;
    cajita.style.boxShadow = n;
  }

  sombra.onchange = () => {
  let n = sombra.value;
  dv13.innerHTML = n;
  cajita.style.boxShadow = "10px 10px 5px " + n; // Por ejemplo: "10px 10px 5px #888888"
}

tsombra.oninput = () => {
  let n = parseInt(tsombra.value);
  dv14.innerHTML = n;
  cajita.style.boxShadow = `10px 10px ${n}px black`;
}

sx.oninput = () => {
  let n = parseInt(sx.value);
  dv15.innerHTML = n;
  cajita.style.boxShadow = `${n}px 10px 5px black`;
}

sy.oninput = () => {
  let n = parseInt(sy.value);
  dv16.innerHTML = n;
  cajita.style.boxShadow = `10px ${n}px 5px black`;
}
}