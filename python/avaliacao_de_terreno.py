
"""
Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP
"""


def avaliar_terreno():
    largura = int(input("digite o tamanho da largura "))
    altura = int(input("digite o tamanho da altura "))
    metros_quadrado = largura*altura

    if metros_quadrado < 100:
        print("TERRENO POPULAR")
    elif metros_quadrado >= 100 and metros_quadrado < 500:
        print("TERRENO MASTER")
    else:
        print("TERRENO VIP")


avaliar_terreno()
