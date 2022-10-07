"""
Um programa de vida saudável quer dar pontos atividades físicas que podem
ser trocados por dinheiro. O sistema funciona assim:
- Cada hora de atividade física no mês vale pontos
- até 10h de atividade no mês: ganha 2 pontos por hora
- de 10h até 20h de atividade no mês: ganha 5 pontos por hora
- acima de 20h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
"""


def pontos_de_vida():
    horasSemanais = int(input("Informe suas horas de treino semanal.... "))
    pontos = 0

    if (horasSemanais < 10):
        pontos = horasSemanais*2
    elif (horasSemanais >= 10 and horasSemanais <= 20):
        pontos = horasSemanais*5
    else:
        pontos = horasSemanais*10

    print(f"Seu saldo pela sua pontuação de treino é: {pontos*0.05}")


pontos_de_vida()
