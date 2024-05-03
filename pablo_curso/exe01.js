/* 1.Verificar se um número é par ou ímpar:
Escreva uma função que recebe um número como parâmetro e retorna uma mensagem 
indicando se o número é par ou ímpar. */

const numero = 7

function verificaParImpar (numero){
    if (numero % 2 === 0){
        return (`O número ${numero} é par.`)
    } else {
        return (`O número ${numero} é impar`)
    }
}

const resultado = verificaParImpar (numero)
console.log (resultado)