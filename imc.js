let alt= document.querySelector("#alt");
let valt= document.querySelector("#valt");
let pes= document.querySelector("#pes");
let vpes= document.querySelector("#vpes");
let res=document.querySelector("#res");

 
  
 
  pes.oninput =()=>{
    vpes.innerHTML=pes.value +" kg";
    let k = parseInt(pes.value);
    let n=parseInt(alt.value);
    valt.innerHTML=n +"cm";
    let n1 =n/100;
    
    let imc=parseFloat=k/(n1*n1);
res.innerHTML="<img src='/246749aa1d9d2f9189c4b2007ee65da2.gif' width=60 height=60>";
  setTimeout(()=>{
    res.innerHTML=imc.toFixed(2)+" Kg/m^2";
      spinner.innerHTML="";
},1000);
    if (imc<18.5) {
      p1.style.transform="scale(1.2)";
      
      
    } else{
      p1.style.transform="scale(1)";
    }
    if (imc>=18.5 && imc<=24.9){
      p2.style.transform="scale(1.2)";
    } else{
     p2.style.transform="scale(1)";
    
    }
    if (imc>=25 && imc<=29.9) {
      p3.style.transform="scale(1.2)";
    } else{
      p3.style.transform="scale(1)";
    }
    if (imc>=30 && imc<=34.9){
      p4.style.transform="scale(1.2)";
    } else{
      p4.style.transform="scale(1)";
    }
        if (imc>=40){
      p6.style.transform="scale(1.2)";
        } else{
      p6.style.transform="scale(1)";
    }
    
    
  
  }
  
  alt.oninput =()=>{
  
    let k = parseInt(pes.value);
    let n=parseInt(alt.value);
    valt.innerHTML=n +"cm";
    let n1 =n/100;
    
    let imc=parseFloat=k/(n1*n1);
res.innerHTML="<img src='/246749aa1d9d2f9189c4b2007ee65da2.gif' width=60>";
  setTimeout(()=>{
    res.innerHTML=imc.toFixed(1)+" Kg/m^2";
      spinner.innerHTML="";
},1000);
    if (imc<18.5) {
      p1.style.transform="scale(1.2)";
      
    } else{
      p1.style.transform="scale(1)";
    }
    if (imc>=18.5 && imc<=24.9){
      p2.style.transform="scale(1.2)";
    } else{
     p2.style.transform="scale(1)";
    
    }
    if (imc>=25 && imc<=29.9) {
      p3.style.transform="scale(1.2)";
    } else{
      p3.style.transform="scale(1)";
    }
    if (imc>=30 && imc<=34.9){
      p4.style.transform="scale(1.2)";
    } else{
      p4.style.transform="scale(1)";
    }
    if (imc>=35 && imc<=39.9){
      p5.style.transform="scale(1.2)";
    } else{
      p5.style.transform="scale(1)";
    }
        if (imc>=40){
      p6.style.transform="scale(1.2)";
        } else{
      p6.style.transform="scale(1)";
    }
    
    
  }