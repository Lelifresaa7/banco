var password = document.getElementById("cont");

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
var usuario= document.getElementById("usu");


function validarUsu(usua) {
  
      var Regex =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,50})+$/;
    return Regex.test(usua.trim());
}

usuario.onkeydown = () => {
    let u = usuario.value;
    usu.style.boxShadow = "none";
    if (validarUsu(u) ) {
     usu.style.boxShadow = "15px 0 30px lightgreen";
    } else {
        usu.style.boxShadow = "15px 0 30px crimson";
        
    }
};
