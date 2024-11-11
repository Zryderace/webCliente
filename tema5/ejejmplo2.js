window.onload = function() {
    window.cambiarTexto = cambiarTexto;
    window.copiarParrafo = copiarParrafo;
    window.cambiarClase = cambiarClase;
    function cambiarTexto(){
        let parrafo = document.getElementById("parrafo");

        parrafo.innerHTML = "<i>parrafo cambiado</i>";
    }

    function copiarParrafo(){
        let parrafoOrigen = document.getElementById("parrafoOrigen")
        let parrafoDestino = document.getElementById("parrafoDestino")

        parrafoDestino.innerHTML = parrafoOrigen.innerHTML;
    }

    function cambiarClase() {
        let estiloSecundario = document.getElementById("secundario");
        let estiloOriginal = document.getElementById("original");
        estiloSecundario.className = estiloOriginal.className;
    }
    
}
