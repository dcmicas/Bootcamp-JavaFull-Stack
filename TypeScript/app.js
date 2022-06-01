"use strict";
let msg = 'Hello World'; //tipagem explicita//
var idade = 18; //variavel numero (qualquer tipo - var let ou const)
const estudando = true; //variavel boleana
const nomes = ['Amanda', 'André', 'Andrew', 'Antonio', 'Barbara', 'Bruno'];
//Objeto Array (por isso letra maiuscula) - que guardar x (tipo) dentro do <> da tipagem//
const idades = [5, 6, 7, 8, 200, 359.32];
const p = {
    idade: 5,
    nome: 'Enzo',
    cpf: '12345678911',
};
const p2 = {
    idade: 5,
    nome: 'Enzo',
    cpf: '123.456.789-11',
};
const p3 = {
    idade: 5,
    nome: 'Enzo',
    cpf: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '1']
};
const p4 = {
    idade: 5,
    nome: 'Enzo',
    cpf: [1, 2, 34, 5, 6]
};
nomes.forEach((nome, i) => {
    console.log(`${nome}, ${idades[i]} anos`);
});
