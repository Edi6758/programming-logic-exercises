let reajuste_de_salario = () => {
    let nome = prompt("digite seu nome ");
    let salario = parseInt(prompt("digite seu salário "));
    let tempo = parseInt(prompt("digite seu tempo de empresa (em anos) "));

    if (tempo <= 3) {
        salario = salario * 1.03;
    } else if (tempo > 3 && tempo <= 10) {
        salario = salario * 1.125;
    } else {
        salario = salario * 1.2;
    }
    console.log(`seu nome é ${nome} seu salário novo é ${salario}`);
};

reajuste_de_salario();
