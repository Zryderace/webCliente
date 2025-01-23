window.onload = function (){

    window.valores = valores
    window.borde = borde
    window.align = align

    function valores(){
        let tabla = document.getElementsByTagName("table")
        alert(tabla[0].offsetWidth + " " + tabla[0].offsetHeight)
        let anchura = prompt("anchura")
        let altura = prompt("altura")
        tabla[0].style.width = anchura + "px"
        tabla[0].style.height = altura + "px"
    }

    function borde(){
        let tabla = document.getElementsByTagName("table")
        let border = parseInt(prompt("tipo borde"))
        if (Number.isInteger(border)) {
            tabla[0].border = border
        }
    }

    var espacio = 0;

    function align(){
        let tabla = document.getElementsByTagName("table")
        
        if (espacio==0) {
            tabla[0].style.marginLeft = "auto"
            tabla[0].style.marginRight = "auto"
            espacio++
        } else if (espacio==1) {
            tabla[0].style.marginRight = "0"
            espacio++
        } else {
            tabla[0].style.marginLeft =  "0"
            espacio = 0
        }
        
        
        
    }


}