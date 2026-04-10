'use strict'

// Gera uma lista de 1 até a quantidade informada
const criarListaNumeros = function(quantidade){
    let listaNumero = []

    for(let i = 1; i <= quantidade; i++){
        listaNumero.push(i)
    }
    return listaNumero
}

// Gera uma lista de números pares (2, 4, 6...) com a quantidade informada
const criarListaPares = function(numero){
    let listaPar = []
    let valor = 2 // começa no primeiro par

    for(let i = 1; i <= numero; i++){
        listaPar.push(valor)
        valor = valor + 2 // avança para o próximo par
    }
    return listaPar
}

// Gera uma lista de números ímpares (1, 3, 5...) com a quantidade informada
const criarListaImpares = function(numero){
    let listaImpar = []
    let valor = 1 // começa no primeiro ímpar

    for(let i = 1; i <= numero; i++){ 
        listaImpar.push(valor)
        valor = valor + 2 // avança para o próximo ímpar
    }
    return listaImpar
}

// Gera a tabuada do 5 até a quantidade informada (5, 10, 15...)
const criarListaMulti5 = function(numero){
    let listaMulti = []
    let valor = 0

    for(let i = 1; i <= numero; i++){
        valor = valor + 5
        listaMulti.push(valor)
    }
    return listaMulti
}

// Gera uma lista de potências de 2 (2⁰, 2¹, 2²...) até a quantidade informada
const criarListaPotencia2 = function(numero){
    let listaPot = []
    let valor = 2
    let resultado

    for(let i = 0; i <= numero; i++){
        resultado = (valor**i) // ** é o operador de potência no JS
        listaPot.push(resultado)
    }
    return listaPot
}

// Recebe os cinco valores de uma linha e cria uma <tr> com cinco <td> na tabela
const criarLinha = function(numero, par, impar, multi5, pot2){
    const tabela = document.getElementById("tabela") // referencia o <tbody> no HTML
    const tr     = document.createElement("tr")      // cria a linha

    // Cada bloco cria uma célula e define seu valor
    const tdNum = document.createElement("td")
    tdNum.textContent = numero

    const tdPar = document.createElement("td")
    tdPar.textContent = par

    const tdImpar = document.createElement("td")
    tdImpar.textContent = impar

    const tdMulti5 = document.createElement("td")
    tdMulti5.textContent = multi5

    const tdPot2 = document.createElement("td")
    tdPot2.textContent = pot2

    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMulti5, tdPot2) // monta as células dentro da linha
    tabela.appendChild(tr) // adiciona a linha no final da tabela
}

// Executada ao clicar no botão
const handleClick = function(){
    let tabela       = document.getElementById("tabela")
    tabela.innerHTML = '' // limpa a tabela antes de gerar novos resultados

    const quantidade = Number(document.getElementById("quantidade").value) // lê o input do usuário

    // Gera uma lista para cada coluna da tabela
    const listaNumeros = criarListaNumeros(quantidade)
    const listaPar     = criarListaPares(quantidade)
    const listaImpar   = criarListaImpares(quantidade)
    const listaMulti5  = criarListaMulti5(quantidade)
    const listaPot2    = criarListaPotencia2(quantidade)

    // Percorre as listas e monta uma linha por vez na tabela
    for(let i = 0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaPar[i], listaImpar[i], listaMulti5[i], listaPot2[i])
    }
}