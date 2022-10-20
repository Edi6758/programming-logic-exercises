/**
 * Escreva um programa que mostre na tela a seguinte contagem:
    10 9 8 7 6 5 4 3 Acabou!
 */

let repetirNumero = () => {
    let valor = 10
    let lista = []
    console.log(valor)
    for(let i = 10; i >= 3; i--) {
        lista.push(i)
    }
    let lista_texto = lista.toString()
    console.log(`${lista_texto} acabou`)
}
repetirNumero()

//problemas em colocar um valor variável no for...