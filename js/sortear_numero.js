/**
 * Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado.
 */
let sortear_numero = () => {
    let valor = parseInt(prompt("Digite um valor de 0 a 10 "))
    let valorAleatorio = Math.floor(Math.random() * 10)
    console.log(valor, valorAleatorio)
    if (valor != valorAleatorio) {
        console.log(`tente novamente, o valor que você digitou é ${valor}\no valor sorteado é ${valorAleatorio}"`)
    } else {
        console.log(`parabéns, você acertou o número! o valor sorteado é ${valorAleatorio}\no valor digitado é ${valor}`)
    }
}

sortear_numero()
