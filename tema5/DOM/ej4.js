window.onload = function () {

    window.next = next
    window.back = back

    //inacabado

    function next() {
        let foto = document.getElementsByTagName("img")
        
        let enlace = foto[0].src
        let char = parseInt(enlace.charAt(enlace.length-5))
        switch (char) {
            case 1:
                foto[0].src = enlace.slice(0,-5) + "2" + enlace.slice(-4)
                let boton2 = document.getElementsByTagName("button")
                boton2[1].disabled = false
                break;
            
            case 4:
                let boton = document.getElementsByTagName("button")
                boton[0].disabled = true
        
            default:
                break;
        }
    }



}