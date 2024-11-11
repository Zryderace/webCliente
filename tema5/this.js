window.onload = function(){
    window.cambiar = cambiar;
    window.ej11 = ej11;
    window.ej2 = ej2;

    function cambiar(parrafo){
        let clase = document.getElementsByClassName(`parrafo`);
        for (let i = 0; i < clase.length; i++) {
            clase[i].textContent = parrafo.textContent;
        }
    }
    
}