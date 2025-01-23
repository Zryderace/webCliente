window.onload = function(){

    window.alerta = alerta
    window.youtube = youtube

    function alerta(){
        let enlace = document.getElementsByTagName("a")
        alert('el enlace va a: ' +  enlace[0].href + ' y tiene el texto: ' + enlace[0].textContent)
    }

    function youtube(){
        let enlace = document.getElementsByTagName("a")
        enlace[0].href = "youtube"
        enlace[0].textContent = "he cambiado"
    }



}