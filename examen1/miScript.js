function Ejercicio1(){
    //promp metros -> alert km
    //num >0 y isNum
    let num = -1;
    while (true) {
        num = prompt(`indica la cantidad en metros a convertir`)
        if (num>0 && !(isNaN(num))) {
            break;
        }
    }
    alert(`${num} metros son ${num/1000} kilometros`)
}

function Ejercicio2(){
    let contador = 0;
    let num = -1;
    let menor10 = 0;
    let entre1020 = 0; //inclusive
    let entre2130 = 0; //inclusive
    let mayor30 = 0;
    //bucle para pedir 10 veces
    while (true) {
        //bucle para repetir numeros si dan mal
        while (true) {
            num = parseInt(prompt(`indica un numero entero positivo`))
            if (Number.isInteger(num) && !(isNaN(num))) {
                break;
            }
        }
        //numero bien seguro
        if (num<10) {
            menor10++
        } else if (num>30){
            mayor30++
        } else if (num>=10&&num<=20){
            entre1020++
        } else{
            entre2130++
        }
        contador++;
        if (contador==10) {
            break;
        }
    }
    alert(`
        menores de 10: ${menor10}
        entre 10 y 20: ${entre1020}
        entre 21 y 30: ${entre2130}
        mayores de 30: ${mayor30}`)
}

function Ejercicio3(){

    let num = -1;
    let contador = 0;
    let array = [];

    while (true) {
        while (true) {
            num = parseInt(prompt(`indica un numero entero positivo`))
            if (Number.isInteger(num) && !(isNaN(num)) && num>0) {
                break;
            }
        }
        array.push(num);
        contador++;
        if (contador==7) {
            break;
        }
    }

    //apartado A
    
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    console.log(array);
    console.log(suma);

    //apartado B

    num = -1;
    contador = 0;

    while (true) {
        while (true) {
            num = parseInt(prompt(`indica nuevos numeros para el array`))
            if (Number.isInteger(num) && !(isNaN(num)) && num>0) {
                break;
            }
        }
        if (contador == 0) {
            array[0] = num;
        } else if (contador == 1) {
            array[6] = num;
        }
        contador++;
        if (contador==2) {
            break;
        }
    }

    console.log(array);

    //apartado C

    suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    let media = (suma/7).toFixed(2);
    console.log(`la media del array es ${media}`);

    //apartado D

    let mayorMedia = ``;
    let menorMedia = ``;

    for (let i = 0; i < array.length; i++) {
        if (array[i]<media) {
            menorMedia += `${array[i]},`
        } else {
            mayorMedia += `${array[i]},`
        }
    }

    alert(`
        Numeros mayores Media: ${mayorMedia}
        Numeros menores Media: ${menorMedia}`)

    //apartado E

    num = -1;
    let posiciones = ``;
    let aparece = false;

    while (true) {
        num = parseInt(prompt(`numero para buscar en array`))
        if (Number.isInteger(num) && !(isNaN(num)) && num>0) {
            break;
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i]==num) {
            posiciones += `${i},`
            aparece = true
        }
    }

    if(aparece){
        alert(`El numero ${num} aparece en las posiciones: ${posiciones}`)
    } else {
        alert(`El numero ${num} no aparece`)
    }

}

function Ejercicio4(){
    //NxN pedir N
    let matriz = [];
    let num = -1;

    while (true) {
        num = parseInt(prompt(`indica un numero entero positivo mayor a 1 y menor a 6`))
        if (Number.isInteger(num) && !(isNaN(num)) && num>1 && num<6) {
            break;
        }
    }
    //aqui num es 2<=N<=5

    //apartado A
    let array = [];
    for (let i = 0; i < num; i++) {
        array = []
        for (let j = 0; j < num; j++) {
            array[j] = Math.floor(Math.random() * (99 - 1) + 1);
        }
        matriz[i] = array;
    }
    //console.log(matriz)

    //apartado B

    let string = ``;

    for (let i = 0; i < num; i++) {
        string = ``;
        for (let j = 0; j < num; j++) {
            if (matriz[i][j]<10) {
                string += `0${matriz[i][j]} `
            } else {
                string += `${matriz[i][j]} `
            }
        }
        console.log(string)
    }

    //apartado C

    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            suma += matriz[i][j]
        }
    }

    console.log(`suma total matriz: ${suma}`)

    //apartado D

    let matrizCopia = [];

    for (let i = 0; i < num; i++) {
        array = []
        for (let j = 0; j < num; j++) {
            if (matriz[i][j]<50) {
                array[j] = 50
            } else {
                array[j] = matriz[i][j]
            }
        }
        matrizCopia[i] = array;
    }

    for (let i = 0; i < num; i++) {
        string = ``;
        for (let j = 0; j < num; j++) {
            //en ningun caso los numeros seran menores a 10 por lo que no hcae falta
            //controlar numeros que necesites 0 a la izquierda
            string += `${matrizCopia[i][j]} `
        }
        console.log(string)
    }

    //apartado E

    let sumaMatriz = 0;
    let sumaMatrizCopia = 0;

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (i==j) {
                sumaMatriz += matriz[i][j]
                sumaMatrizCopia += matrizCopia[i][j]
            }
        }
    }
    
    if (sumaMatriz==sumaMatrizCopia) {
        console.log(`suma diagonal ambas matrices es: ${sumaMatriz}`)
    } else {
        console.log(`suma diagonal de la matriz Copia es mayor: ${sumaMatrizCopia}`)
    }
    // else {
    //     nunca va a poder llegar a este punto ya que la copia siempre es >=
    //     console.log(`suma diagonal de la matriz original es mayor: ${sumaMatriz}`)
    // }



}
