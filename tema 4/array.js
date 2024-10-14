// var myArray = new Array(5);
// myArray.push("hola", 2, true);
// console.log(myArray);
// console.log(myArray[20]);
// console.log(myArray);
// myArray[20]="pepito";
// console.log(myArray[20]);
// console.log(myArray);
// console.log(myArray.findIndex(pr));

var miArray = new Array(5);
let suma = 0;
let i = 0;

//ejercocio 1

// function sumaArray(array) {
//     let suma = 0;
//     let i = 0;
//     while (i < array.length) {
//         array[i] = parseFloat(prompt(`dime un numero`));
//         suma += array[i];
//         i++;
//     }
//     console.log(array);
//     console.log(suma);
// }


while (i < miArray.length) {
    miArray[i] = parseFloat(prompt(`dime un numero`));
    suma += miArray[i];
    i++;
}
console.log(miArray);
console.log(suma);




//ejercicio 2
let mayor = 0;
let menor = 101;
i = 0;

while (i < miArray.length) {
    miArray[i] = Math.floor(Math.random() * (100 - 1) + 1);
    if (menor > miArray[i]) {
        menor = miArray[i];
    }
    if (mayor < miArray[i]) {
        mayor = miArray[i];
    }
    i++;
}

console.log(miArray);
console.log(mayor);
console.log(menor);

//ejercicio 3


miArray = new Array(1000);

function contarRepetidos(array) {
    let numero = 77;
    let repetido = 0;
    let i = 0;
    while (i < array.length) {
        if (array[i]==numero) {
            repetido++;
        }
        i++;
    }
    console.log(`el ${numero} se repite ${repetido} veces`);
}

while (i < miArray.length) {
    miArray[i] = Math.floor(Math.random() * (100 - 1) + 1);
    i++;
}

contarRepetidos(miArray);

//ejercicio 4

miArray = new Array(100);
i = 0;
while (i < miArray.length) {
    miArray[i] = Math.floor(Math.random() * (100 - 1) + 1);
    i++;
}
// miArray = new Array(2);
// miArray = [24,12];
todosPares(miArray);

function todosPares(array) {
    let bool = true;
    let i = 0;
    while (i < array.length) {
        if (array[i]%2!=0) {
            bool = false;
            break;
        }
        i++;
    }
    console.log(bool);
}

//ejercicio 5


miArray = new Array();

arrayParImpar(miArray);

function arrayParImpar(array) {
    let pares = 0;
    let impares = 0;
    do {
        let numero = (prompt(`dime un numero par o impar`));
        if (numero == 0 || isNaN(numero)) {
            break;
        }
        // if (numero%2==0) {
        //     pares++;
        // } else {
        //     impares++;
        // }

        numero%2==0 ? pares++ : impares++;

        array.push(numero);
    } while (true);

    console.log(array);
    console.log(`hay ${pares} pares`);
    console.log(`hay ${impares} impares`);

}

//ejercicio 6
let letra = `a`;
let palabra = `hola`;
letraEnArray(letra, palabra);

function letraEnArray(letra, palabra) {
    let i = 0;
    let bool = false;
    while (i<palabra.length) {
        if (letra==palabra[i]) {
            bool = true;
            break;
        }
        i++;
    }

    bool 
    ? console.log(`la letra ${letra} esta en el array ${palabra}`)
    : console.log(`la letra ${letra} NO esta en el array ${palabra}`);
}

//ejercicio 7 y 10

miArray = new Array ("rojo", "verde", "azul");
listar(miArray);


function listar(array) {
    let i = 0;
    let string = "";
    while (i<array.length) {
        // if (i==array.length-1) {
        //     string += `${array[i]}`;
        // } else {
        //     string += `${array[i]}-`;
        // }

        i==array.length-1 ? string += `${array[i]}` : string += `${array[i]}-`;
        i++;
    }

    console.log(string);

}

//ejercicio 8
