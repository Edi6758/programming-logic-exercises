"""
Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado.
"""
import random


def sortear_numero():
    valor = input("Digite um valor de 0 a 10 ")
    valorAleatorio = random.randint(1, 10)

    if (valor != valorAleatorio):
        print(
            f"tente novamente, o valor que você digitou é {valor}\no valor sorteado é {valorAleatorio}")
    else:
        print(
            f"parabéns, você acertou o número! o valor sorteado é {valorAleatorio}\no valor digitado é {valor}")


sortear_numero()
