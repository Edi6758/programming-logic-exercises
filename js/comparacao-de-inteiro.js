//Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
//na tela uma das mensagens abaixo:
//- O primeiro valor é o maior
//- O segundo valor é o maior
//- Não existe valor maior, os dois são iguais

let verificarNumeroInteiro = () => {
    let valor01 = parseInt(prompt("Por favor digitem o primeiro valor: "))
    let valor02 = parseInt(prompt("Por favor repita o processo digitando um segundo valor: "))
    if(valor01 > valor02){
        console.log("O primeiro valor é o maior")
    }else if (valor01 === valor02){
        console.log("Não existe valor maior, os dois são iguais")
    }else {
        console.log("O segundo valor é o maior")
    }
}
verificarNumeroInteiro()