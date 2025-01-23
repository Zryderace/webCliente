window.onload = function(){

    window.cambiar = cambiar
    var colores = ["black","red","blue","white"]

    function cambiar(celda) {
        // console.log(celda.style.backgroundColor)
        if (celda.style.backgroundColor=="") {
            celda.style.backgroundColor = "black"
        } else {
            let color = celda.style.backgroundColor
            if (colores.indexOf(color)==colores.length-1) {
                celda.style.backgroundColor = colores[0]
            } else {
                celda.style.backgroundColor = colores[colores.indexOf(color)+1]
            }
            
        }
    }


}