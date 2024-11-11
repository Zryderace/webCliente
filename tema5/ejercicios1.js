window.onload = function(){
    window.ej10 = ej10;
    window.ej11 = ej11;
    window.ej2 = ej2;

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

    function ej2(){

    }
}