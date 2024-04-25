function atividade1() {
    let clientes = Number(window.prompt("Insira a quantidade de clientes"));
    let valorTotal = Number(window.prompt("Qual foi o valor total"));

    let valorDividido = (valorTotal / clientes).toFixed(2);

    window.alert("O valor para cada pessoa será de : R$ "+valorDividido);
}

function atividade2(){
   let numero = Number(window.prompt("Insira um número"));
   
   window.alert(`O número escolhido é ${numero}, o sucessor é ${numero+1} e seu antecessor é ${numero-1}`);
}
