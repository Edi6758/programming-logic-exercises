let validar_triangulo = () => {
    let reta1 = parseInt(prompt("digite o valor da primeira reta "))
    let reta2 = parseInt(prompt("digite o valor da segunda reta "))
    let reta3 = parseInt(prompt("digite o valor da terceira reta "))

    if(reta1 > reta3+reta2 || reta2 > reta1+reta3 || reta3 > reta2+reta1){
        console.log('não é possível formar um triangulo')
    }else {
        if(reta1 == reta2 && reta2 == reta3 && reta3 == reta1) {
            console.log("triângulo equilátero")
        }else if(reta1 == reta2 || reta2 == reta3 || reta3 == reta1) {
            console.log("triânglo isóceles")
        }else {
            console.log('triângulo escaleno')
        }
    }
}

validar_triangulo()