window.onload = function(){

    /**
     * añadir prompt con texto
     * otro prompt con
     * + al final
     * * primero
     * 1,2,3,4.... dicha posicion (-1)
     * ^^^ puede haber mas al añadir (array hijos)
     * 
     */

    window.ejercicio = ejercicio

    function ejercicio(){
        promps()
    }

    function promps() {
        let textoUsuario = prompt("cadena de texto a añadir:")
        let opcion = prompt(`
            +: se incluye al final
            *: se incluye el primero
            1,2,3,4... se incluye en la posicion seleccionada`)
        // console.log(textoUsuario,opcion)
        let array = document.getElementsByTagName("li")
        // console.log(array.length)
        // console.log((parseInt(opcion)))
        
        if (opcion == "+") {
            agregarFinal(textoUsuario)
        } else if (opcion == "*") {
            agregarPrimero(textoUsuario)
        } else if ((parseInt(opcion))<=array.length) {
            //.length entra, todo -1
            agregarPosicion(textoUsuario,parseInt(opcion))
        } else {
            console.log("no existe esa posicion")
        }
    }

    function agregarFinal(texto) {
        let nodo = document.createElement("li")
        let ol = document.getElementsByTagName("ol")[0]
        // let ultimo = ol.children.length+1
        //devuelve numero LI existentes
        // console.log(ultimo.children.length)
        nodo.textContent =  texto
        ol.appendChild(nodo)
    }

    function agregarPrimero(texto){
        let ol = document.getElementsByTagName("ol")[0]
        let nodo = document.createElement("li")
        ol.appendChild(nodo)

        //esto es un nodo
        let hijos = ol.children
        // hijos = hijos[0]
        // console.log(hijos.length)
        // console.log(hijos[4])


        //TODO tiene que haber una forma de pornerlo primro pero no la se
        //encontrar length de hijos
        for (let i = hijos.length-1; i > 0; i--) {
            // let antiguoTexto = hijos[i].textContent
            // let superiorTexto = hijos[i-1].textContent
            hijos[i].textContent = hijos[i-1].textContent
            //son punteros debo crear nuevos
            //solo tengo que cambiar el texto de uno a otro
            // ol.replaceChild(superior,antiguo)        
        }
        hijos[0].textContent = texto
    }

    function agregarPosicion(texto,posicion){
        let nodoNuevo = document.createElement("li")
        let lis = document.querySelectorAll("ol>li")
        let ol = document.getElementsByTagName("ol")[0]
        nodoNuevo.textContent = texto
        let antiguo = lis[posicion-1]
        ol.replaceChild(nodoNuevo,antiguo)
    }

}