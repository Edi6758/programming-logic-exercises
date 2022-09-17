def verificar_media():
    valor01 = int(input("Por favor digite o valor da nota 01 "))
    valor02 = int(input("OK, agora digite o valor da nota 02 "))
    media = (valor01 + valor02)/2
    if media <= 4.9:
        print(f"Sua média é {media} parabéns, você está reprovado...")
    elif media >= 5.0 and media <= 6.9:
        print(f"Sua média é {media} parabéns, OK, você está em recuperação...")
    else:
        print(f"Sua média é {media} parabéns, você foi aprovado!!!")

verificar_media()