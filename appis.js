function calcularAciertos() {
  let eval=document.querySelector("#evaluar");
 
 var aci = 0;

        var correctas = document.querySelectorAll('input[type="radio"]:checked');
        correctas.forEach(function(r) {
          if (r.value === "1" || 
                r.value === "2" || 
                r.value === "3" || 
                r.value === "4" || 
                r.value === "5" || 
                r.value ==="6"||
                r.value === "7" || 
                r.value === "8" || 
                r.value === "9" || 
                r.value === "10") {
                aci++;
            }
          
        });
  
  swal.fire("aciertos"+aci);
  
  
}


