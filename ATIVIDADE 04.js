const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: (valor) => {
        contaBancaria.saldo += valor;
        contaBancaria.historicos.push({ tipo: "Depósito", valor: valor });
        return `Depósito de R$${valor / 100} realizado para o cliente: ${contaBancaria.nome}`;
    },

    sacar: (valor) => {
        if (valor > contaBancaria.saldo) {
            return `Saldo insuficiente para o saque de: ${contaBancaria.nome}`;
        }

        contaBancaria.saldo -= valor;
        contaBancaria.historicos.push({ tipo: "Saque", valor: valor });
        return `Saque de R$${valor / 100} realizado para o cliente: ${contaBancaria.nome}`;
    },

    extrato: () => {
        let historico = "Extrato de " + contaBancaria.nome + " - Saldo: R$" + contaBancaria.saldo / 100 + "\n";
        historico += "Histórico:\n";

        for (let transacao of contaBancaria.historicos) {
            historico += `${transacao.tipo} de R$${transacao.valor / 100}\n`;
        }

        return historico;
    }
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
