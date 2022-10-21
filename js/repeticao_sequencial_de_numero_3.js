/**
 * Crie um aplicativo que mostre na tela a seguinte contagem:
    0 3 6 9 12 15 18 Acabou! 
 */

let repetirNumero = () => {
    let valor = 0
    let lista = []
    console.log(valor)
    for(let i = 0; i <= 18; i=i+3) {
        lista.push(i)
    }
    let lista_texto = lista.toString()
    console.log(`${lista_texto} acabou`)
}
repetirNumero()

//problemas em colocar um valor variável no for...