var ejemplo ="hola";
var booleano = true;
var variable = "soy un var";

function miFunction() {
    //alert("Hola");
    console.log("hello world");
}

function encimaFoto(){
    alert("adios");
}

function comprobar(entrada){
    if (entrada) {
        return "la variable es true"
    } else {
        return "la variable es false"
    }
}

function verVar(variable){
    variable = "otro var";
    let lett = "no imprime";
    return variable;
}

console.log(verVar(variable));
console.log(comprobar(booleano))
console.log(variable)
console.log(lett);