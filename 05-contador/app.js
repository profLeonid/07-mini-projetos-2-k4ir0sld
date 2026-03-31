'use strict'

//Função para listar numeros
const criarListaNumeros = function(quantidade){
    let listaNumero = []

    for(let i = 1; i <= quantidade; i++){
        listaNumero.push(i)
    }
    return listaNumero
}

//Função para listar numeros pares
const criarListaPares = function(numero){
    let listaPar = []
    let valor = 2 

    for(let i = 1; i <= numero; i++){
        listaPar.push(valor)
        valor = valor + 2   
    }
    return listaPar

}

//Função para listar numeros impares
const criarListaImpares = function(numero){
    let listaImpar = []
    let valor = 1

    for(let i = 1; i <= numero; i++){ 
        listaImpar.push(valor)
        valor = valor + 2 
    }
    return listaImpar

}

//Função para listar a quantidade de numeros multiplicados por 5 (Tipo a tabuada do 5)
const criarListaMulti5 = function(numero){
    let listaMulti = []
    let valor = 0

    for(let i = 1; i <= numero; i++){
        valor = valor + 5
        listaMulti.push(valor)
    }
    return listaMulti
}

//Função para listar numeros potenciados a 2 pela quantidade de numeros
const criarListaPotencia2 = function(numero){
    let listaPot = []
    let valor = 2
    let resultado
    for(let i = 0; i <= numero; i++){
        resultado = (valor**i)
        listaPot.push(resultado)
    }
    return listaPot
}

const criarLinha = function(numero, par, impar, multi5, pot2){
    const tabela = document.getElementById("tabela")
    const tr = document.createElement("tr")

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

    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMulti5, tdPot2)
    tabela.appendChild(tr)

}

const handleClick = function(){

    //Chama o id da tabela e utiliza o inner para limpar de uma só vez
    let tabela = document.getElementById("tabela")
    tabela.innerHTML = ''

    const quantidade = Number(document.getElementById("quantidade").value)
    
    const listaNumeros = criarListaNumeros(quantidade)
    const listaPar = criarListaPares(quantidade)
    const listaImpar = criarListaImpares(quantidade)
    const listaMulti5 = criarListaMulti5(quantidade)
    const listaPot2 = criarListaPotencia2(quantidade)
    
    for(let i = 0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaPar[i], listaImpar[i], listaMulti5[i], listaPot2[i])
    }
    
}