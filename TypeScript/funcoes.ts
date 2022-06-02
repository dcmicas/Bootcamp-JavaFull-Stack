//Estudo de como funciona as funções no TypeScript //

function mostrarMensagem() {   //escrita mais parecida com o JS//
    console.log ("Olá Mundo")
}
mostrarMensagem ()

function mostrarMensagem2(msg: string): void { //escrita no padrão TypeScript / void:não vai retornar nada
    console.log (msg)
}
mostrarMensagem2('Olá, TypeScript')

/* function somar(a:number, b:number): number { //Declarar o tipo de dado a ser declarado após o () (EX. numero)
    return a + b
} */

function somar (...nums: number []): number{
    return nums.reduce((x,y) => x + y, 10) //reduce = pega todos os valores do array e "junta tudo"
}
//console.log (somar ())//
somar (5,8,3,9)

function forEach (array: any [], fn: (x: any) => void ){ //tipagem de função fn: receber um parametro x e retorna nada (void) ou o que quiser 
    for (let v of array){
        fn (v)
    }
}
let arr = [1, 2, 3, 4 , 5, 6, 7]

for forEach (arr, (x) => {
    console.log (x + 5)
})