var nombre;
var valor1;
var valor2;
var gastos;
var producto;
var dto;

//ejercicio 1
nombre = prompt(`Introduce tu nombre`)
alert(`Bienvenido a mi pagina ` + nombre)

//ejercicio 2
valor1 = parseFloat(prompt(`introduce un valor`)) 
valor2 = parseFloat(prompt(`introduce otro valor`)) 

alert(`suma: ${valor1 + valor2}
       resta: ${valor1 - valor2}
       multi: ${valor1 * valor2}
       divi: ${valor1 / valor2}
       resto: ${valor1 % valor2}`)

//ejercicio 3

gastos = parseFloat(prompt(`gasto estimado de alojamiento`))
gastos += parseFloat(prompt(`gasto estimado de alimentacion`))
gastos += parseFloat(prompt(`gasto estimado de entretenimiento`))

alert(`el coste total del viaje es de ${gastos} euros`)

//ejericicio 4

producto = parseFloat(prompt(`precio producto`))
dto = parseFloat(prompt(`descuento a aplicar`))
producto *= 1-(dto/100)
alert(`precio final: ${producto.toFixed(2)}`)

//ejercicio 5

var tipoConv = 0;
var temperatura;

while (true) {
    tipoConv = prompt(`pulsa 1 para Celsius a Farenheit, 2 para Farenheit a Celsius`)
    if (tipoConv==1 || tipoConv==2) {
        break
    }
}

if (tipoConv==1) {
    temperatura = parseFloat(prompt(`introduce la temperatura en Celsius`))
    alert(`${temperatura} Celsius son ${temperatura*9/5+32} Farenheit`)
} else {
    temperatura = parseFloat(prompt(`introduce la temperatura en Farenheit`))
    alert(`${temperatura} Farenheit son ${(temperatura-32)*5/9} Celsius`)
}

//ejercicio 6

var positivo = -1;
var string = "";
var sumaCuadrados = 0;

while (positivo<=0) {
    positivo = parseInt(prompt(`introduce un numero entero positivo`))
}

for (let i = 1; i <= positivo; i++) {
    
    if (positivo%i == 0) {
        string += `${i} `;
        sumaCuadrados += i**2;
    }
    
}


alert(string)
alert(sumaCuadrados)
sumaCuadrados = 36
//no esta bien
if (Math.cbrt(sumaCuadrados)%1===0) {
    alert(`es un cuadrado`)
} else {
    alert(`no es cuadrado`)
}


