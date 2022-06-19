const numero = parseInt(prompt ("Qual a número da tabuada que você quer exibir ?"))

    let i = 0 //variavel contadora
    let multi = 0
    for  (let i=0; i <= 1000; i++)
        { multi = numero * i
    document.write (`${i} x ${numero} = ${multi} <br>`)
    }
    