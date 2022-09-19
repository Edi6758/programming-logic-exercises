let ordenacao_simples = () => {
    let lista_devalores = [];
    for (let i = 0; i < 10; i++) {
        let valor_entrada = parseInt(
            prompt("Por favor digite o valor a ser ordenado ")
        );
        lista_devalores.push(valor_entrada);
    }
    lista_devalores.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    console.log(`
        a lista de valores ordenadas é ${lista_devalores}\n
        a lista de valores reversa é ${lista_devalores.reverse()}
    `);
};

ordenacao_simples();
