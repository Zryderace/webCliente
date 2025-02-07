window.onload = function(){
    window.ej10 = ej10;
    window.ej11 = ej11;
    window.ej21 = ej21;
    window.ej22 = ej22;
    window.ej23 = ej23;
    window.ej31 = ej31;
    window.ej32 = ej32;
    window.ej41 = ej41;
    window.ej42 = ej42;

    function ej10(){
        //mostrar alert de la url y su texto
        let ej1 = document.getElementById("ej1");

        alert(`la url es ${ej1.getAttribute(`href`)} y el texto es ${ej1.textContent}`);
    }
    function ej11(){
        //cambia la url y el texto
        let ej1 = document.getElementById("ej1");

        ej1.setAttribute(`href`,`otro/link`)
        ej1.textContent = `cambio de texto`

        ej10();
    }

    function ej21(){
        //esto para INLINE
        let tabla = document.querySelector(`table`);
        //alert(`la altura es ${tabla.style.height} y el ancho es ${tabla.style.width}`);

        let style = window.getComputedStyle(tabla);
        alert(`la altura es ${style.height} y el ancho es ${style.width}`);

        let altura = prompt("nueva altura")
        let anchura = prompt("nueva anchura")
        tabla.style.height = altura
        tabla.style.width = anchura

    }

    function ej22(){
        let tabla = document.querySelector(`table`);
        let style = window.getComputedStyle(tabla);
        alert(`la borde es ${style.border}`);

        let ancho = prompt("nueva ancho")
        let tipoborde = prompt("nueva tipo")
        let color = prompt("nueva color")
        
        tabla.style.border = `${ancho} ${tipoborde} ${color}`


    }

    function ej23(){
        let tabla = document.querySelector(`table`);
        let style = window.getComputedStyle(tabla);
        alert(`la borde es ${style.marginLeft}`);
        alert(`la borde es ${style.marginRight}`);


        if (style.marginLeft!=`0px`&&style.marginRight!=`0px`) {
            tabla.style.marginRight = `0px`
            console.log(tabla.style.marginRight)
        }
        if (style.marginLeft!=`0px`&&style.marginRight==`0px`) {
            tabla.style.marginLeft = `0px`
        }
        if (style.marginLeft==`0px`&&style.marginRight==`0px`) {
            tabla.style.marginLeft = `auto`
            tabla.style.marginRight = `auto`
        }


    }

    function ej31(){
        let div = document.getElementById(`putocero`)
        div.textContent = parseInt(div.textContent) + 1
    }

    function ej32(){
        let div = document.getElementById(`putocero`)
        div.textContent = parseInt(div.textContent) - 1
    }

    function ej41(){
        let array = [`hola`,`caca`,`pescao`,`tortilla`,`culo`]
        let imagen = document.getElementById(`puto`)
        
        console.log(imagen.src)
        array.forEach(element => {
            
        });

    }

    function ej42(){
        let div = document.getElementById(`putocero`)
        div.textContent = parseInt(div.textContent) - 1
    }
}