const divQuadrado = document.querySelector ('div.quadrado')
const btnAddRemover = document.querySelector ('#adicionar-remover')

btnAddRemover.addEventListener('click', () => {
    if (divQuadrado.classList.contains ('vermelho')){
        divQuadrado.classList.remove ('vermelho') //remove classes css do elemento
    } else{
        divQuadrado.classList.add('vermelho')
    }
})


/* divQuadrado.addEventListener ('mouseenter', () => {
    divQuadrado.style.animationName = 'rotacionar'
    divQuadrado.style.animationDuration = '1.5s'
    divQuadrado.style.animationInterationCount = 'infinite'
})

divQuadrado.addEventListener ('mouseout', () => {
    divQuadrado.style.animationName = ''
    divQuadrado.style.animationDuration = ''
    divQuadrado.style.animationInterationCount = ''
})
 */