
var cargo=document.querySelector("#cargo");
var hrs=document.querySelector("#horas");
var anti=document.querySelector("#anti");
var an=document.querySelector("#an");
var h=document.querySelector("#h");
var cargo=document.querySelector("#cargo")
////
var sb=document.querySelector("#sb");
var isr=document.querySelector("#isr");
var cb=document.querySelector("#cb");
var ss=document.querySelector("#ss");
var antiguedad=document.querySelector("#antiguedad");
var puntu=document.querySelector("#puntu");
var sin=document.querySelector("#sin");
var efic=document.querySelector("#efic");
var af=document.querySelector("#af")
var totper=document.querySelector("#totper");
var totde=document.querySelector("#totde");
var sn=document.querySelector("#sn");

let car;

hrs.oninput =()=>{
   h.innerHTML=hrs.value;
   sueldo();
}
anti.oninput =()=>{
    an.innerHTML=anti.value;
    sueldo();
 }
 cargo.onchange =()=>{
    sueldo();
  }
 const sueldo = () =>{
   /* var ap=document.getElementById("ap").value;
    var am=document.getElementById("am").value;*/
   /* let secr=100;
    let ger=200;
    let caj=120;*/
   let hhhh=hrs.value;
   let aaaa=anti.value;
    let f=cargo.value;
    car=f;
    ///
    let sueldobase=0, canastabasica=0, annti=0 ,puntualidad=0, eficiencia=0, iisr=0, serviciosalud=0, afore=0,sindicato=0,
    tp=0,
    td=0, sueldoooo=0;
    //
    if (car==="Secretaria") {
    sueldobase=hhhh*100;
        sb.innerHTML=sueldobase;
       
        

        canastabasica=(sueldobase*0.05).toFixed(2);
        cb.innerHTML=canastabasica;
       
        
        annti=(aaaa*50).toFixed(2);
        antiguedad.innerHTML=annti;
        
    
        puntualidad=(sueldobase*0.03).toFixed(2);
        puntu.innerHTML=puntualidad;
       

        eficiencia=(0.015*sueldobase).toFixed(2);
        efic.innerHTML=eficiencia;
        
        iisr=(0.16*sueldobase).toFixed(2);
        isr.innerHTML=iisr;

        serviciosalud=(0.046*sueldobase).toFixed(2);
        ss.innerHTML=serviciosalud;

        afore=(0.02*sueldobase).toFixed(2);
        af.innerHTML=afore;

        sindicato=(0.01*sueldobase).toFixed(2);
        sin.innerHTML=sindicato;
        
        tp=parseFloat(sueldobase)+parseFloat(canastabasica)
        +parseFloat(annti)+parseFloat(puntualidad)
        +parseFloat(eficiencia);
         td=parseFloat(iisr)-parseFloat(serviciosalud)-parseFloat(afore)
         -parseFloat(sindicato);
sueldoooo=parseFloat(tp)-parseFloat(td);
        totper.innerHTML=tp;
        totde.innerHTML=td;
        sn.innerHTML=sueldoooo;

    } else  if(car==="Gerente"){
        sueldobase=hhhh*200;
        sb.innerHTML=sueldobase;
       
        

        canastabasica=(sueldobase*0.05).toFixed(2);
        cb.innerHTML=canastabasica;
       
        
        annti=(aaaa*50).toFixed(2);
        antiguedad.innerHTML=annti;
        
    
        puntualidad=(sueldobase*0.03).toFixed(2);
        puntu.innerHTML=puntualidad;
       

        eficiencia=(0.015*sueldobase).toFixed(2);
        efic.innerHTML=eficiencia;
        
        iisr=(0.16*sueldobase).toFixed(2);
        isr.innerHTML=iisr;

        serviciosalud=(0.046*sueldobase).toFixed(2);
        ss.innerHTML=serviciosalud;

        afore=(0.02*sueldobase).toFixed(2);
        af.innerHTML=afore;

        sindicato=(0.01*sueldobase).toFixed(2);
        sin.innerHTML=sindicato;
        
        tp=parseFloat(sueldobase)+parseFloat(canastabasica)
        +parseFloat(annti)+parseFloat(puntualidad)
        +parseFloat(eficiencia);
         td=parseFloat(iisr)-parseFloat(serviciosalud)-parseFloat(afore)
         -parseFloat(sindicato);
sueldoooo=parseFloat(tp)-parseFloat(td);
        totper.innerHTML=tp;
        totde.innerHTML=td;
        sn.innerHTML=sueldoooo;

    } else if (car==="Cajero"){
        sueldobase=hhhh*120;
        sb.innerHTML=sueldobase;
       
        

        canastabasica=(sueldobase*0.05).toFixed(2);
        cb.innerHTML=canastabasica;
       
        
        annti=(aaaa*50).toFixed(2);
        antiguedad.innerHTML=annti;
        
    
        puntualidad=(sueldobase*0.03).toFixed(2);
        puntu.innerHTML=puntualidad;
       

        eficiencia=(0.015*sueldobase).toFixed(2);
        efic.innerHTML=eficiencia;
        
        iisr=(0.16*sueldobase).toFixed(2);
        isr.innerHTML=iisr;

        serviciosalud=(0.046*sueldobase).toFixed(2);
        ss.innerHTML=serviciosalud;

        afore=(0.02*sueldobase).toFixed(2);
        af.innerHTML=afore;

        sindicato=(0.01*sueldobase).toFixed(2);
        sin.innerHTML=sindicato;
        
        tp=parseFloat(sueldobase)+parseFloat(canastabasica)
        +parseFloat(annti)+parseFloat(puntualidad)
        +parseFloat(eficiencia);
         td=parseFloat(iisr)-parseFloat(serviciosalud)-parseFloat(afore)
         -parseFloat(sindicato);
sueldoooo=parseFloat(tp)-parseFloat(td);
        totper.innerHTML=tp;
        totde.innerHTML=td;
        sn.innerHTML=sueldoooo;
    }else{
       

    }
  }