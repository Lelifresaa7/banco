document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login");

  loginButton.onclick = (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    const storedUsername = localStorage.getItem("Username");
    const storedPassword = localStorage.getItem("Password");

    if (usernameInput === "" || passwordInput === "") {
      Swal.fire("Campos vacios");
    } else {
      if (usernameInput === storedUsername && passwordInput === storedPassword) {
        Swal.fire(`Bienvenido ${usernameInput}`);
      } else {
        Swal.fire("Usuario no encontrado/registrado");
      }
    }
  };
});

var usuario= document.getElementById("username");




function validarUsu(usua) {
  
      var Regex = /[^0-9]/;
    return Regex.test(usua.trim());
}

usuario.onkeydown = () => {
    let u = usuario.value;
    username.style.boxShadow = "none";
    if (validarUsu(u) ) {
     username.style.boxShadow = "15px 0 30px lightgreen";
    } else {
        username.style.boxShadow = "15px 0 30px crimson";
        
    }
};




var password1 = document.getElementById("password");



function validarCont(pass) {
  
    var Regex = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    
    return Regex.test(pass.trim());
}

password1.onkeydown = () => {
    let pa = password1.value;
    password1.style.boxShadow = "none";
    if (validarCont(pa)) {
     password1.style.boxShadow = "15px 0 30px lightgreen";
    } else {
        password1.style.boxShadow = "15px 0 30px crimson";
        
    }
};


