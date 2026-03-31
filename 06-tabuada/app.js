'use strict'

//Função para listar numeros
const criarListaNumeros = function(quantidade){
    let listaNumero = []

    for(let i = 1; i <= quantidade; i++){
        listaNumero.push(i)
    }
    return listaNumero
}

const criarListaAdicao = function(numero){
    let listaResultado = []
    let resultado

    for(let cont = 1; cont <= numero; cont++){
        resultado = numero + cont
        listaResultado.push(resultado)
    }
    return listaResultado
}

const criarListaSubtracao = function(numero){
    let listaResultado = []
    let resultado

    for(let cont = 1; cont <= numero; cont++){
        resultado = numero - cont
        listaResultado.push(resultado)
    }

    return listaResultado
}

const criarListaMultiplicacao = function(numero){
    let listaResultado = []
    let resultado

    for(let cont = 1; cont <= numero; cont++){
        resultado = numero * cont
        listaResultado.push(resultado)
    }

    return listaResultado
}

const criarListaDivisao = function(numero){
    let listaResultado = []
    let resultado

    for(let cont = 1; cont <= numero; cont++){
        resultado = numero / cont
        listaResultado.push(Number(resultado.toFixed(2)))
    }

    return listaResultado
}

const criarLinha = function(numero, adi, subt, multi, divis){
    const tabela = document.getElementById("tabela")
    const tr = document.createElement("tr")

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

    tr.replaceChildren(tdNum, tdAdi, tdSubt, tdMulti, tdDivisi)
    tabela.appendChild(tr)

}

const handleClick = function(){

    let tabela = document.getElementById("tabela")
    tabela.innerHTML = ''

    const quantidade = Number(document.getElementById("quantidade").value)

    const listaNumeros = criarListaNumeros(quantidade)
    const listaAdicao = criarListaAdicao(quantidade)
    const listaSubtracao = criarListaSubtracao(quantidade)
    const listaMultiplicacao = criarListaMultiplicacao(quantidade)
    const listaDivisao = criarListaDivisao(quantidade)

    for(let i = 0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracao[i], listaMultiplicacao[i], listaDivisao[i])
    }


}



