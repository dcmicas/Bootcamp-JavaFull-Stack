//função para fazer calculo, sempre começa letra Maiuscula
// boas praticas - colocar o nome da variavel constante em maiuscula e separar por underline
// na variavel Math, o que tem o simbolo quadrado são funções (calculos matematicos) pré feitos


/* console.log (Math.PI) //exemplo 
console.log (Math.random () *300+2) // random - sorteio de número aleatório 

let random = Math.random() * 300 + 2 

console.log(random)
console.log(Math.floor(random))//valor arredondado para baixo
console.log (Math.ceil (random)) //valor arredondado para cima
console.log (Math.round (random))//valor arredondado para o mais próximo (para cima ou para baixo)


console.log (Math.pow(2,3)) //Eleva o numero x ao expoente y
console.log (5**4) //Eleva o numero x ao expoente y

console.log (5**0,5) // calcular raiz quadrada
console.log (Math.sqrt(4)) // calcular raiz quadrada do número X
console.log (8 ** (1/3)) //raiz cubica 

let str = `Olá, eu sou eu` //quebra de linha sem precisar deixar espaço
let str2 = "E ele me disse: \"Que linguagem top\"" //a barra invertida antes do "" serve para ela aparecer na string
console.log (str)
console.log(str2)


const str = 'Olá, mundo' //String e array são bem parecidos - Acessar valores dentro
console.log(str.length) //Valor de números + espaços totais
console.log(str[2]) //retornar qual caracter esta dentro da string X
console.log (str [str.length - 1]) //pegar sempre o ultimo caracter */

/* const str = 'O homem é o próprio lobo do homem'
console.log (str.length)
console.log(str.indexOf('homem')) // vai procurar dentro do texto a posição da palavra
console.log (str.charAt(5)) //Qual a caracter esta na posição X - valor unico
console.log (str.charCodeAt (10)) //Vai receber o código do caracter dentro do computador
console.log (str.split('')) // recorta a string, com a palavra padrão (todas) e forma posições dentro do array*/


const str = 'O homem é o próprio lobo do homem'
//console.log (str.replace ('lobo', 'monstro')) //substitui só a primeira palavra encontrada
//console.log (str.replaceAll ('homem', 'pessoa')) //não ativo em tudo ainda - mas substitui todas as vezes
//console.log (str.replace (/homem/g, 'pessoa')) //é o mais utilizado atualmente - substituir tudo
//console.log (str.startsWith ('O'))
console.log (str.slice (12,24)) //recortar a string - a partir do indice X 
console.log (str.slice (-21)) // pega o valor da string ao contratio