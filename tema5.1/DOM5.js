window.onload = function(){
    window.ej1 = ej1
    window.ej3 = ej3
    window.generar = generar
    window.cambiaClase = cambiaClase

    function ej1() {
        let userInput = prompt('Introduce algo para añadir:')
        userInput = userInput.trim()
        if (userInput.length!=0) {
            let lista = document.getElementById("lista")
            let li = document.createElement("li")
            li.textContent = userInput
            lista.appendChild(li)
        }
    }

    function generar(){
        let objetivo = document.querySelector("div#ej2 > br")
        let p = document.createElement("p")
        p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam voluptatem expedita. Fuga eligendi, ducimus itaque voluptatem, cumque quas ullam aliquam dolor magni delectus assumenda laudantium blanditiis amet. Cupiditate, amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae praesentium maxime! Minus quasi tempora temporibus accusamus exercitationem laudantium distinctio blanditiis repellendus iure sed officia optio, molestiae minima atque illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi. Illo exercitationem aliquam neque? Voluptatum, praesentium ullam iste repellendus quidem impedit eligendi, qui vel repudiandae excepturi tempora, veniam itaque minima?"
        p.setAttribute("class","parrafo2")
        objetivo.parentNode.insertBefore(p,objetivo)
    }

    function ej3() {
        let userInput = parseInt(prompt("Mete un numero entero positivo < 10"))
        console.log(userInput)
        let mensaje = ""
        if (isNaN(userInput)) {
            mensaje = "introduce un numero"
        } else if (userInput>10) {
            mensaje = "introduce un numero menor a 10"
        } else if (userInput<=0) {
            mensaje = "introduce un numero mayor a 0"
        }

        if (mensaje !== ""){
            alert(mensaje)
        } else {
            //crear tabla
            let objetivo = document.getElementById("ej3")
            let nodos = objetivo.children
            for (let i = 0; i < userInput; i++) {
                let tr = document.createElement("tr")
                //añadir a nodos[1] tr*3>td*3
                for (let j = 0; j < userInput; j++) {
                    let td = document.createElement("td")
                    td.textContent = `${i+1}`
                    //añadir a cada td clase para que cambie de color
                    //y onclick()
                    td.className = "clase1"
                    td.setAttribute("onclick","cambiaClase(this)")
                    tr.appendChild(td)
                }
                nodos[1].appendChild(tr)
            }
        }
    }

    function cambiaClase(element){
        let clase = element.className
        // console.log(clase)
        if (clase == "clase1") {
            element.className = "clase2"
        } else {
            element.className = "clase1"
        }
    }

    ej6()

    function ej6 (){
        let espacio = document.getElementById("ej6")
        let section = document.createElement("section")

        for (let i = 0; i < 2; i++) {
            crearArticle(section)
        }

        espacio.appendChild(section)

    }

    function crearArticle(section){
        let article = document.createElement("article")
        let h2 = document.createElement("h2")
        h2.textContent = "esto es el h2"
        let p = document.createElement("p")
        p.textContent = "esto es el p"
        let img = document.createElement("img")
        img.className = "imagen"
        let userInput = prompt('Introduce la ruta de la imagen para añadir:')

        if (typeof userInput == "string" && userInput != "") {
            img.src = `${userInput}`
        } else {
            //poner img alt en vacio
            img.alt = "nada introducido"
        }

        article.appendChild(h2)
        article.appendChild(p)
        article.appendChild(img)

        section.appendChild(article)

    }





}