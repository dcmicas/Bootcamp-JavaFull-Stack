const cepForm = document.querySelector ('#cep-form') //criamos variavel e chamamos a variavel do html e guardamos na const//

cepForm.addEventListener('submit' (event) ==> {     //quando clicar no botão, vai tentar enviar para algum lugar e guarda na variavel "event" //
    event.preventDefault() //impede o comportamento padrão do formulario (enviar a algum lugar)"
    event.stopPropagation() //impede que o formulario perca os valores//

    const inputCep = event.target [0]
    const cep = inputCep.value //buscar o valor do dado no html
    
    fetch(`https://viacep.com.br/ws/${cep}/json`, {
        method: 'GET'
    }).then((resposta) => {
        return resposta.json()
    }).then (dados => {
        console.log(dados);
    })

   })



    // event.target.submit() //continua o envio do formulario - target (acessar dados do elemento)//

