//função - rotina de código//

/* function cumprimentar (){ //function + nome da função - Declarar código dentro do {}
    alert ('Olá, usuário')  //alert porque vamos mostrar no navegador e não no console (console.log)
} */
function cumprimentar2(msg = 'Hello, hello') {  //"variavel" executada dentro da função - quando termina, não existe mais, qts quiser, separado por ,
    alert(msg)
}
function criarElementoHTML (txt, elemento){
    document.write (`<${elemento} >${txt}</${elemento}>`)
}
function somar(a,b){
    return a + b //função vai retornar de maneira externa o resultado
}
function subtrair (a,b){
    return a - b
}
let total=somar (20,12)
console.log(total)
total = subtrair(20,10)
console.log(total)