"use strict";
class Pessoa {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    cumprimentar(num) {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${num} anos`);
    }
    cumprimentarcomRetorno() {
        return `Olá, meu nome é ${this.nome}`;
    }
}
let p = new Pessoa('Pedro', 'predro@email.com', 12345678); // novo objeto a  partir de uma classe
/*
p.cumprimentar(20)                         // metodo com retorno dentro de uma classe
console.log(p.cumprimentarcomRetorno())   // metodo com retorno dentro de uma classe */
console.log(`Nome = ${p.nome}`);
