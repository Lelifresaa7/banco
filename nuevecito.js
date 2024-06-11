var password=document.getElementById("cont");

function validarCont(pass) {
  
    var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    
    return Regex.test(pass.trim());
}

password.onkeydown = () => {
    let pa = password.value;
    password.style.boxShadow = "none";
    if (validarCont(pa)) {
     password.style.boxShadow = "15px 0 30px lightgreen";
    } else {
        password.style.boxShadow = "15px 0 30px crimson";
        
    }
};
var usuario1=document.getElementById("usuario");















function validarUsu(usua) {
  
      var Regex =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,50})+$/;
    return Regex.test(usua.trim());
}

usuario1.onkeydown = () => {
    let u = usuario1.value;
    usuario.style.boxShadow = "none";
    if (validarUsu(u) ) {
     usuario.style.boxShadow = "15px 0 30px lightgreen";
    } else {
        usuario.style.boxShadow = "15px 0 30px crimson";
        
    }
};