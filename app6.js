let colorInput = document.querySelector("#cool");

let ancho = document.querySelector("#ancho");
let dv = document.querySelector("#vancho");

let alto = document.querySelector("#alto");
let dv2 = document.querySelector("#valto");

let color = document.querySelector("#color");
let dv3 = document.querySelector("#vcolor");

let aborde = document.querySelector("#aborde");
let dv4 = document.querySelector("#vborde");

let coborde = document.querySelector("#cborde");
let dv5 = document.querySelector("#vborde2");

let tbor = document.querySelector("#tipob");
let dv6 = document.querySelector("#vtborde");

let caja1 = document.querySelector("#caja1");
let dv7 = document.querySelector("#ccaja")

let radio = document.querySelector("#vradio");
let dv8 = document.querySelector("#vra");

let rota = document.querySelector("#vrotate");
let dv9 = document.querySelector("#vrot");

let tras1 = document.querySelector("#vtras");
let dv10 = document.querySelector("#vtra");

let tras2 = document.querySelector("#vtras2");
let dv11 = document.querySelector("#vtra2");

let scale = document.querySelector("#vscale");
let dv12 = document.querySelector("#esca");

let sombra = document.querySelector("#csombra");
let dv13 = document.querySelector("#sombra");

let tsombra = document.querySelector("#vsombra");
let dv14 = document.querySelector("#som");

let sx = document.querySelector("#sx");
let dv15 = document.querySelector("#som2");

let sy = document.querySelector("#sy");
let dv16 = document.querySelector("#som3");

let cajita = document.querySelector("#cajita");

ancho.oninput = () => {
  let n = parseInt(ancho.value);
  dv.innerHTML = n;
  cajita.style.width = n + "px";
}

alto.oninput = () => {
  let n = parseInt(alto.value);
  dv2.innerHTML = n;
  cajita.style.height = n + "px";
}

color.oninput = () => {
  let n = color.value;
  dv3.innerHTML = n;
  cajita.style.backgroundColor = n;
}

aborde.oninput = () => {
  let n = aborde.value;
  dv4.innerHTML = n;
  cajita.style.borderWidth = n + "px";
  console.log("ancho cambiado a: "+n);
}

coborde.oninput = () => {
  let n = coborde.value;
  dv5.innerHTML = n;
  cajita.style.borderColor = n;
  console.log("color cambiado a: "+n);
}

tbor.onchange = () => {
  let n = tbor.value;
  dv6.innerHTML = n;
  cajita.style.borderStyle = n;
  console.log("tipo cambiado a: "+n);
}

radio.oninput = () => {
    let n = radio.value;
    dv8.innerHTML = n;
    cajita.style.borderRadius = n + "%";
    console.log("tipo cambiado a: "+n);
  }

  rota.oninput = () => {
    let n = rota.value;
    dv9.innerHTML = n;
    cajita.style.rotate = n + "deg";
    console.log("tipo cambiado a: "+n);
  }

  tras1.oninput = () => {
    let n = parseInt(tras1.value);
    dv10.innerHTML = n;
    cajita.style.transform = "translateX("+n+"px)";
  }

  tras2.oninput = () =>{
    let n2 = parseInt(tras2.value);
    dv11.innerHTML = n2;
    cajita.style.transform =  "translateY("+n2+"px)";
  }

  scale.oninput = () =>{
    let n = parseInt(scale.value);
    dv12.innerHTML = n;
    cajita.style.transform = "scale("+n+")";
  }

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