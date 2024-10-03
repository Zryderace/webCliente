var mensaje = "nuevo codigo"
console.info(mensaje)
console.log(mensaje)
console.groupCollapsed(`bloque1`)
console.error(mensaje)
console.warn(mensaje)
console.groupEnd()

var respuestaBool;
var valorPedido;

var edad, nombre;

function limpiarConsola(){
    console.clear();
    respuestaBool = confirm(respuestaBool);
    console.log(respuestaBool)
}

function pedirValores(){
    console.log(mensaje)
    valorPedido = prompt(`introduce X`)
    console.group(valorPedido)
}

function documentWrite(){
    document.write("hey");
}

