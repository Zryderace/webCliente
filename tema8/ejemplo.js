window.onload = function (){
    let form = document.getElementsByTagName("form")[0]

    let form2 = document.forms[1]

    let form1 = document.forms['name del form']

    document.getElementById("boton1").onclick = function (){
        form.submit()
    }
    document.getElementById("boton2").onclick = function (){
        form.reset()
    }





}