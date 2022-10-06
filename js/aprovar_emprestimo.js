/**
 * Escreva um programa para aprovar ou não o empréstimo bancário para a compra
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
ela não pode exceder 30% do salário ou então o empréstimo será negado.
 */

let aprovar_emprestimo = () => {
    let valor_da_casa = parseInt(prompt("Digite o valor da casa: "))
    let salario_do_comprador = parseInt(prompt("Informe o seu salário: "))
    let valor_de_anos = parseInt(prompt("Valor em anos: "))
    let porcentualSalrio = salario_do_comprador * 0.3
    let prestacaoMensal = (valor_da_casa / valor_de_anos) / 12
    
    if (porcentualSalrio < prestacaoMensal) {
        console.log(`A parecela da casa é ${prestacaoMensal}\nestá acima do porcentual mínimo exigido do seu salário que é ${porcentualSalrio}`)
    } else {
        console.log(`A parecela da casa é ${prestacaoMensal}\n COMPRA APROVADA COM O SEU PORCENTUAL DE ${porcentualSalrio}`)
    }
}

aprovar_emprestimo()