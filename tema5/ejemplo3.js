window.onload = function () {
    window.cambiarColor = cambiarColor;
    window.consolePadding = consolePadding;
    window.izquierda = izquierda;
    window.derecha = derecha;


    function cambiarColor(element) {
        let color = element.style.backgroundColor;
        if (color == "") {
            element.style.backgroundColor = "black";
            return;
        }
        let colores = ["black", "white", "green", "red", "blue"];

        for (let i = 0; i < colores.length; i++) {
            if (colores[colores.length - 1] == color) {
                element.style.backgroundColor = colores[0];
                break;
            }
            if (colores[i] == color) {
                element.style.backgroundColor = colores[i + 1];
                break;
            }
        }
    }

    function consolePadding(element) {
        // console.log(element.style.backgroundColor);
        var
            style = window.getComputedStyle(element),
            top = style.getPropertyValue('background-color');
            if (top=='rgb(255, 0, 0)') {
                //red a blue
                element.style.backgroundColor = 'blue';
            } else {
                element.style.backgroundColor = 'red';
            }
        console.log(top);
        top = style.getPropertyValue('margin');
        console.log(top);
    }

    function derecha(){

    }

    function izquierda(){
        let img = document.getElementById("hola");
        var style = window.getComputedStyle(img);
        let izquierda = parseInt(style.getPropertyValue("left"));
        // console.log(izquierda);
        // console.log(screen.width);
        // console.log(img.getBoundingClientRect().right)
        console.log(img.width);
        if (img.getBoundingClientRect().right+5 < screen.width) {
            img.style.left = `${izquierda+5}px`;
        }
        
    }


}