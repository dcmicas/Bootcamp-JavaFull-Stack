/* Crie um programa que pergunta quantos números o usuário deseja digitar 
(tanto inteiro quanto decimal) e receba os números e armazene esses números 
em um array e depois mostre a soma total deles, a média deles, mostre cada 
valor em uma potência de 2 e faça a raíz quadrada e cúbica de cada um. */

const asknumero = parseInt(prompt ("Quantos números você quer digitar?"))
const array=[]

for (let contador=0; contador < asknumero; contador ++){ /*O contador pega a posição do item do array, faz a
verificação de até quando ele foi menor do que o número digitado e faz o incremento */
    array [contador] = parseFloat(prompt(`Qual o número?`)) }
    

let soma = 0    
    for (let contador=0; contador < array.length; contador++)
       {soma += array [contador] }

const media = soma / array.length

document.write (`Os números digitados são ${array}. <br><br><br>` );
document.write (`A soma dos números é ${soma}. <br><br><br>`);
document.write (`A média dos números é ${media}. <br><br><br>`);

var elemento = 0
var elemento2 = 0
for (let contador=0; contador < asknumero; contador ++){
    /*O contador pega a posição do item do array, faz a
    verificação de até quando ele foi menor do que o número digitado e faz o incremento */
     elemento = array[contador] 
     /*Pega o número digitado da posição que o contador está e coloca na variavel 
     que será utilizada para fazer a conta, sem estragar o array(elemento)*/
    elemento2 = elemento * elemento;
    document.write (`A potencia 2 do número ${elemento} é ${elemento2}. <br>`);


}
document.write (`<br><br>`)


for (let contador=0; contador < asknumero; contador ++){
     elemento = array[contador] 
    elemento2 = elemento * elemento * elemento;
    document.write (`A potencia 3 do número ${elemento} é ${elemento2}. <br>`);
}

document.write (`<br><br>`)

for (let contador=0; contador < asknumero; contador ++){
    elemento = array[contador] 
   elemento2 = Math.sqrt (elemento);
   document.write (`A raiz quadrada ${elemento} é ${elemento2}. <br>`);
}

document.write (`<br><br>`)

for (let contador=0; contador < asknumero; contador ++){
    elemento = array[contador] 
   elemento2 = Math.cbrt (elemento);
   document.write (`A raiz quadrada ${elemento} é ${elemento2}. <br>`);
}