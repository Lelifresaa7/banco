const me=()=>{
  
    var rojo = document.getElementById("rojo").value;
    var verde = document.getElementById("verde").value;
    var azul = document.getElementById("azul").value;
    
    var resultado5=document.querySelector("#resultado5")
    
    document.getElementById("resultado4").innerText = "("+rojo+","+verde+","+azul+")" ;
    

    resultado6.style.backgroundColor="rgb(" + rojo + "," + verde + "," + azul + ")";
  
  const cexa=(resultado4)=>{
    let res=(resultado4>16)?resultado4.toString(16).toUpperCase():"0"+resultado4.toString(16).toUpperCase();
    return res;

  } 
  
  setTimeout(()=>{

    resultado5.innerHTML="#"+cexa(rojo)+cexa(verde)+cexa(azul)
        
s2.innerHTML=""
    
  },500);


        }







            
  
  document.getElementById("rojo").addEventListener("input", function() {
      document.getElementById("resultado1").textContent = this.value;
      me();
  });
  
  
  
  document.getElementById("verde").addEventListener("input", function() {
      document.getElementById("resultado2").textContent = this.value;
      me();
  });
  
  document.getElementById("azul").addEventListener("input", function() {
      document.getElementById("resultado3"
      ).textContent = this.value;
      me();
  });
  
  