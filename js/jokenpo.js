/**
 * Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
 */

let jokenpo = () => {
    let entrada = prompt("Escolha, pedra, papel ou tesoura ")
    let inimigo = Math.floor(Math.random() * 3 + 1)
    inimigo_obj = { 1: "pedra", 2: "papel", 3: "tesoura" }
    if ((entrada == "tesoura" && inimigo_obj[inimigo] == "papel") || (entrada == "pedra" && inimigo_obj[inimigo] == "tesoura") || (entrada == "papel" && inimigo_obj[inimigo] == "pedra")) {
        console.log(`você jogou ${entrada}\nseu adversário jogou ${inimigo_obj[inimigo]}\nVOCÊ GANHOU`)
    }
    else if ((entrada == "tesoura" && inimigo_obj[inimigo] == "tesoura") || (entrada == "pedra" && inimigo_obj[inimigo] == "pedra") || (entrada == "papel" && inimigo_obj[inimigo] == "papel")) {
        console.log(`você jogou ${entrada}\nseu adversário jogou ${inimigo_obj[inimigo]}\nVOCÊ EMPATOU`)
    }

    else if ((entrada == "tesoura" && inimigo_obj[inimigo] == "pedra") || (entrada == "pedra" && inimigo_obj[inimigo] == "papel") || (entrada == "papel" && inimigo_obj[inimigo] == "tesoura")) {
        console.log(`você jogou ${entrada}\nseu adversário jogou ${inimigo_obj[inimigo]}\nVOCÊ PERDEU`)
    }
    else {
        console.log("POR FAVOR, DIGITE UM DOS VALORES ABAIXO\npedra, papel ou tesoura\n(tudo em letra minúscula...)")
    }
}

jokenpo()