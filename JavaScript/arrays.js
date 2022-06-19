/* Primeira opção Array - Mais complexa
const array = new Array() //Esse segundo Array tem que ser com A maiusculo
console.log(array) */

/* const array = [1,2,3,4,5]
console.log(array [0]) //cada linha uma posição
console.log(array [3]) */


/*const array = [1,2,3,4,5,10,75.6,100,80]
console.log(array.length) //Qual a qtd de elementos dentro da array*/

//Exercicio//

const qtdNotas = parseInt(prompt ("Quantas notas devem ser recebidas?"))
const notas = []

    for (let i=0; i < qtdNotas; i++)
    {  notas [i] = parseFloat(prompt(`Digite a ${i + 1}° nota`)) }  //looping para pegar a qtd notas
    
    let soma = 0

    for (let i=0; i < notas.length; i++)
       { soma += notas [i] } // encurtador para soma=soma+nota
    
    const media = soma / notas.length

alert (`Sua nota é ${media.toFixed(2)}`)