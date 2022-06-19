class Pessoa {
   public nome: string 
    email: string
    senha: string | number

    constructor (nome: string, email: string, senha: string | number){   //função que cria a classe
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    cumprimentar (num: number): void {   // metodo sem retorno dentro de uma classe
        console.log (`Olá, meu nome é ${this.nome} e eu tenho ${num} anos`)
    }

cumprimentarcomRetorno():String{   // metodo com retorno dentro de uma classe
    return `Olá, meu nome é ${this.nome}`
}

}
let p: Pessoa = new Pessoa ('Pedro', 'predro@email.com', 12345678) // novo objeto a  partir de uma classe
/* 
p.cumprimentar(20)                         // metodo com retorno dentro de uma classe
console.log(p.cumprimentarcomRetorno())   // metodo com retorno dentro de uma classe */

console.log (`Nome = ${p.nome}`)