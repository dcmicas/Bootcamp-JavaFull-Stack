let msg: string = 'Hello World' //tipagem explicita//
var idade: number = 18 //variavel numero (qualquer tipo - var let ou const)
const estudando:boolean = true //variavel boleana

const nomes: Array <string> = ['Amanda', 'André', 'Andrew', 'Antonio', 'Barbara', 'Bruno'] 
//Objeto Array (por isso letra maiuscula) - que guardar x (tipo) dentro do <> da tipagem//
const idades: number [] = [5, 6, 7, 8, 200, 359.32]

interface Pessoa {
    nome: string //propriedade de tipo string
    idade: number
    cpf: number | string | Array <string> | Array <number>
     //union type - uma variavel pode ter um ou mais tipos dentro dela, separados por |  //

}

const p: Pessoa = {
    idade:5,
    nome: 'Enzo',
    cpf: '12345678911',
}

const p2: Pessoa = {
    idade:5,
    nome: 'Enzo',
    cpf: '123.456.789-11',
}

const p3: Pessoa = {
    idade:5,
    nome: 'Enzo',
    cpf: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '1']
}

const p4: Pessoa = {
    idade:5,
    nome: 'Enzo',
    cpf: [1,2,34,5,6]
}

nomes.forEach ((nome, i) => {
    console.log (`${nome}, ${idades [i]} anos`)
})