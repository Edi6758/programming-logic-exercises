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