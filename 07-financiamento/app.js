// Calcula os valores de cada mês e monta a tabela
function calcularFinanciamento(valorTotal, parcelas, taxa) {
    const parcela    = valorTotal / parcelas  // parcela fixa: divide o total pelo número de meses
    let saldoDevedor = valorTotal             // começa com o valor total e vai diminuindo

    for (let mes = 1; mes <= parcelas; mes++) {         // loop: executa uma vez por mês
        const jurosMes = saldoDevedor * (taxa / 100)   // juros incidem sobre o saldo atual
        const totalMes = parcela + jurosMes            // o que o cliente paga no mês
        saldoDevedor   = saldoDevedor - parcela        // desconta a parcela do saldo

        criarLinha(mes, parcela, jurosMes, totalMes, saldoDevedor) // envia os dados para virar linha na tabela
    }
}

// Recebe os dados de um mês e cria uma linha (<tr>) com cinco colunas (<td>)
const criarLinha = function(mes, parcela, juros, totalMes, saldoDevedor){

    const tabela = document.getElementById("tabela") // referencia o <tbody> no HTML
    const tr     = document.createElement("tr")      // cria a linha que vai entrar na tabela

    // Cada bloco abaixo cria uma célula, define seu texto e sua classe de cor
    const tdMes = document.createElement("td")
    tdMes.textContent = mes

    const tdParcela = document.createElement("td")
    tdParcela.textContent = `R$ ${parcela.toFixed(2)}` // toFixed(2) garante duas casas decimais
    tdParcela.classList.add('col-parcela')             // aplica a cor definida no CSS

    const tdJuros = document.createElement("td")
    tdJuros.textContent = `R$ ${juros.toFixed(2)}`
    tdJuros.classList.add('col-juros')

    const tdTotalMes = document.createElement("td")
    tdTotalMes.textContent = `R$ ${totalMes.toFixed(2)}`
    tdTotalMes.classList.add('col-total')

    const tdSaldoDevedor = document.createElement("td")
    tdSaldoDevedor.textContent = `R$ ${saldoDevedor.toFixed(2)}`
    tdSaldoDevedor.classList.add('col-saldo')

    tr.replaceChildren(tdMes, tdParcela, tdJuros, tdTotalMes, tdSaldoDevedor) // coloca todas as células dentro da linha
    tabela.appendChild(tr) // adiciona a linha no final da tabela
}

// Executada ao clicar no botão
const handleClick = function() {
    const tabela     = document.getElementById('tabela')
    tabela.innerHTML = '' // limpa a tabela antes de gerar novos resultados

    // Lê os três valores dos inputs e converte para número
    const valorTotal = parseFloat(document.getElementById('valorTotal').value)
    const taxa       = parseFloat(document.getElementById('taxa').value)
    const parcelas   = parseInt(document.getElementById('parcelas').value) // parseInt pois parcelas é número inteiro

    calcularFinanciamento(valorTotal, parcelas, taxa) // dispara o cálculo
}