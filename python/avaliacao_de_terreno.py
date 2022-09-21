def avaliar_terreno():
    largura = int(input("digite o tamanho da largura "))
    altura = int(input("digite o tamanho da altura "))
    metros_quadrado = largura*altura
    
    if metros_quadrado < 100:
        print("TERRENO POPULAR")
    elif metros_quadrado >=100 and metros_quadrado <  500:
        print("TERRENO MASTER")
    else:
        print("TERRENO VIP")
    
avaliar_terreno()