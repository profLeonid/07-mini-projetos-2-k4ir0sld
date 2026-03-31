'use strict'

//Função para listar os meses
const criarListaMeses = function(meses){
    let listaMes = []

    for(let i = 1; i <= meses; i++){
        listaMes.push(i)
    }
    return criarListaParcelas(listaMes) 
}

//Função para calcular as parcelas
const criarListaParcelas = function(listaMes, valorTotal){
    let listaParcelas = []

    for(let i = 0; i < listaMes.length; i++){
        listaParcelas.push(Number(valorTotal/listaMes.length).toFixed(2))
    }
    return criarLista(listaMes, listaParcelas, valorTotal)
}

const criarLista = function(listaMes, listaParcela, valorTotal){
    let listaDevedor  = []
    let saldoDevedor = valorTotal

    for(let i = 1; i <= listaMes.length; i++){
        saldoDevedor = saldoDevedor - Number(listaParcela)
        listaDevedor.push(Number(saldoDevedor).toFixed(2))
    }
    return (listaDevedor, listaMes)
}

//console.log(saldoDevedor(12,1000, 12000))

//console.log (saldoDevedor(12, 12000))
//Juros do Mês = saldo devedor × (taxa ÷ 100)
const criarListaJurosMes = function(listaDevedor, listaMes, taxa){
    let listaJuros = []
    let resultado
    
    for(let i = 0; i < listaMes.length; i++){
        resultado = listaDevedor * (taxa / 100)
        listaJuros.push(Number(resultado).toFixed(2))
    }
    return listaJuros
}

console.log()

console.log(criarListaJurosMes(11000, 12, 1.5))

