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

function sumaParcial(){
    let array = [1,2,3,4,5,6];
    let arrayNuevo = [...array];
    let i = 0;
    let j = 0;
    let sumatorio;
    while (i<array.length) {
        while (j<i) {
            arrayNuevo[i]+=array[j];
            j++;
        }
        i++;
        j=0;
    }
    // return arrayNuevo;
    console.log(arrayNuevo);
}


//ejercicio 9

function countBy(){
    let a = 3;
    let b = 5;
    array = [];
    if (a<0||b<0) {
        console.log(array);
    }
    let i = 0;
    while (i<b) {
        array[i]=(i+1)*a;
        i++;
    }
    console.log(array);
}

//ejercicio 11

function ej11(){
    let array = (prompt(`dime una frase`));
    let string = array.split(" ");
    string.reverse();
    string.unshift("hola");
    string = string.join(', ');
    console.log(string);
}

//ejercicio 12

function ej12(){
    arr1 = [1,2,3,3,4];
    arr2 = [2,1,5];
    // arrFinal = [4,5];
    arrFinal = [...arr1,...arr2];
    arrJunto = [...arr1,...arr2];
    //lo estoy haciendo 5 veces
    //juntar arrays para hcaaer el bucle una vez
    let i = 0;
    let j = i+1;
    let k = 0;
    let valor = '';
    let check = true;
    while (i<arrJunto.length) {
        
        while (j<arrJunto.length) {
            if (arrJunto[i]==arrJunto[j]) {
                valor=arrJunto[i];
                while (k<arrJunto.length) {
                    if (valor==arrFinal[k]) {
                        arrFinal.splice(k,1);
                        k--;
                    }
                    k++;
                }
                k = 0;
                break;
            }
            j++;
        }
        i++;
        j= i +1;
    }
    
    console.log(arrFinal);

    
}