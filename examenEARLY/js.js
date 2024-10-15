
function ej1() {
    let valor = -1;
    let dollar = 1.0965;
    do {
        valor = parseFloat(prompt(`introduce un valor para convertir a euros, mayor a 0`));
    } while (valor <= 0 || isNaN(valor));
    alert(`${valor} euros son ${valor*dollar} dolares`)
}

function ej2(){
    let notas = [];
    let valor;
    let suspensos = 0, aprobados = 0, notables = 0, sobresalientes = 0;
    let i = 0;
    do {
        do {
            valor = -1;
            valor = parseFloat(prompt(`introduce la calificacion, mayor a 0 y menor a 10`));
        } while (valor < 0 || isNaN(valor) || valor>10);
        if (valor<5) {
            suspensos++;
        } else if (valor<7) {
            aprobados++;
        } else if (valor<9) {
            notables++;
        } else {
            sobresalientes++;
        }
        i++;
    } while (i<10);
    alert(`
         ${suspensos} suspensos
         ${aprobados} aprobados
         ${notables} notables
         ${sobresalientes} sobresalientes
         `)
}

function ej3(){
    let arr = [];
    let valor;
    //a
    do {
        valor = "";
        valor = parseFloat(prompt(`mete numeros, acaba con un negativo`));
        if (valor>=0) {
            arr.push(valor);
        }
    } while (valor>=0||isNaN(valor));

    //b
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str+= `${arr[i]} `;
    }
    console.log(str);

    //c
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    console.log(suma);

    //d
    let num = -1;
    do {
        num = parseInt(prompt(`mete un numero entero positivo`));
        if (num<0||isNaN(num)) {
            alert(`numero incorrecto`);
        } else {
            break;
        }
    } while (true);

}

function ej4() {
    
}

// let a = parseFloat(prompt(`introduce un valor`));
// let b = parseFloat(prompt(`introduce un valor`));
// alert("suma:" + suma(a, b) +
//     "resta:" + resta(a, b) +
//     "multiplicacion:" + multiplicacion(a, b) +
//     "division:" + division(a, b) +
//     "resto:" + resto(a, b))