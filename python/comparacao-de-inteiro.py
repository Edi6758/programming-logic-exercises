"""
Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais
"""


def verificar_numero_inteiro():
    valor01 = int(input("Por favor digitem o primeiro valor: "))
    valor02 = int(
        input("Por favor repita o processo digitando um segundo valor: "))

    if valor01 > valor02:
        print("O primeiro valor é o maior")
    elif valor02 == valor01:
        print("Não existe valor maior, os dois são iguais")
    else:
        print("O segundo valor é maior")


verificar_numero_inteiro()
