/* 3.Ordenar três números:
 Escreva uma função que recebe três números como parâmetros e os retorna em ordem crescente. */

const num1 = 3
const num2 = 1
const num3 = 5

function ordenarNumeros (num1, num2, num3){
    const arrayNumeros = [num1, num2, num3]
    arrayNumeros.sort()
    return arrayNumeros
}

const ordemCrescente = ordenarNumeros (num1, num2, num3)
console.log (`Números em ordem crescente: ${ordemCrescente}`)