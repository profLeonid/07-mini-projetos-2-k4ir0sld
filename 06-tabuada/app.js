'use strict'

// Gera uma lista de 1 até a quantidade informada
const criarListaNumeros = function(quantidade){
    let listaNumero = []

    for(let i = 1; i <= quantidade; i++){
        listaNumero.push(i) // adiciona cada número na lista
    }
    return listaNumero
}

// Gera uma lista somando cada posição ao número informado (número + 1, número + 2 ...)
const criarListaAdicao = function(numero){
    let listaResultado = []
    let resultado

    for(let cont = 1; cont <= numero; cont++){
        resultado = numero + cont
        listaResultado.push(resultado)
    }
    return listaResultado
}

// Gera uma lista subtraindo cada posição do número informado (número - 1, número - 2 ...)
const criarListaSubtracao = function(numero){
    let listaResultado = []
    let resultado

    for(let cont = 1; cont <= numero; cont++){
        resultado = numero - cont
        listaResultado.push(resultado)
    }
    return listaResultado
}

// Gera uma lista multiplicando o número por cada posição (número × 1, número × 2 ...)
const criarListaMultiplicacao = function(numero){
    let listaResultado = []
    let resultado

    for(let cont = 1; cont <= numero; cont++){
        resultado = numero * cont
        listaResultado.push(resultado)
    }
    return listaResultado
}

// Gera uma lista dividindo o número por cada posição (número ÷ 1, número ÷ 2 ...)
const criarListaDivisao = function(numero){
    let listaResultado = []
    let resultado

    for(let cont = 1; cont <= numero; cont++){
        resultado = numero / cont
        listaResultado.push(Number(resultado.toFixed(2))) // arredonda para 2 casas decimais
    }
    return listaResultado
}

// Recebe os cinco valores de uma linha e cria uma <tr> com cinco <td> na tabela
const criarLinha = function(numero, adi, subt, multi, divis){
    const tabela = document.getElementById("tabela") // referencia o <tbody> no HTML
    const tr     = document.createElement("tr")      // cria a linha

    // Cada bloco cria uma célula e define seu valor
    const tdNum = document.createElement("td")
    tdNum.textContent = numero

    const tdAdi = document.createElement("td")
    tdAdi.textContent = adi

    const tdSubt = document.createElement("td")
    tdSubt.textContent = subt

    const tdMulti = document.createElement("td")
    tdMulti.textContent = multi

    const tdDivisi = document.createElement("td")
    tdDivisi.textContent = divis

    tr.replaceChildren(tdNum, tdAdi, tdSubt, tdMulti, tdDivisi) // monta as células dentro da linha
    tabela.appendChild(tr) // adiciona a linha no final da tabela
}

// Executada ao clicar no botão
const handleClick = function(){
    let tabela     = document.getElementById("tabela")
    tabela.innerHTML = '' // limpa a tabela antes de gerar novos resultados

    const quantidade = Number(document.getElementById("quantidade").value) // lê o input do usuário

    // Gera uma lista para cada coluna da tabela
    const listaNumeros       = criarListaNumeros(quantidade)
    const listaAdicao        = criarListaAdicao(quantidade)
    const listaSubtracao     = criarListaSubtracao(quantidade)
    const listaMultiplicacao = criarListaMultiplicacao(quantidade)
    const listaDivisao       = criarListaDivisao(quantidade)

    // Percorre as listas e monta uma linha por vez na tabela
    for(let i = 0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracao[i], listaMultiplicacao[i], listaDivisao[i])
    }
}