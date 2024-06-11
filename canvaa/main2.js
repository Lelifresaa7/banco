
var c = document.getElementById("micanvas");
var cxt = c.getContext("2d");

cxt.font = "40px Calibri, Georgia";
cxt.fillText("", 50, 50);

cxt.font = "40px Book Antiqua, Sans-serif";
cxt.strokeText("", 50, 100);

const ALTURA_CANVAS = 200;
const ANCHURA_CANVAS = 400;






const canvas = document.querySelector("#canvas");
canvas.width = ANCHURA_CANVAS;
canvas.height = ALTURA_CANVAS;
const contexto = canvas.getContext("2d");
contexto.lineWidth = 5;
contexto.strokeStyle = "#212121";
contexto.fillStyle = "#C2185B";
contexto.beginPath();
contexto.moveTo(55, 5);
contexto.lineTo(105, 55);
contexto.lineTo(55, 105);
contexto.lineTo(5, 55);
contexto.closePath();
contexto.stroke();
contexto.fill();



const canvas1 = document.querySelector("#canvas1");
canvas1.width = ANCHURA_CANVAS;
canvas1.height = ALTURA_CANVAS;
const contexto1 = canvas1.getContext("2d");
contexto1.lineWidth = 5;
contexto1.strokeStyle = "#212121";
contexto1.fillStyle = "#C2185B";
contexto1.beginPath();
contexto1.rect(50, 50, 100, 50);
contexto1.closePath();
contexto1.stroke();
contexto1.fill();


const canvas2 = document.querySelector("#canvas2");
canvas2.width = ANCHURA_CANVAS;
canvas2.height = ALTURA_CANVAS;
const contexto2 = canvas2.getContext("2d");
contexto2.lineWidth = 5;
contexto2.strokeStyle = "#212121";
contexto2.fillStyle = "#C2185B";
contexto2.beginPath();
contexto2.moveTo(100, 50);
contexto2.lineTo(150, 150);
contexto2.lineTo(50, 150);
contexto2.closePath();
contexto2.stroke();
contexto2.fill();


const canvas3 = document.querySelector("#canvas3");
canvas3.width = ANCHURA_CANVAS;
canvas3.height = ALTURA_CANVAS;
const contexto3 = canvas3.getContext("2d");
contexto3.lineWidth = 5;
contexto3.strokeStyle = "#212121";
contexto3.fillStyle = "#C2185B";
contexto3.beginPath();
contexto3.moveTo(50, 50);
contexto3.lineTo(150, 50);
contexto3.lineTo(150, 150);
contexto3.lineTo(50, 150);
contexto3.closePath();
contexto3.stroke();
contexto3.fill();





const canvas4 = document.querySelector("#canvas4");
canvas4.width = ANCHURA_CANVAS;
canvas4.height = ALTURA_CANVAS;
const contexto4 = canvas4.getContext("2d");
contexto4.lineWidth = 5;
contexto4.strokeStyle = "#212121";
contexto4.fillStyle = "#C2185B";
contexto4.beginPath();
contexto4.moveTo(100, 50);
contexto4.lineTo(140, 90);
contexto4.lineTo(120, 140);
contexto4.lineTo(80, 140);
contexto4.lineTo(60, 90);
contexto4.closePath();
contexto4.stroke();
contexto4.fill();




const canvas5 = document.querySelector("#canvas5");
canvas5.width = ANCHURA_CANVAS;
canvas5.height = ALTURA_CANVAS;
const contexto5 = canvas5.getContext("2d");
contexto5.lineWidth = 5;
contexto5.strokeStyle = "#212121";
contexto5.fillStyle = "#C2185B";
contexto5.beginPath();
contexto5.moveTo(200, 50);
contexto5.lineTo(250, 100);
contexto5.lineTo(200, 150);
contexto5.lineTo(150, 100);
contexto5.closePath();
contexto5.stroke();
contexto5.fill();




const canvas6 = document.querySelector("#canvas6");
canvas6.width = ANCHURA_CANVAS;
canvas6.height = ALTURA_CANVAS;
const contexto6 = canvas6.getContext("2d");
contexto6.lineWidth = 5;
contexto6.strokeStyle = "#212121";
contexto6.fillStyle = "#C2185B";

const x = 200;
const y = 100;
const size = 50;

contexto6.beginPath();
contexto6.moveTo(x, y - size); 

contexto6.lineTo(x - size * Math.sin(Math.PI / 3), y + size / 2); 



contexto6.lineTo(x + size * Math.sin(Math.PI / 3), y + size / 2); 


contexto6.closePath();
contexto6.stroke();
contexto6.fill();


contexto6.beginPath();
contexto6.moveTo(x, y + size); 
contexto6.lineTo(x - size * Math.sin(Math.PI / 3), y - size / 2); 
contexto6.lineTo(x + size * Math.sin(Math.PI / 3), y - size / 2); 
contexto6.closePath();
contexto6.stroke();
contexto6.fill();