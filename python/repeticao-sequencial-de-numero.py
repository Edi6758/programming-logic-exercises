"""
Escreva um programa que mostre na tela a seguinte contagem:
6 7 8 9 10 11 Acabou
"""


def repetir_numero():
    valor = int(input('Digite o valor 6 por favor '))
    lista = []
    for valor in range(valor, valor+7):
        lista.append(valor)
    textoLIsta = " ".join(map(str, lista))
    print(f'{textoLIsta} Acabou')


repetir_numero()
