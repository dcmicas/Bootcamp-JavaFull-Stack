/*var nome = prompt ('Qual o seu nome?') 
 alert (nome)
let idade = prompt ("Quantos anos você tem?")
alert ('Você tem ' + idade + ' e seu nome é ' + nome)
let string = 'Olá mundo'
let string2 = "Olá mundo"
let string3 = `Olá mundo`

var n = 5
let n2 = 5.63
let soma = n + n2 + 7
console.log(soma)

let sub = n2 -n
console.log(sub)

let multi = n * 5
console.log(sub)

const div = 9/3
console.log(div)

const media = (7+5+9.5+4+8)/5*8
console.log(media)

console.log(4%2)


const bool = true
const bool2 = false 

let a = 6
let b = 7
    console.log(a == b)*/


/* let nota1 = parseFloat(prompt ("Informe a primeira nota"))
let nota2 = parseFloat(prompt ("Informe a segunda nota"))
let nota3 = parseFloat(prompt ("Informe a terceira nota"))
let qtdFaltas = parseInt (prompt ("Informe a Quantidade de Faltas"))
const media = (nota1 + nota2 + nota3)/3

alert ("Sua média é " + media)
    if (media > 7 && qtdFaltas <= 3) { 
    alert ("Parabéns, você passou")
}   else if (media === 7 || qtdFaltas <= 3) {
        alert ("Quase não passou, hein")
}   else { 
        alert ("Você não passou")
} */


/* const qtdNotas = parseInt(prompt ("Quantas notas devem ser recebidas?"))

    let i = 0 //variavel contadora
    let soma = 0
    while  (i < qtdNotas) //condição booleana 
    { 
       const nota = parseFloat (prompt ("Informe a nota"))
       soma = soma + nota
       i++ //incremeneto da váriavel - de um em um
    }
    const media = soma / qtdNotas
alert ("Sua média é " + media) */




/* const qtdNotas = parseInt(prompt ("Quantas notas devem ser recebidas?"))

    let soma = 0

    for (let i=0; i < qtdNotas; i++)
    {  const nota = parseFloat (prompt ("Informe a nota " + (i+1))) 
    //incremento para deixar mais interativo - não altera a variavel
    soma += nota // encurtador para soma=soma+nota
    }
    const media = soma / qtdNotas
alert ("Sua média é " + media) */



/*const qtdNotas = parseInt(prompt ("Quantas notas devem ser recebidas?"))
    let soma = 0

    for (let i=0; i < qtdNotas; i++)
    {  const nota = parseFloat(prompt(`Digite a ${i + 1}° nota`))
        soma += nota // encurtador para soma=soma+nota
    }
    const media = soma / qtdNotas
alert (`Sua nota é ${media}`)*/

document.write (`<h1> Olá Mundo </h>`)