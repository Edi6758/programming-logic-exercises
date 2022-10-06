"""
Escreva um programa para aprovar ou não o empréstimo bancário para a compra
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
ela não pode exceder 30% do salário ou então o empréstimo será negado.
"""


def aprovar_emprestimo():
    valor_da_casa = int(input("Digite o valor da casa: "))
    salrio_do_comprador = int(input("Informe o seu salário: "))
    valor_de_anos = int(input("Valor em anos: "))
    porcentualSalario = salrio_do_comprador * 0.3
    prestacaoMensal = (valor_da_casa / valor_de_anos)/12

    if (porcentualSalario < prestacaoMensal):
        print(
            f"A parecela da casa é {prestacaoMensal}\nestá acima do porcentual mínimo exigido do seu salário que é {porcentualSalario}")
    else:
        print(
            f"A parecela da casa é {prestacaoMensal}\n COMPRA APROVADA COM O SEU PORCENTUAL DE {porcentualSalario}")


aprovar_emprestimo()
