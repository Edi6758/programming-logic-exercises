def ordenacao_simples():
    lista_devalores = []
    for i in range(10):
        valor_entrada = int(input("Por favor digite o valor a ser ordenado "))
        lista_devalores.append(valor_entrada)
    lista_devalores_ordenados = list(sorted(lista_devalores))
    lista_devalores_invertidos = list(reversed(lista_devalores_ordenados))
    print(
        f'a lista de valores ordenadas é {lista_devalores_ordenados}' +
        f'\na lista de valores invertida é {lista_devalores_invertidos}'
    )


ordenacao_simples()
