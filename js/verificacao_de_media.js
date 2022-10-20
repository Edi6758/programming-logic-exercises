/**
 * Crie um programa que leia duas notas de um aluno e calcule a sua média,
    mostrando uma mensagem no final, de acordo com a média atingida:
    - Média até 4.9: REPROVADO
    - Média entre 5.0 e 6.9: RECUPERAÇÃO
    - Média 7.0 ou superior: APROVADO
 */

let verificar_media = () => {
    let valor01 = parseInt(prompt("Por favor digite o valor da nota 01 "))
    let valor02 = parseInt(prompt("OK, agora digite o valor da nota 02 "))
    media = (valor01+valor02)/2
    if(media <= 4.9) {
        console.log(`Sua média é ${media}, parabéns, você está reprovado...`)
    }else if(media >= 5 && media <= 6.9) {
        console.log(`Sua média é ${media}, OK, você está em recuperação...`)
    }else {
        console.log(`Sua média é ${media}, parabéns, você foi aprovado!!!`)
    }
}

verificar_media()