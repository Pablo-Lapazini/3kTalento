/* 2.Calcular a média de três números e verificar se está aprovado ou reprovado:
 Escreva uma função que recebe três notas como parâmetro e calcula a média. 
 Em seguida, verifique se a média é maior ou igual a 7,0, indicando que o aluno foi aprovado, 
 ou menor que 7,0, indicando que foi reprovado. */

const nota1 = 9.5
const nota2 = 8.0
const nota3 = 6.5

function calcularMedia (nota1, nota2, nota3){
    const somaNotas = (nota1 + nota2 + nota3)
    const mediaNota = (somaNotas / 3)
    if (mediaNota >= 7.0){
        return (`O aluno foi aprovado.`)
    } else {
        return (`O aluno foi reprovado.`)
    }
}
const resultado = calcularMedia (nota1, nota2, nota3)
console.log (resultado)