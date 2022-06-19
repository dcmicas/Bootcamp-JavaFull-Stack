//orientação a objetos = par de chaves {} (diferente de array [] )
//Propriedades - atributos (ex. caracteristicas de uma pessoa)
//Metodos ou funções - rotinas que um objeto pode fazer (ex. uma pessoa pode falar (algoritimo para andar))

/* let pessoa = {
    nome: "João", //nome da chave + valor dentro dela = representação da propriedade
    idade: 28,
    cpf:'123.456.789-65',
    endereco: {    //objeto inteiro dentro de outro objeto
        cidade: 'São Paulo',
        Estado: 'São Paulo',
        CEP: '00000-000'
    },
    cumprimentar: function () {     //propriedade que recebe uma função
        console.log ('Olá, pessoinha')  //uma lógica dentro da função
    }
  }
/* console.log (pessoa) //todos os valores de uma vez
console.log (pessoa.nome) //chamar uma propriedade só do objeto */

/* console.log(`Olá, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos e moro em ${pessoa.endereco.cidade}.`)
pessoa.cumprimentar() //é preciso colocar () no final para executar a função

/* console.table (pessoa) //curiosidade */
/* console.log(pessoa['idade'])  //maneira diferente de acessar o valor da variavel - stri */




//Classe = estrutura basica do objeto (molde) - Objeto = crianção concreta
//class - Primneira letra maiuscula - padrão

/* class Pessoa {   //vamos fazer o molde do objeto
    constructor (){            //metodo construtor
        this.nome = 'João'              //linhas independentes, não precisa de virgula
        this.idade = '28'
        this.cpf = '123.456.789-65'
    }                    
}
let p = new Pessoa() //a variavel p tem objeto tipo Pessoa dentro dela
console.log (`Olá, meu nome é ${p.nome} e tenho ${p.idade} anos`) //só funciona entre crase */


/* class Pessoa {   //vamos fazer o molde do objeto
    constructor (nome, idade, cpf){            //declarar parametros dentro do ()
        this.nome = nome           //o que vem acompanhado do this é uma propriedade da classe e não uma variavel normal (por isso repetir o nome)
        this.idade = idade
        this.cpf = cpf
    }                    

let p = new Pessoa("Marcos", 20, "123.456.789-65") //a variavel p tem objeto tipo Pessoa dentro dela
let p2 = new Pessoa ("Sayson", 25, "123.456.789-65")
 console.log (`Olá, meu nome é ${p.nome} e tenho ${p.idade} anos`) //só funciona entre crase
console.log (`Olá, meu nome é ${p2.nome} e tenho ${p2.idade} anos`)

} */



class Pessoa {   //vamos fazer o molde do objeto
    constructor (nome, idade, cpf){            //declarar parametros dentro do ()
        this.nome = nome           //o que vem acompanhado do this é uma propriedade da classe e não uma variavel normal (por isso repetir o nome)
        this.idade = idade
        this.cpf = cpf
    }
cumprimentar(){
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}
static cumprimentar2() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}
let p = new Pessoa('Marcos', 20, '123.456.789-65') 
let p2 = new Pessoa ('Diana', 25, '123.456.789-65')

p.cumprimentar
p2.cumprimentar2

Pessoa.cumprimentar
Pessoa.cumprimentar2
}



