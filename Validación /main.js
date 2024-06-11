let form = document.getElementById("form");

let username = document.getElementById("username");

let email = document.getElementById("email");
let password = document.getElementById("password");
let psw = document.getElementById("psw");
let btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});
const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = msg;
  box.classList.add("error");
  box.classList.remove("success");
};
const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("success");
  box.classList.remove("error");
};
const mailFormat = (e) => {
  const re = /\w+@\w+.\w+/;
  return re.test(String(e).toLowerCase());
};
const passFormat = (p) => {
    const re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    return re.test(p);
}
const userFormat = (u) => {
    const re = /[^0-9]/;
    return re.test(u);
}

function validation() {
  let user = username.value.trim();
  let mail = email.value.trim();
  let pass1 = password.value.trim();
  let pass2 = psw.value.trim();

  localStorage.setItem("Username", user);
  localStorage.setItem("Email", mail);
  localStorage.setItem("Password", pass1);
  localStorage.setItem("Cpassword", pass2);

  if (user === "") {
    setError(username, "Necesitas ingresar usario ohs");
  } else if (!userFormat(user)) {
    setError(username, "Usuario invalido");
  } else {
    setSuccess(username);
  }
  if (mail === "") {
    setError(email, "Necesitas un correo");
  } else if (!mailFormat(mail)) {
    setError(email, "Tu correo es invalido");
  } else {
    setSuccess(email);
  }
  if (pass1 === "") {
    setError(password, "Requieres de una contraseña");
  } else if (!passFormat(pass1)) {
    setError(password, "La contraseña debe tener minimo 8 caracteres, un número y una letra mayor ");
  } else {
    setSuccess(password);
  }
  if (pass2 === "") {
    setError(psw, "Confirma tu contraseña ");
  } else if (pass2 != pass1) {
    setError(psw, "Tu contraseña no es la misma");
  } else {
    setSuccess(psw);
  }
}




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


var password2 = document.getElementById("psw");



function validarCont2(pass) {
  
    var Regex = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    
    return Regex.test(pass.trim());
}

password2.onkeydown = () => {
    let pa = password2.value;
    password2.style.boxShadow = "none";
    if (validarCont2(pa)) {
     password2.style.boxShadow = "15px 0 30px lightgreen";
    } else {
        password2.style.boxShadow = "15px 0 30px crimson";
        
    }
};




var correo = document.getElementById("email");

function validarCorreo(usua) {

  

      var Regex = /\w+@\w+.\w+/;
    return Regex.test(usua.trim());
}

correo.onkeydown = () => {
    let u = correo.value;
    email.style.boxShadow = "none";
    if (validarCorreo(u) ) {
     email.style.boxShadow = "15px 0 30px lightgreen";
    } else {
        email.style.boxShadow = "15px 0 30px crimson";
        
    }
};
