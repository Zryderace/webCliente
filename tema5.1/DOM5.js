window.onload = function(){
    window.ej1 = ej1
    window.generar = generar

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

    
}