var r= document.querySelector("#r");
var ra= document.querySelector("#va");
var v=document.querySelector("#v");
var vb= document.querySelector("#vb");
var a=document.querySelector("#a");
var vc=document.querySelector("#vc");
var col=document.querySelector("#col")
var rab=document.querySelector("#rgb")
var ex=document.querySelector("#exa")
var s1=document.querySelector("#s1")
var s2=document.querySelector("#s2")




r.oninput=()=> me();
v.oninput=()=> me();
a.oninput=()=> me();
col.onchange=()=> me();

const me=()=>{
  
    let cb=parseInt(r.value);
    ra.innerHTML=cb;
    let b=parseInt(v.value);
    vb.innerHTML=b;
    let c=parseInt(a.value);
    vc.innerHTML=c;
    rab.innerHTML="<img src='si.gif' height=30px width>"
    setTimeout(()=>{
  
        rab.innerHTML="("+cb+","+b+","+c+")"
          
  s1.innerHTML=""
      
    },500);
    

    col.style.backgroundColor="rgb("+cb+","+b+","+c+")";
const cexa=(rab)=>{
    let exaa=(rab>16)?rab.toString(16).toUpperCase():"0"+rab.toString(16).toUpperCase();
    return exaa;

  } 
  ex.innerHTML="<img src='si.gif' height=30px width>"
  setTimeout(()=>{

    ex.innerHTML="#"+cexa(cb)+cexa(b)+cexa(c)
        
s2.innerHTML=""
    
  },500);



}