const suma=() =>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2")
  .value);
  let sum = n1+n2;
  
  let res=document.querySelector("#res")
  if (isNaN(sum)) {
    res.innerHTML="<h1>"+0+"</h1>"
  }else{
    res.innerHTML="<h1>"+sum+"</h1>"
  }
}

const resta=() =>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2")
  .value);
  let rest = n1-n2;
  document.querySelector("#res")
  if (isNaN(rest)) {
    res.innerHTML="<h1>"+0+"</h1>"
  }else{
    res.innerHTML="<h1>"+rest+"</h1>"
  }
}

const multiplication=() =>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2")
  .value);
  let mul = n1*n2;
  
  
  document.querySelector("#res")
  if (isNaN(mul)) {
    res.innerHTML="<h1>"+0+"</h1>"
  }else{
    res.innerHTML="<h1>"+mul+"</h1>"
  }
}

const division=() =>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2")
  .value);
  let div = n1/n2;
  document.querySelector("#res")
  if (isNaN(div)) {
    res.innerHTML="<h1>"+0+"</h1>"
  }else{
    res.innerHTML="<h1>"+div+"</h1>"
  }
  
}

const porcentaje=() =>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2")
  .value);
  let por = n1%n2;
  document.querySelector("#res")
  if (isNaN(por)) {
    res.innerHTML="<h1>"+0+"</h1>"
  }else{
    res.innerHTML="<h1>"+por+"</h1>"
  }
}


const potencia=() =>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2")
  .value);
  let poten = Math.pow(n1,n2);
  document.querySelector("#res")
  if (isNaN(poten)) {
    res.innerHTML="<h1>"+0+"</h1>"
  }else{
    res.innerHTML="<h1>"+poten+"</h1>"
  }
}

  const borrar=()=>{
document.querySelector("#num1").value=""
document.querySelector("#num2").value=""

  document.querySelector("#res").innerHTML=``;
  

  }

  
  
