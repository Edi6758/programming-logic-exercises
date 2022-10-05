"""
29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3 %
- entre 3 e 10 anos: aumento de 12.5 %
- 10 anos ou mais: aumento de 20 %
"""


def reajuste_de_salario():
    nome = input("digite seu nome ")
    salario = int(input("digite seu salário "))
    tempo = int(input("digite seu tempo de empresa (em anos) "))

    if (tempo <= 3):
        salario = salario*1.03
    elif (tempo > 3 and tempo <= 10):
        salario = salario*1.125
    elif (tempo > 10):
        salario = salario*1.2

    print(f"seu nome é {nome} seu salário novo é {salario}")


reajuste_de_salario()
