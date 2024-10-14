console.log("hey");

function print(a){
    console.log(a);
}

const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const multiplicacion = (a,b) => a*b;
const division = (a,b) => a/b;
const resto = (a,b) => a%b;

function saludar(){
    let a = parseFloat(prompt(`introduce un valor`));
    let b = parseFloat(prompt(`introduce un valor`));
    alert("suma:" + suma(a,b) +
          "resta:" + resta(a,b) +
          "multiplicacion:" + multiplicacion(a,b) +
          "division:" + division(a,b) +
          "resto:" + resto(a,b))
}

function FtoC(){
    temperatura = parseFloat(prompt(`introduce la temperatura en Farenheit`))
    alert(`${temperatura} Farenheit son ${(temperatura-32)*5/9} Celsius`)
}

function CtoF(){
    temperatura = parseFloat(prompt(`introduce la temperatura en Celsius`))
    alert(`${temperatura} Celsius son ${temperatura*9/5+32} Farenheit`)
}

function Factorial(){
    let positivo = 0;
    while (true) {
        positivo = parseInt(prompt(`introduce 1 numero positivo`))
        if (Number.isInteger(positivo)&&positivo>0) {
            break;
        }
    }
    let suma = 1;
    for (let i = 2; i <= positivo; i++) {
        suma *= i;
    }
    print(suma);
}




