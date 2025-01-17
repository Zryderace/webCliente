window.onload = function(){

    window.addElement = addElement
    window.addRow = addRow
    window.writeName = writeName
    window.borrar = borrar
    window.borrarLi = borrarLi
    window.eliminarFila = eliminarFila
    window.reemplazarFila = reemplazarFila
    window.sacar1erParrafo = sacar1erParrafo
    var i = 1

    var append = document.createElement("p")
    append.textContent = "Esto no estaba antes"
    append.setAttribute("align","center")

    // var capa = document.getElementById("capa")
    // capa.appendChild(append)

    document.body.appendChild(append)

    function addElement() {
        let li = document.createElement("li")
        li.textContent = "another one"
        let ul = document.getElementById("ul")
        ul.appendChild(li)
    }

    function addRow(){
        
        let table = document.getElementById("table")
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td1.textContent = `Producto ${i}`
        tr.appendChild(td1)
        td2.textContent = `Precio ${i*100}`
        tr.appendChild(td2)
        table.appendChild(tr)
        i++
    }

    function writeName() {
        let currentUrl = window.location.href
        let url = new URL(currentUrl)

        let params = new URLSearchParams(url.search)

        let name1 = params.get("name1")

        let form = document.getElementById("form")
        let enviar = document.getElementById("enviar")
        let input = document.createElement("input")
        input.setAttribute("type","text")
        input.setAttribute("name",`${name1}`)
        input.setAttribute("id",`${name1}`)

        // form.appendChild(input)
        let br = document.createElement("br")

        form.insertBefore(br,enviar)
        form.insertBefore(input,enviar)
    }

    function borrar() {
        let p = document.getElementById("borrar")
        p.remove()
        setTimeout(restaurar,2000)
    }

    function restaurar(){
        let div = document.getElementById("borrado")
        let p = document.createElement("p")
        p.textContent = "Borrar esto"
        p.setAttribute("id","borrar")
        div.appendChild(p)
    }

    function borrarLi(boton){
        let lis = document.querySelectorAll("ul#lista > li")
        if (lis.length>0) {
            let ultimo = lis.length-1
            //una linea
            // lis[ultimo].remove()

            //3 lineas
            let child = lis[ultimo]
            let padre = child.parentNode
            padre.removeChild(child)
            if (lis.length-1==0) {
                boton.disabled = true
            }
        }
    }

    function eliminarFila(){
        let elemento = document.querySelector("tr+tr")
        elemento.remove()
        // if (lis.length>0) {
        //     let ultimo = lis.length-1
        //     lis[ultimo].remove()
        //     if (lis.length-1==0) {
        //         boton.disabled = true
        //     }
        // }
    }

    function reemplazarFila(){
        let cambio = document.getElementById("cambio")
        let li = document.createElement("li")
        li.textContent = "Otra tarea"

        let lis = document.querySelectorAll("ul#cambio>li")
        let ultimo = lis [lis.length-1]

        cambio.replaceChild(li,ultimo)
    }

    function sacar1erParrafo(){
        let container = document.getElementById("container")
        //primer hijo
        //siguiente hijo
        console.log(container.firstElementChild.textContent)
        console.log(container.firstElementChild.nextElementSibling.textContent)
        console.log(container.lastElementChild.textContent)
        console.log(container.lastElementChild.previousElementSibling.textContent)
        console.log(container.children.length)
        console.log(container.childNodes.length)
        console.log(container.childNodes[0])
    }

}