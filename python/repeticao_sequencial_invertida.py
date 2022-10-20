"""
Escreva um programa que mostre na tela a seguinte contagem:
10 9 8 7 6 5 4 3 Acabou!
"""


def repetir_numero():
    valor = int(input('Digite o valor 10 por favor '))
    lista = []
    for valor in range(valor, valor-8, -1):
        lista.append(valor)
    textoLIsta = " ".join(map(str, lista))
    print(f'{textoLIsta} Acabou')


repetir_numero()
