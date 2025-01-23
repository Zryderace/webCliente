window.onload = function(){

    window.cambiar = cambiar

    function cambiar() {
        let clase = document.getElementsByTagName("p")[0]
        if (clase.className == "uno") {
            clase.className = "dos"
        } else {
            clase.className = "uno"
        }
    }

}