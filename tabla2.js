function co() {
    var filas = document.getElementById("filas").value;
    var columnas = parseInt(document.getElementById("columnas").value);
    var par = document.getElementById("par").value;
    var impar = document.getElementById("impar").value;
    var tabla = "<table>";

    for (var i = 0; i < filas; i++) {
        var colorFila = (i % 2 === 0) ? par : impar;
        tabla += "<tr style='background-color:" + colorFila + "'>";
        for (var j = 0; j < columnas; j++) {
            tabla += "<td></td>";
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

document.getElementById("par").addEventListener("input", function() {
    co();
});

document.getElementById("impar").addEventListener("input", function() {
    co();
});