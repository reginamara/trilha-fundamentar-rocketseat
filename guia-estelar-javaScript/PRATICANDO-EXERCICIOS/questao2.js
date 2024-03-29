/*

Fluxo de Caixa Familiar

Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

Desafio:

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/


let family = {
    incomes: [2200, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00,2000]
}

function sum(array) {
    let total = 0;

for(let value of array) {
    total += value
}

    return total
}

function calculateBalance() {
    const calculateIcomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIcomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()