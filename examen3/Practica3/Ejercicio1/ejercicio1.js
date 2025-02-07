window.onload = function(){
    //este tiene IDs
    //meter coinButton coinCount imageContainer CLASS indicator

    /**
     * al pulsar moneda se bloquea el boton
     * llenar 25+25+25+25 when max se desbloquea y suma 1 al contadormonedas
     * vuelve 0
     * repite
     * 
     * when monedas = 3
     * nodo img colocar en el ultimo article
     * desbloquear moneda
     */

    window.generarMoneda = generarMoneda

    function bloquearBoton(boton) {
        // let boton = document.getElementById("coinButton")
        boton.disabled = true
    }

    function desbloquearBoton(boton) {
        // let boton = document.getElementById("coinButton")
        boton.disabled = false
    }

    var intervalo
    var monedas = 0

    function generarMoneda(boton) {
        bloquearBoton(boton)
        let barra = document.getElementById("meter")
        // console.log(barra.value)

        intervalo = setInterval(aumentar,1000,barra,boton)
        
    }

    function aumentar(barra,boton){
        barra.value += 25
        console.log(barra.value)
        //para hacerlo mas visual se puede poner solo mayor pero
        //en html tiene un max de 100
        if (barra.value>=100) {
            clearInterval(intervalo)
            barra.value = 0
            desbloquearBoton(boton)
            conteoMonedas(monedas+=1)
        }
    }

    function conteoMonedas(monedas) {
        let indicador = document.getElementById("coinCount")
        indicador.textContent = monedas
        if (indicador.textContent>=3) {
            let article = document.getElementById("imageContainer")
            let nodo = document.createElement("img")
            nodo.setAttribute("src", "JS.png")
            article.appendChild(nodo)
        }
    }

}