   

        function act() {
            var mes = document.getElementById("mes").value;
            var daysInMonth = new Date(2024, mes, 0).getDate();
            document.getElementById("dia").max = daysInMonth;
            mostrarFecha();
        }
        
        
        
        

        function mostrarFecha() {
            var dia = document.getElementById("dia").value;
            var mes = document.getElementById("mes").value;
            var monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                              "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
            var fecha = dia + " de " + monthNames[mes - 1];
            document.getElementById("fecha").innerText = "Fecha: " + fecha;
            document.getElementById("dayLabel").innerText = dia;
            

            var imgSrc=obtenerImagen(dia,mes);
            document.getElementById("imagen").src=imgSrc;
            
        }
        



        function obtenerImagen(dia, mes) {
            var imgSrc = "";


            var signo = "";
            if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
                signo = "aries";
            } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
                signo = "tauro";
            } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
                signo = "geminis";
            } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
                signo = "cancer";
            } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
                signo = "leo";
            } else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 22)) {
                signo = "virgo";
            } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 23)) {
                signo = "libra";
            } else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
                signo = "escorpio";
            } else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
                signo = "sagitario";
            } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
                signo = "capricornio";
            } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
                signo = "acuario";
            } else if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
                signo = "piscis";
            }
            
            
            switch (signo) {
                case "aries":
                    imgSrc = "/aries.jpg";
                    break;
                case "tauro":
                    imgSrc = "/tauro.jpg";
                    break;
                case "geminis":
                    imgSrc = "/geminis.jpg";
                    break;
                case "cancer":
                    imgSrc = "/cancer.jpg";
                    break;
                case "leo":
                    imgSrc = "/leo.jpg";
                    break;
                case "virgo":
                    imgSrc = "/virgo.jpg";
                    break;
                case "libra":
                    imgSrc = "/libra.jpg";
                    break;
                case "escorpio":
                    imgSrc = "/escorpio.jpg";
                    break;
                case "sagitario":
                    imgSrc = "/sagitario.jpg";
                    break;
                case "capricornio":
                    imgSrc = "/capricornio.jpg";
                    break;
                case "acuario":
                    imgSrc = "/acuario.jpg";
                    break;
                case "piscis":
                    imgSrc = "/picis.jpg";
                    break;
            }
            return imgSrc;
        }
        
        
        
        
        
        
        act();
        mostrarFecha();