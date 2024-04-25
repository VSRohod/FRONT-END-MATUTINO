console.log('Olá mundo');

//caixas de texto (input)
// prompt = recebe um texto
// window.prompt("Qual é seu nome?");

// alert = manda uma mensagem
// window.alert("FRONT É TOP!");

// confirm = pergunta podendo sair verdadeiro o falso
// window.confirm("Deseja baixar arquivo novamente?");

var melancia = "Uma variavel de teste!";
var ligado = true;
var numero = 91;
var objeto = [];
// objeto = tipo de coletanea de dados, onde podemosinserir, remover e pesquisar

//type of = verifica o tipo da variavel

// const = constante, uma variavel que não pode ser sobrescrita
const fixo = "Não posso mudar!";
var temporarioVar = "Fico Salvo!";
let temporaria = "Sou temporário";

// var escopo global e sobrescrevivel
// let escopo local e sobrescrevivel
// const escopo global e não sobrescrevivel

function teste() {
    temporaria = "Rodando no function Let";
    temporarioVar = "Rodando no function";

    nome = "Victor";

    console.log(temporaria);
    console.log(temporarioVar);
}


// output = resultado
// input = numero1, numero2
// Coleta dois números e soma eles, após isso , imprime na tela o resultado

function somar() {
    window.alert("Seja bem vindo ao algoritmo de somar!");
    let numero1 = Number(window.prompt("Digite o seu primeiro número:"));
    let numero2 = Number(window.prompt("Digite o seu segundo número:"));
    // ParseInt = Numeros inteiros
    // ParseFloat = Números reais
    // Number = Numeros inteiros e reais

    // window.alert(typeof numero1)

    var resultado = numero1 + numero2;

    // concatenação
    window.alert("Resultado é de :"+resultado);
    window.alert(`Resultado é de : ${resultado}`);

}


somar()