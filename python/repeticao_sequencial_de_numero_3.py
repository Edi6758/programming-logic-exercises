"""
Crie um aplicativo que mostre na tela a seguinte contagem:
0 3 6 9 12 15 18 Acabou! 
"""


def repetir_numero():
    valor = int(input('Digite o valor 0 por favor '))
    lista = []
    for valor in range(valor, 18+1, 3):
        lista.append(valor)
    textoLIsta = " ".join(map(str, lista))
    print(f'{textoLIsta} Acabou')


repetir_numero()
