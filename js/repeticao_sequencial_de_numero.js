/**
 * Escreva um programa que mostre na tela a seguinte contagem:
    6 7 8 9 10 11 Acabou
 */

let repetirNumero = () => {
    let valor = 6
    let lista = []
    console.log(valor)
    for(let i = 6; i < 13; i++) {
        lista.push(i)
    }
    let lista_texto = lista.toString()
    console.log(`${lista_texto} acabou`)
}
repetirNumero()

//problemas em colocar um valor variável no for...