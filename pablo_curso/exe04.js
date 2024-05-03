/* 4.Calculadora simples: Escreva uma função que recebe dois números e um operador (+, -, *, /) 
como parâmetros e retorna o resultado da operação. */

const num1 = 2
const num2 = 2
const operador = '+'

function calculaNumero (num1, operador, num2){
    switch (operador){
        case "+":
            return (`2+2:${num1 + num2}`)
        case "-":
            return (`2-2:${num1 - num2}`)
        case "*":
            return (`2*2:${num1 * num2}`)
        case "/":
            return (`2/2:${num1 / num2}`)
        default:
            return ("Impossivel calcular")
            
    }
}

const resultado = calculaNumero(num1, operador, num2)
console.log(`O cálculo é ${resultado}`)