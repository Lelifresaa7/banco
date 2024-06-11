btnVer=document.querySelector("#btnver");

btnBorrar=document.getElementById("btnborrar");

div=document.querySelector("#div");

btnVer.onclick=(){

let texto=document.getElementById("texto").value;

if (texto.endsWith("a")) {

div.innerHTML='<h1>${texto)</h1>

<h2>Longitud: ${parseInt(texto.length)}

<h2>minúsculas:${texto.toLowerCase()}</h2>

<h2>MAYÚSCULAS:${texto.toUpperCase()}</h2>

<h2>Cadena Limpia:${texto.trim())=>${parseInt(texto.trim().length)}

<h2>Primera Letra: ${texto.charAt(0)}</h2>

<h2>Última Letra: ${texto.charAt(texto.length-1)}</h2>

<h2>El texto termina con a </h2>";

}else{

div.innerHTML='<h1>${texto)</h1>

<h2>Longitud: ${parseInt(texto.length)}

<h2>minúsculas:S{texto.toLowerCase())</h2>

<h2>MAYÚSCULAS:S{texto.toUpperCase())</h2>

<h2>Cadena Limpia:${texto.trim()}=>${parseInt(texto.trim().length)}

<h2>Primera Letra: 5(texto.charAt(0)}</h2>

<h2>Última Letra:${texto.charAt(texto.length-1))</h2>

<h2>El texto no termnia con a </h2>';


}