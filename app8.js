var spinner=document.querySelector("#spinner");
document.querySelector("#btnver").onclick=()=>{
  spinner.innerHTML="<img src='R.gif'>";
  setTimeout(()=>{
    spinner.innerHTML="<h1>Holaaa!!</h1>";
  },2000);
    
} 

 