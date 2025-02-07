window.onload = function(){

    function cambiaColor(evento) {
        // this.className = "rojo"
        let elemento = evento.target
        elemento.className = "rojo"
    }
    function cambiaColorBack() {
        this.className = "azul"
    }

    document.getElementById("parrafo").onmouseover = cambiaColor
    document.getElementById("parrafo").onmouseout = cambiaColorBack

    var lista = document.querySelectorAll("li")

    for (let i = 0; i < lista.length; i++) {
        lista[i].onmouseover = cambiaColor
        lista[i].onmouseout = cambiaColorBack
    }

    lista = document.getElementsByTagName("td")

    for (let i = 0; i < lista.length; i++) {
        lista[i].ondblclick = cambiaColor
    }

    var filas = 0
    var columnas = 0
    var nombreImagenes = ["JS","HTML","CSS", "PHP", "Python"]

    document.getElementsByTagName("button")[0].onclick = generarTabla

    function generarTabla(){
        while(filas<=0||filas>10||isNaN(filas)){
            filas = parseInt(prompt("introduce filas >0 y <=10"))
        }
        while(columnas<=0||columnas>10||isNaN(columnas)){
            columnas = parseInt(prompt("introduce columnas >0 y <=10"))
        }
        //to do bien aqui

        let objetivo = document.getElementById("solucion")
        let tabla = document.createElement("table")
        tabla.setAttribute("class", "tabla")

        for (let i = 0; i < filas; i++) {
            //meter esto +1 en txt
            //se crea tr
            let tr = document.createElement("tr")
            for (let j = 0; j < columnas; j++) {
                //se crea cada nodo
                //a cada uno un onclick
                let td = document.createElement("td")
                td.textContent = i+1
                // td.setAttribute("onclick","clickCelda(this)")
                td.onclick = clickCelda
                tr.appendChild(td)
            }
            tabla.appendChild(tr)
        }

        objetivo.appendChild(tabla)

        filas = 0
        columnas = 0
    }

    function clickCelda() {
        let input = prompt("introduce nombre imagen (sin.png)")
        if (input=="") {
            let imagen = document.createElement("img")
            let completo = "../examen3/Practica3/Ejercicio3/JS.png"
            imagen.setAttribute("src",completo)
            this.textContent=""
            this.appendChild(imagen)
        } else {
            nombreImagenes.forEach(nombreImagen => {
            if (input==nombreImagen) {
                let imagen = document.createElement("img")
                let completo = "../examen3/Practica3/Ejercicio3/" + input + ".png"
                imagen.setAttribute("src",completo)
                this.textContent=""
                this.appendChild(imagen)
            }
        })
        }
        
    }










}