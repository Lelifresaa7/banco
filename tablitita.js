const co =()=>{
    
    var filas =parseInt(document.querySelector("#filas").value);
    
        
        var columnas =parseInt(document.querySelector("#columnas").value);
        
        
        
        
        
        
        
        let tabla = "<table>";
        
        for (let n = 0; n < filas; n++) {
            tabla += "<tr>";
            
            for ( i = 0; i < columnas; i++) {
                tabla += "<td>";
              
            }
            tabla += "</tr>";
        }
        tabla += "</table>";




        


        document.getElementById("resultado3").innerHTML = tabla;
    }




    document.getElementById("filas").addEventListener("input", function() {
        document.getElementById("resultado1").textContent = this.value;
        co();
    });

    document.getElementById("columnas").addEventListener("input", function() {
        document.getElementById("resultado2").textContent = this.value;
        co();
    });