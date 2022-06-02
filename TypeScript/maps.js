function mapear (array, funcao) {
    const novoArray = []

    for (let i = 0; i < array.length; i++){
        const valor = funcao (array [i]) //5
        novoArray.push(valor) //5
    }

    return novoArray // [4,5,5]
}

let nomes = ['João', 'Maria', 'Paulo', 'Roberto']

let novo = mapear (nomes, (nome) => {
    return nome.length * 3
}) //[12, 15, 15, 21]

console.log (novo)