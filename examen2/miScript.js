window.onload = function () {

    //EJERCICIO 1

    window.actualizar = actualizar;
    window.cambiarColor = cambiarColor;
    // // window.ponerEstilo1 = ponerEstilo1;
    window.cambiarEstilo = cambiarEstilo;
    window.cambiarColorcito = cambiarColorcito;
    window.cambiarEstado = cambiarEstado;
    window.siguiente = siguiente;
    window.anterior = anterior;

    //elige todos los a, los recorre y cambia lo que tengan dentro y le pone otra cosa deaseada

    function actualizar() {

        let enlaces = document.querySelectorAll(`a`);

        enlaces.forEach(element => {
            let atributo = element.getAttribute(`href`);
            atributo = `${atributo}.html`
            console.log(atributo)

        });
    }

    //elige el elemento al que esta aplicado y le cambia el bgColor y el Color

    function cambiarColor(element) {
        let bgColor = element.style.backgroundColor
        // let color = element.style.color

        if (bgColor == "") {
            element.style.backgroundColor = `white`
        }

        if (bgColor == `white`) {
            element.style.backgroundColor = `yellow`
            element.style.color = `red`
        } else {
            element.style.backgroundColor = `white`
            element.style.color = `black`
        }
    }

    //EJERCICIO 2

    //selecciona el primer parrafo y le aplica un estilo u otro, si sigue siendo class parrafo cambia a estilo1

    function cambiarEstilo() {
        let clase = document.querySelector(`p`)

        if (clase.getAttribute(`class`) == `parrafo`) {
            clase.setAttribute(`class`, `estilo1`)
        }

        if (clase.getAttribute(`class`) == `estilo1`) {
            clase.setAttribute(`class`, `estilo2`)
        } else {
            clase.setAttribute(`class`, `estilo1`)
        }
    }

    //elige el primer p, selecciona su estilo y compara para ver si cambia a otro color
    
    function cambiarColorcito() {
        let clase = document.querySelector(`p`)
        let style = window.getComputedStyle(clase)

        if (style.color == `rgb(0, 0, 255)`) {
            clase.style.color = `rgb(255, 0, 0)`
        } else if (style.color == `rgb(255, 255, 255)`) {
            clase.style.color = `rgb(0, 255, 0)`
        }
    }

    //EJERCICIO 3

    //selecciona el elemento deseado, y recorre el array, cuando su texto coincida con alguno, se pasa al siguiente
    //si es el ultimo, vuelve al primero

    function cambiarEstado(element) {
        let textos = ["marcado", "pendiente", "completado"]
        // console.log(element.innerHTML)

        for (let i = 0; i < textos.length; i++) {

            if (element.innerHTML == textos[i]) {
                if (i == textos.length - 1) {
                    element.innerHTML = textos[0]
                    break;
                } else {
                    element.innerHTML = textos[i + 1]
                    break;
                }
            }

        }
    }

    //EJERCICIO 4

    //selecciona todas las imagenes y comprueba cual es block
    //cuando la encuentra, la cambia a none, y la de la siguiente posicion se pone en block
    //si el la ultima imagen, la primera es la que se pone en block

    function siguiente() {
        let imagenes = document.querySelectorAll(`img`)
        
        for (let i = 0; i < imagenes.length; i++) {
            if (imagenes[i].style.display==`block`) {
                if (i == imagenes.length-1) {
                    imagenes[i].style.display = `none`
                    imagenes[0].style.display = `block`
                    break;
                } else {
                    imagenes[i].style.display = `none`
                    imagenes[i+1].style.display = `block`
                    break;
                }
            }
            
        }

    }

    //selecciona todas las imagenes y comprueba cual es block
    //cuando la encuentra, la cambia a none, y la de la anterior posicion se pone en block
    //si el la ultima primera, la ultima es la que se pone en block


    function anterior(){
        let imagenes = document.querySelectorAll(`img`)
        
        for (let i = 0; i < imagenes.length; i++) {
            if (imagenes[i].style.display==`block`) {
                if (i == 0) {
                    imagenes[i].style.display = `none`
                    imagenes[imagenes.length-1].style.display = `block`
                    break;
                } else {
                    imagenes[i].style.display = `none`
                    imagenes[i-1].style.display = `block`
                    break;
                }
            }
            
        }
    }


}


