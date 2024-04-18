const signo =()=>{
  var dia =parseInt(document.querySelector("#dia").value);
  var mes =document.querySelector("#mes").value;
  var img =document.querySelector("#img");
  var fecha =document.querySelector("#fecha");
  document.querySelector("#vdia").innerHTML=dia;
    fecha.innerHTML=dia + " de " + mes.toUpperCase();

  
  
  switch (mes) {
                case "noviembre":
                    imagen =(dia<=21)? "/escorpio.jpg": "/sagitario.jpg";
                    break;
                case "diciembre":
                    imagen =(dia<=21)? "/sagitario.jpg": "/capricornio.jpg";
                    break;
                case "enero":
                    imagen =(dia<=20)? "/capricornio.jpg": "/acuario.jpg";
                    break;
                case "febrero":
                    imagen =(dia<=19)? "/acuario.jpg": "/picis.jpg";
                    break;
                case "marzo":
                    imagen =(dia<=20)? "/picis.jpg": "/aries.jpg";
                    break;
                case "abril":
                    imagen =(dia<=20)? "/aries.jpg": "/tauro.jpg";
                    break;
                case "mayo":
                    imagen =(dia<=20)? "/tauro.jpg": "/geminis.jpg";
                    break;
                case "junio":
                    imagen =(dia<=20)? "/geminis.jpg": "/cancer.jpg";;
                    break;
                case "julio":
                    imagen =(dia<=20)? "/cancer.jpg": "/leo.jpg";
                    break;
                case "agosto":
                    imagen =(dia<=21)? "/leo.jpg": "/virgo.jpg";
                    break;
                case "septiembre":
                    imagen =(dia<=20)? "/virgo.jpg": "/libra.jpg";
                    break;
                case "octubre":
                    imagen =(dia<=20)? "/libra.jpg": "/escorpio.jpg";
                    break;
            }
            
            
            img.style.transform="rotateY(-180deg)";
            img.style.
            transition="all 0.5s linear";
            img.style.backfaceVisibility="hidden";
            
            setTimeout(()=>{
                img.style.transform="rotateY(0deg)";
            img.style.transition="all 0.5s linear";
            img.style.transitionStyle="perseve-3d";
            img.src=imagen;
            },200 )
            
            
        }
        signo();
  
  
  
  
