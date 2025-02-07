window.onload = function(){

    /**
     * prompt usuario filas y columnas
     * enteros 0 > N <= 10
     * en bucle
     * clase tabla
     * se añade a #solucion
     * horizontal fila con su numero
     * si se clica en la celda, se cambia el numero por una imagen
     * con un prompt para introducir nombre
     * "" == JS
     * 
     * 
     * 
     * 
     */

    window.generarTabla = generarTabla
    window.clickCelda = clickCelda
    var filas = 0
    var columnas = 0
    var nombreImagenes = ["JS","HTML","CSS", "PHP", "Python"]

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
                td.setAttribute("onclick","clickCelda(this)")
                tr.appendChild(td)
            }
            tabla.appendChild(tr)
        }

        objetivo.appendChild(tabla)

        filas = 0
        columnas = 0
    }

    function clickCelda(celda) {
        let input = prompt("introduce nombre imagen (sin.png)")
        if (input=="") {
            let imagen = document.createElement("img")
            let completo = "JS.png"
            imagen.setAttribute("src",completo)
            celda.textContent=""
            celda.appendChild(imagen)
        } else {
            nombreImagenes.forEach(nombreImagen => {
            if (input==nombreImagen) {
                let imagen = document.createElement("img")
                let completo = input + ".png"
                imagen.setAttribute("src",completo)
                celda.textContent=""
                celda.appendChild(imagen)
            }
        })
        }
        
    }


}