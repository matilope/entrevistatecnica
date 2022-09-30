/*
Algoritmos
1. Dada una lista de N números positivos, intercambiar los extremos si el valor de la
izquierda es mayor al de la derecha
Por ejemplo:
Dada la lista: 36, 42, 8, 38, 31, 56, 59, 24, 96, 3, 88
Se obtiene: 36, 3 , 8 ,24, 31, 56, 59, 38, 96, 42, 88
Dado que:
36 es menor que 88, no se intercambia.
42 es mayor que 3, se intercambia.
8 es menor que 96, no se cambia.
etc …
*/


let numeros = [36, 42, 8, 38, 31, 56, 59, 24, 96, 3, 88];

let decrementador = numeros.length - 1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeros[decrementador]) {
        let guardarNumero = numeros[i];
        numeros[i] = numeros[decrementador];
        numeros[decrementador] = guardarNumero;
        if ((numeros.length - 1) % 2 === 0) {
            if (Math.floor(numeros.length / 2) - 2 === i) {
                break;
            }
        } else {
            if (Math.floor(numeros.length / 2) - 1 === i) {
                break;
            }
        }
    }
    decrementador--;
}

// console.log(numeros);




/* 
2. El factorial de un entero positivo n, el factorial de n o n factorial se define en principio
como el producto de todos los números enteros positivos desde 1 (es decir, los
números naturales) hasta n.
Por ejemplo:
5! = 1 x 2 x 3 x 4 x 5 = 120
Escribir una función que calcule el Factorial de N
● imperativa
● funcional
*/


/* Imperativa */

let numero = 5;
for (let i = numero - 1; i >= 1; i--) {
    numero *= i;
}

// console.log(numero);


/* Funcional */

function calcularFactorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// let resultado = calcularFactorial(5);
// console.log(resultado);