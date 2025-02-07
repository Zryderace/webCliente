window.onload = function(){
    //let id = setInterval (funcion, ms, argumentos)
    // clearInterval(id)
    function mensaje(){
        console.log("hola")
    }

    const id = setInterval(mensaje,1000);
    function alternarTexto(td){
        let textoActual = td.textContent;
    }

    var parrafoCuenta = document.getElementById("contador");
    var contador = 0;

    function incrementarContador(){
        contador++;
        parrafoCuenta.textContent = contador;
    }

    let idCuenta = setInterval(incrementarContador, 1000);

    window.controlarCuenta = controlarCuenta;
    function controlarCuenta(){
        let boton = document.getElementById("boton");
        if(boton.textContent=="Pausar"){
            boton.textContent = "Reanudar";
            clearInterval(idCuenta);
        } else{
            boton.textContent = "Pausar";
            idCuenta = setInterval(incrementarContador, 1000);
        }
    }

    function addClass() {
        let element = document.getElementById("myElement");
        let currentClass = element.getAttribute("class");
        element.setAttribute("class", currentClass + " newClass");
    }

}