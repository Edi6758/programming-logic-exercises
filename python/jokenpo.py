"""
Crie um jogo de JoKenPo(Pedra-Papel-Tesoura)
"""


import random


def jokenpo():
    entrada = input("Escolha, pedra, papel ou tesoura ")
    inimigo = random.randint(1, 3)
    inimigo_dic = {1: "pedra", 2: "papel", 3: "tesoura"}
    print(inimigo_dic[inimigo])
    if ((entrada == "tesoura" and inimigo_dic[inimigo] == "papel") or (entrada == "pedra" and inimigo_dic[inimigo] == "tesoura") or (entrada == "papel" and inimigo_dic[inimigo] == "pedra")):
        print(
            f"você jogou {entrada}\nseu adversário jogou {inimigo_dic[inimigo]}\nVOCÊ GANHOU")
    elif ((entrada == "tesoura" and inimigo_dic[inimigo] == "tesoura") or (entrada == "pedra" and inimigo_dic[inimigo] == "pedra") or (entrada == "papel" and inimigo_dic[inimigo] == "papel")):
        print(
            f"você jogou {entrada}\nseu adversário jogou {inimigo_dic[inimigo]}\nVOCÊ EMPATOU")
    elif ((entrada == "tesoura" and inimigo_dic[inimigo] == "pedra") or (entrada == "pedra" and inimigo_dic[inimigo] == "papel") or (entrada == "papel" and inimigo_dic[inimigo] == "tesoura")):
        print(
            f"você jogou {entrada}\nseu adversário jogou {inimigo_dic[inimigo]}\nVOCÊ PERDEU")
    else:
        print(f"POR FAVOR, DIGITE UM DOS VALORES ABAIXO\npedra, papel ou tesoura\n(tudo em letra minúscula...)")


jokenpo()
