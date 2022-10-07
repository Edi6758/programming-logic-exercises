/**
 * Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
tabela a seguir:
- Carros populares (aluguel de R$90 por dia)
- Até 100Km percorridos: R$0,20 por Km
- Acima de 100Km percorridos: R$0,10 por Km
- Carros de luxo (aluguel de R$150 por dia)
- Até 200Km percorridos: R$0,30 por Km
- Acima de 200Km percorridos: R$0,25 por Km
 */

let aluguel_de_carro = () => {
    let tipoDeCarro = prompt("Digite o seu tipo de carro (popular) OR (luxo)")
    let diasAlugados = parseInt(prompt("Informe os dias que o carro vai ser alugado"))
    let kmPercorrido = parseInt(prompt("Informe os KM percorrido"))
    let aluguel = 0

    if (tipoDeCarro == "popular") {
        aluguel = 90 * diasAlugados
        if (kmPercorrido < 100) {
            aluguel = aluguel + 0.2 * kmPercorrido
        }

        else {
            aluguel = aluguel + 0.1 * kmPercorrido
        }

    }

    else if (tipoDeCarro == "luxo") {
        aluguel = 150 * diasAlugados
        if (kmPercorrido < 100) {
            aluguel = aluguel + 0.2 * kmPercorrido
        }

        else {
            aluguel = aluguel + 0.1 * kmPercorrido
        }

    }

    console.log(aluguel)
}

aluguel_de_carro()

