/* Peça ao usuário digitar algum texto no pelo prompt e depois mostre esse texto com 
todas as letras maiúsculas, com todas as letras minúsculas e depois escreva no 
console (console.log) letra por letra do texto que o usuário digitou. 
(Utilize o método split para fazer esse último) */

var texto = prompt('Digite aqui seu texto:');

alert('Com letras maiúsculas: ' + texto.toUpperCase());
alert('Com letras minúsculas: ' + texto.toLowerCase());

var resultado = texto.split("")

console.log(resultado);
