window.onload = function(){
    let parrafos = document.getElementsByTagName(`p`);

    for (let i = 0; i < parrafos.length; i++) {
        console.log(parrafos[i].textContent);
        
    }

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].textContent = `Este es el parrafo numero ${i+1}`;
    }

    function mostrarNombre(){
        let input = document.getElementsByName(`usuario`);
        let titulo = document.getElementsByName(`titulito`);
        console.log(input)

        let nombre = input[0].value;

        if (nombre.length==0) {
            console.log(`no has escrito nada`)
        } else {
            console.log(nombre);
            titulo[0].value = `mi nombre es ${nombre}`
        }
    }

    window.mostrarNombre = mostrarNombre;

    let enlaces = document.getElementsByClassName(`nav-link`)

    console.log(enlaces)

    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].style.backgroundColor = `lightblue`;   
    }

    let homeLink = document.getElementById(`home`);
    console.log(homeLink);

    homeLink.href = "otroSitio.html";
    console.log(homeLink);

    homeLink.textContent = `otra pagina`;

    let texto = document.querySelector(`div p`);

    texto.style.color = "red";
    texto.textContent = `hola mundo`

    texto = document.querySelectorAll(`div p`);

    for (let i = 0; i < texto.length; i++) {
        texto[i].style.color = "red";
        texto[i].textContent = `hola mundo ${i}`
    }
    
    function modificarTabla(){
        let tabla = document.getElementById(`tabla`);
        let ancho = tabla.width;
        let alto = tabla.height;

        console.log(ancho)
        console.log(alto)

        tabla.width = `500px`

        let parrafo = document.getElementById(`parrafo`)

        parrafo.align = `center`

        alto = tabla.getAttribute(`height`)

        console.log(alto);

        tabla.setAttribute(`height`, `700px`)

        console.log(alto);
    }

    window.modificarTabla = modificarTabla;

    


}



