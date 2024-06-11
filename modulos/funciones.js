export const suma= (a,b)=>(a+b);

export const restar= (a,b)=>(a-b);
export const division= (a,b)=>(a/b);

export const multiplicar= (a,b)=>(a*b);

export const residuo= (a,b)=>(a%b);

export const mayor= (a,b)=>(Math.max(a,b));

export const menor= (a,b)=>(Math.min(a,b));

export const par= (a,b)=> 
a % 2  == 0 && b%2 == 0? "Los dos son pares a y b":
a % 2 == 0 ? ` a es par : ${a}`:
b % 2 == 0 ? ` b es par: ${b}`:
"sin pares";



export const impar= (a,b)=> 
a % 2  !== 0 && b % 2 !== 0? "Los dos son impares":
a % 2 !== 0 ? `a es impar:${a}`:

b % 2 !== 0 ? `b es impar: ${b}`:
"Ninguno impar";
