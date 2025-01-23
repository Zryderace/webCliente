window.onload = function(){

    window.sumar = sumar
    window.restar = restar

    function sumar() {
        let div = document.getElementsByTagName("div")
        let numero = parseInt(div[0].textContent)
        div[0].textContent = ++numero
    }

    function restar() {
        let div = document.getElementsByTagName("div")
        let numero = parseInt(div[0].textContent)
        div[0].textContent = --numero
    }
}