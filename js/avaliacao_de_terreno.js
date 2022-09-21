let avaliar_terreno = () => {
    let largura = parseInt(prompt("digite o tamanho da largura "))
    let altura = parseInt(prompt("digite o tamanho da altura "))
    let metros_quadrado = largura*altura

    if(metros_quadrado < 100){
        console.log("TERRENO POPULAR")
    }else if (metros_quadrado >= 100 && metros_quadrado < 500) {
        console.log("TERRENO MASTER")
    }else {
        console.log("TERRENO VIP")
    }
}

avaliar_terreno()