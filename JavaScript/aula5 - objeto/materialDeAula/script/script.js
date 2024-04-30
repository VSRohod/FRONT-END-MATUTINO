// var cliente1Nome = "Leo";
// var cliente1Agencia = "12345-x";
// var cliente1TipoDeConta = "Corrente";
// var cliente1Cpf = "999999999";
// var cliente1Saldo = "0";

// cliente1Saldo = "100"

// var cliente1 = ["nome = Leo"];

class Cliente {
    nome;
    agencia;
    tipoDeConta;
    cpf;
    saldo;
    depositar(valor){
        this.saldo += valor;
        let resultado = document.querySelector("#teste1");
        resultado.innerHTML = `
        <p>NOME DA CONTA : ${this.nome}</p>
        <p>O SALDO DA CONTA : ${this.saldo}</p>
        `;
    };
    sacar(valor){
        this.saldo -= valor;
        let resultado = document.querySelector("#teste1");
        resultado.innerHTML = `
        <p>NOME DA CONTA : ${this.nome}</p>
        <p>O SALDO DA CONTA : ${this.saldo}</p>
        `;
    };
}

function depositar(){
    let valorInput = Number(document.querySelector("#cadastrar").value);
    cliente1.depositar(valorInput);
}

var cliente1 = new Cliente();
cliente1.nome = "Miquéias";
cliente1.agencia = "12345-x";
cliente1.tipoDeConta = "Corrente";
cliente1.cpf = "9999999-99";
cliente1.saldo = 0;

console.log(cliente1)


var cliente2 = new Cliente();
var cliente3 = new Cliente();

class ClientePremium {
    constructor(nome,cpf,saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = saldo;
    }
}

var clienteEspecial = new ClientePremium("Cesar","888888",100000);
console.log(clienteEspecial)